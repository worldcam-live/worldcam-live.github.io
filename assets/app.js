/* 월드캠 웨더 — app logic
 * - 카메라 목록/지역·국가·분류 필터/검색
 * - Open-Meteo 현재 날씨(기온·상태·풍속·습도·현지 시각)
 * - YouTube IFrame API(youtube-nocookie 호스트) 기반 수신 상태 확인(오프라인/임베드 제한 자동 배지)
 */
(function () {
  'use strict';

  const CAMS = (window.CAMERA_DATA || []).slice();
  // 점검용: ?demo=offline 이면 실제로 재생할 수 없는 영상 1개를 목록 맨 앞에 넣어
  // '접속 불가 / 오프라인' 배지가 자동으로 붙는지 확인할 수 있다.
  if (new URLSearchParams(location.search).get('demo') === 'offline') {
    CAMS.unshift({
      id: 'demo-offline', yt: 'zzzzzzzzzzz', name: '(점검용) 재생 불가 카메라', en: 'offline test card',
      city: '테스트', country: '점검', cc: 'ZZ', countryEn: 'test', flag: '🧪', region: 'asia',
      cat: 'street', src: 'creator', provider: '월드캠 웨더 점검',
      lat: 37.55, lon: 126.99, tz: 'Asia/Seoul', tags: ['테스트', 'test'],
      marqueeTest: true, note: '수신 상태 자동 감지 점검용 카드입니다.'
    });
  }
  const WMO = {
    0: ['맑음', '☀️'], 1: ['대체로 맑음', '🌤️'], 2: ['구름 조금', '⛅'], 3: ['흐림', '☁️'],
    45: ['안개', '🌫️'], 48: ['짙은 안개', '🌫️'],
    51: ['약한 이슬비', '🌦️'], 53: ['이슬비', '🌦️'], 55: ['강한 이슬비', '🌧️'],
    56: ['어는 이슬비', '🌧️'], 57: ['어는 이슬비', '🌧️'],
    61: ['약한 비', '🌦️'], 63: ['비', '🌧️'], 65: ['강한 비', '🌧️'],
    66: ['어는 비', '🌧️'], 67: ['어는 비', '🌧️'],
    71: ['약한 눈', '🌨️'], 73: ['눈', '🌨️'], 75: ['많은 눈', '❄️'], 77: ['눈알갱이', '🌨️'],
    80: ['소나기', '🌦️'], 81: ['소나기', '🌧️'], 82: ['강한 소나기', '⛈️'],
    85: ['눈 소나기', '🌨️'], 86: ['많은 눈 소나기', '❄️'],
    95: ['뇌우', '⛈️'], 96: ['뇌우·우박', '⛈️'], 99: ['뇌우·우박', '⛈️']
  };
  const REGIONS = [
    { key: 'all', label: '전체' },
    { key: 'asia', label: '🌏 아시아' },
    { key: 'europe', label: '🌍유럽' },
    { key: 'americas', label: '🌎 아메리카' },
    { key: 'oceania', label: '🐨 오세아니아' },
    { key: 'mideast', label: '🕌 중동' },
    { key: 'africa', label: '🦁 아프리카' }
  ];
  const CATS = [
    { key: 'all', label: '전체 분류' },
    { key: 'street', label: '🏙 관광지·거리' },
    { key: 'traffic', label: '🚗 도로·교통' },
    { key: 'nature', label: '🏔 해변·스키장·산' }
  ];
  const CAT_LABEL = { street: '관광지·거리', traffic: '도로·교통', nature: '해변·스키장·산' };
  const SRC_LABEL = { broadcaster: '방송사', public: '공공·지자체', webcam: '웹캠 운영사', local: '현지 운영', creator: '현지 크리에이터' };
  const STATUS_TTL = 5 * 60 * 1000;

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ───────── 국가 디렉토리(cc → 이름·국기·지역·개수) ───────── */
  const COUNTRIES = (function buildCountries() {
    const map = Object.create(null);
    CAMS.forEach((c) => {
      if (!c.cc || c.marqueeTest) return;
      if (!map[c.cc]) map[c.cc] = { cc: c.cc, name: c.country, flag: c.flag, region: c.region, n: 0 };
      map[c.cc].n += 1;
      // 같은 국가 코드에서 지역 표기가 다르면 첫 값을 유지한다(미국·캐나다 공용 국경 캠 등)
    });
    return Object.keys(map).map((k) => map[k]).sort((a, b) => {
      if (b.n !== a.n) return b.n - a.n;
      return a.name.localeCompare(b.name, 'ko');
    });
  })();
  const COUNTRY_BY_CC = COUNTRIES.reduce((m, c) => (m[c.cc] = c, m), Object.create(null));

  const state = { region: 'all', country: 'all', cat: 'all', q: '', sort: 'featured', liveOnly: false };
  const weather = Object.create(null);   // id -> {temp, code, wind, humidity, feels, isDay, time, tz}
  const status = Object.create(null);    // id -> 'idle'|'checking'|'live'|'ended'|'offline'|'unknown'

  CAMS.forEach((c) => { status[c.id] = 'idle'; });

  /* ───────── 수신 상태 캐시 ───────── */
  const CACHE_KEY = 'wcw.status.v5';
  const TTL = { live: 5 * 60 * 1000, ended: 2 * 60 * 1000, offline: 90 * 1000, unknown: 60 * 1000 };
  function loadCache() {
    try {
      const raw = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
      const now = Date.now();
      Object.keys(raw).forEach((id) => {
        const e = raw[id];
        if (!e || status[id] === undefined) return;
        if (now - e.t < (TTL[e.s] || STATUS_TTL)) status[id] = e.s;
      });
    } catch (e) { /* 캐시 없이 진행 */ }
  }
  function saveCache() {
    try {
      const out = {};
      Object.keys(status).forEach((id) => {
        if (['live', 'ended', 'offline'].indexOf(status[id]) >= 0) out[id] = { s: status[id], t: Date.now() };
      });
      localStorage.setItem(CACHE_KEY, JSON.stringify(out));
    } catch (e) { /* 저장 실패 무시 */ }
  }

  /* ───────── 칩 ───────── */
  function buildChips() {
    const rc = $('#region-chips');
    rc.innerHTML = REGIONS.map((r) => `<button type="button" class="chip" role="tab" data-region="${r.key}" aria-selected="${r.key === state.region}">${r.label}</button>`).join('');
    const cc = $('#cat-chips');
    cc.innerHTML = CATS.map((c) => `<button type="button" class="chip" role="tab" data-cat="${c.key}" aria-selected="${c.key === state.cat}">${c.label}</button>`).join('');
    rc.addEventListener('click', (e) => {
      const b = e.target.closest('[data-region]'); if (!b) return;
      state.region = b.dataset.region;
      state.country = 'all';               // 지역을 고르면 국가 선택은 해제
      paintRegionChips(); paintCountryChips(); render();
    });
    cc.addEventListener('click', (e) => {
      const b = e.target.closest('[data-cat]'); if (!b) return;
      state.cat = b.dataset.cat;
      $$('[data-cat]', cc).forEach((x) => x.setAttribute('aria-selected', x === b));
      render();
    });
  }

  function paintRegionChips() {
    $$('#region-chips [data-region]').forEach((x) => x.setAttribute('aria-selected', x.dataset.region === state.region));
  }

  /* ───────── 국가별 보기(디렉토리) ───────── */
  function countryChipsHtml() {
    const head = `<button type="button" class="chip chip-country${state.country === 'all' ? ' is-on' : ''}" data-country="all" aria-selected="${state.country === 'all'}">🌐 전체 국가 <b>${CAMS.filter((c) => !c.marqueeTest).length}</b></button>`;
    const list = COUNTRIES.map((c) => {
      const on = state.country === c.cc;
      return `<button type="button" class="chip chip-country${on ? ' is-on' : ''}" data-country="${c.cc}" aria-selected="${on}" title="${esc(c.name)} 라이브 캠 ${c.n}곳">
        <span class="cf" aria-hidden="true">${c.flag}</span><span class="cn">${esc(c.name)}</span><b>${c.n}</b></button>`;
    }).join('');
    return head + list;
  }
  function paintCountryChips() {
    const box = $('#country-grid');
    if (box) box.innerHTML = countryChipsHtml();
    const head = $('#country-count');
    if (head) head.textContent = COUNTRIES.length;
  }
  function buildCountryDirectory() {
    const box = $('#country-grid');
    if (!box) return;
    paintCountryChips();
    box.addEventListener('click', (e) => {
      const b = e.target.closest('[data-country]'); if (!b) return;
      state.country = b.dataset.country;
      state.region = 'all';                // 국가를 고르면 지역 선택은 해제
      paintRegionChips(); paintCountryChips(); render();
      const grid = $('#grid');
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    const toggle = $('#country-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const wrap = $('#country-dir');
        const open = wrap.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.textContent = open ? '국가 목록 접기 ⌃' : `국가 목록 펼치기 ⌄ (${COUNTRIES.length}개국)`;
      });
    }
  }

  /* ───────── 검색 매칭 ───────── */
  function haystack(c) {
    const co = COUNTRY_BY_CC[c.cc];
    return [c.name, c.en, c.city, c.country, c.countryEn, c.provider, CAT_LABEL[c.cat], c.note,
      co ? co.name : '']
      .concat(c.tags || []).join(' ').toLowerCase();
  }
  function matches(c) {
    if (state.country !== 'all' && c.cc !== state.country) return false;
    if (state.region !== 'all' && c.region !== state.region) return false;
    if (state.cat !== 'all' && c.cat !== state.cat) return false;
    if (state.liveOnly && status[c.id] !== 'live') return false;
    const q = state.q.trim().toLowerCase();
    if (!q) return true;
    const hay = haystack(c);
    return q.split(/\s+/).every((w) => hay.indexOf(w) >= 0);
  }

  /* ───────── 날씨 표시 ───────── */
  function wxOf(c) { return weather[c.id]; }
  function localClock(w) {
    if (!w || !w.time) return '–';
    const m = /T(\d{2}):(\d{2})/.exec(w.time);
    return m ? m[1] + ':' + m[2] : '–';
  }
  function fmtTemp(v) { return v == null ? '–' : (Math.round(v * 10) / 10).toFixed(1).replace(/\.0$/, '') + '°'; }

  function wxCard(c) {
    const w = wxOf(c);
    if (!w) return '<div class="wx"><span class="wx-na">날씨 불러오는 중…</span></div>';
    const meta = WMO[w.code] || ['—', '🌡️'];
    const day = w.isDay ? '☀️ 낮' : '🌙 밤';
    return `<div class="wx">
        <span class="wx-icon" aria-hidden="true">${meta[1]}</span>
        <span class="wx-main"><span class="wx-temp">${fmtTemp(w.temp)}</span><span class="wx-desc">${esc(meta[0])}</span></span>
        <span class="wx-side">풍속 <b>${w.wind == null ? '–' : (Math.round(w.wind * 10) / 10)}</b>m/s<br>현지 <b>${localClock(w)}</b> ${day}</span>
      </div>`;
  }

  /* ───────── 상태 배지 ───────── */
  function badgeHtml(s) {
    if (s === 'live') return '<span class="badge live" title="플레이어가 정상 로드되어 실시간 영상을 수신하고 있습니다">LIVE</span>';
    if (s === 'offline') return '<span class="badge off" title="플레이어 오류 — 방송 종료·비공개·임베드 제한">오프라인</span>';
    if (s === 'ended') return '<span class="badge off" title="현재 라이브가 아니며 다시보기로 재생됩니다">방송 종료</span>';
    if (s === 'checking') return '<span class="badge checking">확인 중…</span>';
    return '<span class="badge checking">상태 확인 대기</span>';
  }

  /* ───────── 카드 렌더 ───────── */
  function cardHtml(c) {
    const isExt = c.mode === 'external';
    const s = status[c.id];
    const thumb = isExt
      ? `<div class="thumb" role="img" aria-label="${esc(c.name)} — 외부 링크 항목">
           <div class="off-cover" style="display:grid;background:linear-gradient(135deg,#16233a,#0b1322)">
             <span style="font-size:13px;color:#c9d8ec;line-height:1.6">🔗 공식 페이지에서<br>직접 확인하는 항목입니다</span>
           </div>
         </div>`
      : `<div class="thumb" data-open-player="${c.id}" tabindex="0" role="button" aria-label="${esc(c.name)} 라이브 크게 보기">
           <img src="https://i.ytimg.com/vi/${c.yt}/mqdefault.jpg" alt="${esc(c.name)} 미리보기" loading="lazy" decoding="async">
           <span class="play" aria-hidden="true"><span>▶</span></span>
           <div class="badges">${badgeHtml(s)}${c.src === 'public' ? '<span class="badge">공식</span>' : ''}</div>
           <span class="cat-tag">${CAT_LABEL[c.cat] || ''}</span>
           <span class="src-tag">${SRC_LABEL[c.src] || '제공기관'}</span>
           <div class="off-cover"><span>현재 접속 불가 · 오프라인<br><small style="opacity:.75">원 채널에서 확인해 주세요</small></span></div>
         </div>`;

    const foot = isExt
      ? `<a class="btn btn-primary" href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.btnLabel || '공식 라이브 바로가기')} ↗</a>`
      : `<button type="button" class="btn btn-primary" data-open-player="${c.id}">크게 보기</button>
         <a class="btn btn-ghost" href="https://www.youtube.com/watch?v=${c.yt}" target="_blank" rel="noopener">원본 ↗</a>`;

    return `<article class="card${s === 'offline' || s === 'ended' ? ' is-off' : ''}" data-id="${c.id}">
      ${thumb}
      <div class="card-body">
        <h2 class="card-title">${esc(c.name)}</h2>
        <p class="card-sub">${c.flag} ${esc(c.country)} <span class="sep">·</span> ${esc(c.city)} <span class="sep">·</span> ${esc(c.provider)}</p>
        ${wxCard(c)}
        <div class="card-foot">${foot}</div>
      </div>
    </article>`;
  }

  function updateHero() {
    const liveN = CAMS.filter((c) => status[c.id] === 'live').length;
    const offN = CAMS.filter((c) => status[c.id] === 'offline' || status[c.id] === 'ended').length;
    const hero = $('#hero-stats');
    if (!hero) return;
    hero.innerHTML =
      `<span class="stat"><span class="dot"></span>수신 확인 <b>${liveN}</b></span>
       <span class="stat">오프라인·종료 <b>${offN}</b></span>
       <span class="stat">등록 카메라 <b>${CAMS.length}</b>곳 · <b>${COUNTRIES.length}</b>개국</span>
       <span class="stat">날씨 <b>Open-Meteo</b> 실시간</span>`;
  }

  function scopeLabel() {
    if (state.country !== 'all') {
      const c = COUNTRY_BY_CC[state.country];
      return c ? `${c.flag} ${c.name}` : '선택 국가';
    }
    const r = REGIONS.filter((x) => x.key === state.region)[0];
    return r && r.key !== 'all' ? r.label : '';
  }

  function render() {
    const list = CAMS.filter(matches);
    let ordered = list.slice();
    if (state.sort === 'temp-desc' || state.sort === 'temp-asc') {
      const dir = state.sort === 'temp-desc' ? -1 : 1;
      ordered.sort((a, b) => {
        const ta = weather[a.id] ? weather[a.id].temp : null;
        const tb = weather[b.id] ? weather[b.id].temp : null;
        if (ta == null && tb == null) return 0;
        if (ta == null) return 1;
        if (tb == null) return -1;
        return (ta - tb) * dir;
      });
    } else if (state.sort === 'name') {
      ordered.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    }
    const grid = $('#grid');
    grid.innerHTML = ordered.map((c) => cardHtml(c)).join('');
    grid.setAttribute('aria-busy', 'false');
    $('#empty').hidden = ordered.length > 0;

    const scope = scopeLabel();
    $('#result-count').innerHTML = `<b>${ordered.length}</b>곳 표시 중${scope ? ' · ' + esc(scope) : ''} · 전체 ${CAMS.length}곳 (임베드 ${CAMS.filter((c) => c.mode !== 'external').length} · 공식 링크 ${CAMS.filter((c) => c.mode === 'external').length})`;
    updateHero();

    observeCards();
  }

  /* ───────── 수신 상태: YouTube IFrame API (youtube-nocookie 호스트) ───────── */
  let ytReady = null;
  const queue = [];
  let busy = false;

  function loadYT() {
    if (ytReady) return ytReady;
    ytReady = new Promise((resolve) => {
      if (window.YT && window.YT.Player) return resolve(window.YT);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.async = true;
      document.head.appendChild(s);
      setTimeout(() => resolve(window.YT || null), 9000);
    });
    return ytReady;
  }

  /* 카메라 1곳의 수신 상태 확인.
   * 영상마다 플레이어를 새로 만들어 getVideoData()의 isLive·isPlayable로 판정한다.
   * (오프스크린 1대를 재사용하면 첫 오류 뒤 플레이어가 잠겨 이후 카메라가 모두 오프라인으로 잘못 표시된다.) */
  function probeOne(id) {
    return loadYT().then((YT) => new Promise((resolve) => {
      let done = false;
      let p = null;
      const pollTimers = [];
      const dbg = (window.__wcwProbe = window.__wcwProbe || {});
      const host = document.createElement('div');
      host.id = 'wcw-probe-' + id;
      host.setAttribute('aria-hidden', 'true');
      host.style.cssText = 'position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none;overflow:hidden';
      document.body.appendChild(host);
      const finish = (res, why) => {
        if (done) return; done = true;
        clearTimeout(timer);
        pollTimers.forEach((iv) => clearInterval(iv));
        dbg[id] = res + (why ? ':' + why : '');
        try { if (p && p.destroy) p.destroy(); } catch (e) { /* 무시 */ }
        try { host.remove(); } catch (e) { /* 무시 */ }
        resolve(res);
      };
      const timer = setTimeout(() => finish('unknown', 'timeout'), 12000);
      if (!YT || !YT.Player) return finish('unknown', 'noapi');
      try {
        p = new YT.Player(host, {
          host: 'https://www.youtube-nocookie.com',
          videoId: id,
          playerVars: { autoplay: 1, mute: 1, controls: 0, playsinline: 1, rel: 0, origin: location.origin },
          events: {
            onReady: (e) => {
              // 라이브는 재생이 시작된 뒤에 getVideoData().isLive가 true가 된다.
              // (DVR이 있는 24시간 라이브는 길이가 수백만 초로 나오므로 길이로는 판정할 수 없다.)
              try { e.target.playVideo(); } catch (err) { /* 무시 */ }
              let n = 0;
              const iv = setInterval(() => {
                if (done) { clearInterval(iv); return; }
                n++;
                let d = {}, st = -1;
                try { d = e.target.getVideoData() || {}; st = e.target.getPlayerState(); } catch (err) { return; }
                if (d.isPlayable === false || d.errorCode) { clearInterval(iv); return finish('offline', 'data' + (d.errorCode || '')); }
                if (d.isLive === true) { clearInterval(iv); return finish('live', 'isLive'); }
                if (st === 1 && n >= 3 && d.isLive === false) { clearInterval(iv); return finish('ended', 'vod'); }
                if (n >= 16) { clearInterval(iv); finish('unknown', 'nodata'); }
              }, 500);
              pollTimers.push(iv);
            },
            onError: (e) => finish('offline', 'code' + (e && e.data))
          }
        });
      } catch (err) { finish('unknown', 'throw:' + (err && err.message ? err.message : err)); }
    })).catch(() => 'unknown');
  }

  function setStatus(id, s) {
    status[id] = s;
    const card = document.querySelector(`.card[data-id="${id}"]`);
    if (!card) return;
    const badges = card.querySelector('.badges');
    if (badges) badges.innerHTML = badgeHtml(s) + (CAMS.find((c) => c.id === id).src === 'public' ? '<span class="badge">공식</span>' : '');
    card.classList.toggle('is-off', s === 'offline' || s === 'ended');
    const cover = card.querySelector('.off-cover span');
    if (cover) {
      cover.innerHTML = s === 'ended'
        ? '방송 종료 · 다시보기로 재생<br><small style="opacity:.75">새 라이브가 시작되면 자동 갱신됩니다</small>'
        : '현재 접속 불가 · 오프라인<br><small style="opacity:.75">원 채널에서 확인해 주세요</small>';
    }
    updateHero();
    if (state.liveOnly) render();
  }

  function enqueueProbe(id) {
    if (status[id] !== 'idle') return;
    if (queue.some((q) => q.id === id)) return;
    const cam = CAMS.find((c) => c.id === id);
    if (!cam || !cam.yt) return;
    queue.push({ id: id, yt: cam.yt });
    pump();
  }

  function pump() {
    if (busy || !queue.length) return;
    const job = queue.shift();
    const id = job.id;
    busy = true;
    status[id] = 'checking';
    setStatus(id, 'checking');
    probeOne(job.yt).then((res) => {
      status[id] = res === 'live' || res === 'ended' || res === 'offline' ? res : 'unknown';
      setStatus(id, status[id]);
      saveCache();
      busy = false;
      setTimeout(pump, 600);
    }).catch(() => {
      status[id] = 'unknown'; setStatus(id, 'unknown'); busy = false; setTimeout(pump, 600);
    });
  }

  let io = null;
  let probeKick = false;
  function startProbeAll() {
    CAMS.filter((c) => c.mode !== 'external').forEach((c) => enqueueProbe(c.id));
  }
  function observeCards() {
    if (!('IntersectionObserver' in window)) { startProbeAll(); return; }
    // 화면에 보이는 카드는 즉시, 브라우저가 교차 관찰을 지연하는 환경(백그라운드 탭 등)에서는
    // 3초 뒤 전체를 순차 확인한다.
    if (!probeKick) {
      probeKick = true;
      setTimeout(() => { if (!Object.keys(window.__wcwProbe || {}).length && !busy) startProbeAll(); }, 3000);
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const id = en.target.dataset.id;
            const cam = CAMS.find((c) => c.id === id);
            if (cam && cam.mode !== 'external' && status[id] === 'idle') enqueueProbe(id);
          }
        });
      }, { rootMargin: '300px 0px' });
    }
    $$('.card[data-id]').forEach((el) => io.observe(el));
  }

  /* ───────── 날씨 ───────── */
  function fetchWeather() {
    const chunks = [];
    for (let i = 0; i < CAMS.length; i += 25) chunks.push(CAMS.slice(i, i + 25));
    const jobs = chunks.map((group) => {
      const u = new URL('https://api.open-meteo.com/v1/forecast');
      u.searchParams.set('latitude', group.map((c) => c.lat).join(','));
      u.searchParams.set('longitude', group.map((c) => c.lon).join(','));
      u.searchParams.set('current', 'temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature,is_day');
      u.searchParams.set('timezone', group.map((c) => c.tz).join(','));
      u.searchParams.set('wind_speed_unit', 'ms');
      return fetch(u.toString(), { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error('http ' + r.status))))
        .then((data) => {
          const arr = Array.isArray(data) ? data : [data];
          arr.forEach((d, i) => {
            const cam = group[i]; if (!cam || !d || !d.current) return;
            weather[cam.id] = {
              temp: d.current.temperature_2m, code: d.current.weather_code,
              wind: d.current.wind_speed_10m, humidity: d.current.relative_humidity_2m,
              feels: d.current.apparent_temperature, isDay: !!d.current.is_day,
              time: d.current.time, tz: d.timezone
            };
          });
        });
    });
    return Promise.allSettled(jobs);
  }

  function paintWeather() {
    CAMS.forEach((c) => {
      const card = document.querySelector(`.card[data-id="${c.id}"]`);
      if (!card) return;
      const old = card.querySelector('.wx');
      if (old) old.outerHTML = wxCard(c);
    });
    if (playerModalId) paintModalWeather(playerModalId);
    if (Object.keys(weather).length) {
      const t = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Seoul' });
      $('#wx-stamp').textContent = '날씨 갱신 ' + t + ' KST · Open-Meteo (카메라 좌표 기준)';
    }
  }

  function refreshWeather() {
    return fetchWeather().then(() => { paintWeather(); }).catch(() => {
      $('#wx-stamp').textContent = '날씨를 불러오지 못했습니다 · 잠시 후 다시 시도합니다';
    });
  }

  /* ───────── 플레이어 모달 ───────── */
  let playerModalId = null;

  function paintModalWeather(id) {
    const c = CAMS.find((x) => x.id === id); if (!c) return;
    const w = weather[id];
    const box = $('#pm-wx');
    if (!w) { box.innerHTML = '<div class="kpi"><span>날씨</span><b>불러오는 중…</b></div>'; return; }
    const meta = WMO[w.code] || ['—', '🌡️'];
    box.innerHTML = `
      <div class="kpi"><span>현재 기온</span><b>${meta[1]} ${fmtTemp(w.temp)}</b></div>
      <div class="kpi"><span>날씨</span><b>${esc(meta[0])}</b></div>
      <div class="kpi"><span>풍속</span><b>${w.wind == null ? '–' : (Math.round(w.wind * 10) / 10)} m/s</b></div>
      <div class="kpi"><span>체감</span><b>${fmtTemp(w.feels)}</b></div>
      <div class="kpi"><span>습도</span><b>${w.humidity == null ? '–' : w.humidity + '%'}</b></div>
      <div class="kpi"><span>현지 시각</span><b>${localClock(w)} ${w.isDay ? '☀️' : '🌙'}</b></div>`;
  }

  function openPlayer(id) {
    const c = CAMS.find((x) => x.id === id); if (!c) return;
    playerModalId = id;
    const modal = $('#player-modal');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('#pm-title').textContent = c.name;
    $('#pm-sub').textContent = `${c.flag} ${c.country} · ${c.city} — ${c.provider}`;
    $('#pm-note').textContent = c.note || '';
    $('#pm-meta').innerHTML = `
      <dt>국가</dt><dd>${c.flag} ${esc(c.country)}</dd>
      <dt>분류</dt><dd>${CAT_LABEL[c.cat] || '–'}</dd>
      <dt>출처</dt><dd>${SRC_LABEL[c.src] || '제공기관'} · ${esc(c.provider)}</dd>
      <dt>좌표</dt><dd>${c.lat.toFixed(4)}, ${c.lon.toFixed(4)} · ${esc(c.tz)}</dd>
      <dt>수신 상태</dt><dd id="pm-status">${status[c.id] === 'live' ? '정상 수신' : status[c.id] === 'offline' ? '오프라인' : '확인 중'}</dd>`;
    paintModalWeather(id);

    const ytLink = $('#pm-yt');
    const extLink = $('#pm-ext');
    const holder = $('#pm-player');
    if (c.mode === 'external') {
      ytLink.hidden = true;
      extLink.hidden = false;
      extLink.href = c.url;
      holder.innerHTML = `<div class="pm-fallback">이 카메라는 <b>공식 페이지에서 직접</b> 확인하는 항목입니다.<br>영상 재배포가 제한되어 임베드하지 않습니다.</div>`;
    } else {
      ytLink.hidden = false;
      extLink.hidden = true;
      ytLink.href = 'https://www.youtube.com/watch?v=' + c.yt;
      const src = 'https://www.youtube-nocookie.com/embed/' + c.yt +
        '?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&origin=' + encodeURIComponent(location.origin);
      holder.innerHTML = `<iframe src="${src}" title="${esc(c.name)} 라이브 영상"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    }
  }

  function closePlayer() {
    const modal = $('#player-modal');
    modal.hidden = true;
    document.body.style.overflow = '';
    playerModalId = null;
    $('#pm-player').innerHTML = '';
  }

  /* ───────── 모달 공통 ───────── */
  function openModal(sel) { const m = $(sel); m.hidden = false; document.body.style.overflow = 'hidden'; }
  function closeModal(m) { m.hidden = true; if (!document.querySelector('.modal:not([hidden])')) document.body.style.overflow = ''; }

  /* ───────── 제보 ───────── */
  function reportPayload(f) {
    const val = (n) => (f.elements[n] && f.elements[n].value || '').trim();
    const body = [
      '도시·장소: ' + val('city'),
      '라이브 URL: ' + val('url'),
      '분류: ' + val('cat'),
      '설명: ' + (val('memo') || '-'),
      '',
      '— 월드캠 웨더 카메라 제보 (사이트 폼)'
    ].join('\n');
    return { subject: '[월드캠 웨더] 카메라 제보 — ' + (val('city') || '장소'), body: body };
  }

  /* ───────── 초기화 ───────── */
  function boot() {
    buildChips();
    buildCountryDirectory();
    loadCache();
    render();
    refreshWeather();
    setInterval(refreshWeather, 10 * 60 * 1000);

    const q = $('#q');
    let t = null;
    q.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => { state.q = q.value; render(); }, 120);
    });
    $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; render(); });
    $('#live-only').addEventListener('change', (e) => { state.liveOnly = e.target.checked; render(); });

    document.addEventListener('click', (e) => {
      const open = e.target.closest('[data-open-player]');
      if (open) { e.preventDefault(); openPlayer(open.dataset.openPlayer); return; }
      if (e.target.closest('#open-report') || e.target.closest('[data-open-report]')) { e.preventDefault(); openModal('#report-modal'); return; }
      if (e.target.closest('#open-terms') || e.target.closest('[data-open-terms]')) { e.preventDefault(); openModal('#terms-modal'); return; }
      if (e.target.closest('#player-modal [data-close]')) { closePlayer(); return; }
      const closer = e.target.closest('[data-close]');
      if (closer) { closeModal(closer.closest('.modal')); }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.querySelector('.modal:not([hidden])');
        if (modal) { modal.id === 'player-modal' ? closePlayer() : closeModal(modal); }
      }
      if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); }
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-open-player][tabindex]')) {
        e.preventDefault(); openPlayer(e.target.dataset.openPlayer);
      }
    });

    const form = $('#report-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const city = form.elements.city.value.trim();
      const url = form.elements.url.value.trim();
      const st = $('#report-status');
      if (!city || !url) { st.textContent = '도시·장소와 URL을 입력해 주세요.'; st.style.color = '#ffb45c'; return; }
      const p = reportPayload(form);
      window.location.href = 'mailto:wojin826@naver.com?subject=' + encodeURIComponent(p.subject) + '&body=' + encodeURIComponent(p.body);
      st.style.color = '';
      st.textContent = '메일 앱이 열리면 그대로 발송해 주세요. 열리지 않으면 "내용 복사"를 사용하세요.';
    });
    $('#report-copy').addEventListener('click', () => {
      const p = reportPayload(form);
      const text = p.subject + '\n\n' + p.body + '\n\n보내는 곳: wojin826@naver.com';
      const st = $('#report-status');
      const done = () => { st.style.color = ''; st.textContent = '복사했습니다. wojin826@naver.com 으로 보내주세요.'; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      } else fallbackCopy(text, done);
    });
    function fallbackCopy(text, done) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* 무시 */ }
      document.body.removeChild(ta);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
