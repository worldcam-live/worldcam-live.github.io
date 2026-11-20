/* 월드캠 웨더 — 카메라 데이터
 * 각 항목은 (1) 유튜브 공식 임베드 플레이어(youtube-nocookie)로만 표시하거나
 * (2) 원 제공기관 공식 페이지로 바로 연결합니다.
 * 스트림 URL·영상 파일을 추출하거나 재송출하지 않습니다.
 * 좌표는 카메라가 향한 장소 기준이며, 날씨(Open-Meteo) 조회에 사용됩니다.
 * cc = ISO 국가 코드(국가별 디렉토리 묶음 기준)
 * 등록 전 확인: 유튜브 라이브 검색(sp=EgJAAQ) + oEmbed 200(공개·임베드 허용) + 배포 페이지 실시간 재생 확인.
 */
window.CAMERA_DATA = [
  /* ───────────── 대한민국 ───────────── */
  {
    id: 'kr-banpo', yt: 'RVvYQghFCXk', name: '반포대교 · 한강', en: 'Banpo Bridge & Han River',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: '데일리서울 한강 라이브캠',
    lat: 37.5116, lon: 126.9954, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '한강', 'han river', '반포', 'banpo', '대한민국', 'korea', '한국'],
    note: '반포대교와 한강 야경을 4K로 24시간 송출하는 국내 채널입니다.'
  },
  {
    id: 'kr-seoulstation', yt: 'C3hW1VrwmNc', name: '서울역 광장', en: 'Seoul Station Plaza',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: 'GiGAeyes Live TV',
    lat: 37.5547, lon: 126.9707, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '서울역', 'seoul station', '광장', '대한민국', 'korea'],
    note: '서울역 광장과 KTX 출입구 방향을 비추는 도심 라이브캠입니다.'
  },
  {
    id: 'kr-myeongdong', yt: 'uGs3HNVqjLA', name: '명동 · 종로 야간 거리', en: 'Myeongdong & Jongno Night Walk',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Watchers Club',
    lat: 37.5636, lon: 126.9834, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '명동', 'myeongdong', '종로', 'jongno', '야경', '대한민국', 'korea'],
    note: '명동·종로 일대를 이동하며 보여주는 실시간 워킹 캠입니다.'
  },
  {
    id: 'kr-hongdae', yt: 'yzxiAJAXXtQ', name: '홍대입구역', en: 'Hongdae Station',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: '홍대라이브',
    lat: 37.5572, lon: 126.9245, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '홍대', 'hongdae', '마포', '대한민국', 'korea'],
    note: '홍대입구역 9번 출구 앞 유동인구를 24시간 보여줍니다.'
  },
  {
    id: 'kr-namsan', yt: 'Q6WKC4vDsUU', name: '남산서울타워', en: 'N Seoul Tower',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: '한강 라이브 365',
    lat: 37.5512, lon: 126.9882, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '남산', 'namsan', '남산타워', 'n seoul tower', '대한민국', 'korea'],
    note: '남산과 서울 도심 스카이라인을 담은 4K 라이브입니다.'
  },
  {
    id: 'kr-haeundae', yt: 'rKh675PnlP4', name: '부산 해운대해수욕장', en: 'Haeundae Beach',
    city: '부산', country: '대한민국', cc: 'KR', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'nature', src: 'creator', provider: 'Busan Haeundae Live',
    lat: 35.1587, lon: 129.1604, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '해운대', 'haeundae', '해변', 'beach', '대한민국', 'korea'],
    note: '해운대 백사장과 파도 상태를 실시간으로 확인할 수 있습니다.'
  },
  {
    id: 'kr-gwangalli', yt: 'GZ8MwCX_n14', name: '부산 광안리 · 광안대교', en: 'Gwangalli Beach & Gwangan Bridge',
    city: '부산', country: '대한민국', cc: 'KR', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'nature', src: 'creator', provider: 'Busan Live Cam',
    lat: 35.1530, lon: 129.1186, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '광안리', 'gwangalli', '광안대교', '해변', 'beach', '대한민국', 'korea'],
    note: '광안대교 야경과 광안리 해변을 4K로 송출합니다.'
  },

  /* ───────────── 일본 ───────────── */
  {
    id: 'jp-shibuya', yt: 'L6wO1-U2RTY', name: '도쿄 시부야·신주쿠 거리 산책', en: 'Shibuya & Shinjuku Walking Cam, Tokyo',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Japan Walk',
    lat: 35.6595, lon: 139.7005, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '시부야', 'shibuya', '신주쿠', 'shinjuku', '산책', 'walk', '일본', 'japan'],
    note: '방송사 대신 개인 크리에이터가 시부야·신주쿠 일대를 24시간 걸으며 중계하는 워킹 캠입니다.'
  },
  {
    id: 'jp-shibuya-center', yt: 'd1JuNg7knNo', name: '시부야 센터가이', en: 'Shibuya Center-gai',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'public', provider: '시부야센터상점가 (渋谷センター商店街)',
    lat: 35.6607, lon: 139.6986, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '시부야', 'shibuya', '센터가이', 'center gai', '일본', 'japan'],
    note: '상점가 협회가 직접 운영하는 센터가이 아치 앞 카메라입니다.'
  },
  {
    id: 'jp-kabukicho', yt: 'DjdUEyjx8GM', name: '신주쿠 가부키초', en: 'Shinjuku Kabukicho',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: '가부키초 라이브 채널',
    lat: 35.6950, lon: 139.7034, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '신주쿠', 'shinjuku', '가부키초', 'kabukicho', '일본', 'japan'],
    note: '신주쿠 가부키초 중심가를 24시간 비추는 카메라입니다.'
  },
  {
    id: 'jp-ohguard', yt: '6dp-bvQ7RWo', name: '신주쿠 오가드 교차로', en: 'Shinjuku Ohguard Crossing',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: '신주쿠 오가드 라이브',
    lat: 35.6936, lon: 139.7000, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '신주쿠', 'shinjuku', '오가드', 'ohguard', '일본', 'japan'],
    note: '신주쿠 대가드(오가드) 교차로의 차량·보행 흐름을 보여줍니다.'
  },
  {
    id: 'jp-dotonbori', yt: 'K-ibJs5xuuw', name: '오사카 도톤보리', en: 'Dotonbori, Osaka',
    city: '오사카', country: '일본', cc: 'JP', countryEn: 'Osaka, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'RVJJP (라지칼 비디오 조키)',
    lat: 34.6687, lon: 135.5013, tz: 'Asia/Tokyo',
    tags: ['오사카', 'osaka', '도톤보리', 'dotonbori', '글리코', 'glico', '일본', 'japan'],
    note: '방송사(MBS) 대신 오사카 현지 크리에이터가 운영하는 도톤보리 운하 카메라입니다.'
  },
  {
    id: 'jp-shinsaibashi', yt: 'YZMZSqz9fx8', name: '오사카 신사이바시', en: 'Shinsaibashi',
    city: '오사카', country: '일본', cc: 'JP', countryEn: 'Osaka, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'local', provider: 'F.S.T. NET 오사카',
    lat: 34.6751, lon: 135.5011, tz: 'Asia/Tokyo',
    tags: ['오사카', 'osaka', '신사이바시', 'shinsaibashi', '일본', 'japan'],
    note: '신사이바시 상점가 입구의 실시간 유동인구를 보여줍니다.'
  },
  {
    id: 'jp-fuji-yamanakako', yt: 'F2NbYrc-gBU', name: '후지산 · 야마나카호', en: 'Mt. Fuji from Lake Yamanakako',
    city: '야마나시', country: '일본', cc: 'JP', countryEn: 'Yamanashi, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'public', provider: 'KTV 케이블TV 가와구치코',
    lat: 35.4210, lon: 138.8960, tz: 'Asia/Tokyo',
    tags: ['후지산', 'fuji', 'mount fuji', '야마나카코', 'yamanakako', '일본', 'japan', '산'],
    note: '야마나카호 건너편에서 본 후지산 설경·구름 상태를 확인할 수 있습니다.'
  },
  {
    id: 'jp-fuji-oshino', yt: 'PxzwnWh1dKk', name: '후지산 · 오시노핫카이', en: 'Mt. Fuji from Oshino Hakkai',
    city: '야마나시', country: '일본', cc: 'JP', countryEn: 'Yamanashi, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'local', provider: 'FujiyamaTV',
    lat: 35.4656, lon: 138.8489, tz: 'Asia/Tokyo',
    tags: ['후지산', 'fuji', '오시노핫카이', 'oshino hakkai', '일본', 'japan', '산'],
    note: '세계유산 후지산을 4K로 비추는 다른 각도의 라이브 카메라입니다.'
  },
  {
    id: 'jp-odaiba', yt: 'BEpTqQWbLvA', name: '오다이바 해변 · 레인보우브리지', en: 'Odaiba Beach & Rainbow Bridge',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Odaiba-Papa',
    lat: 35.6364, lon: 139.7633, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '오다이바', 'odaiba', '레인보우브리지', 'rainbow bridge', '해변', 'beach', '일본', 'japan'],
    note: '방송사(FNN) 대신 개인 운영 채널이 오다이바 해변과 레인보우브리지를 24시간 비춥니다.'
  },
  {
    id: 'jp-wangan', yt: 'Kozl3hd56Y0', name: '도쿄만 수도고속 완간선', en: 'Tokyo Bay Expressway (Wangan)',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'traffic', src: 'creator', provider: 'HMTV Tokyo Bay',
    lat: 35.6464, lon: 139.7997, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '수도고속', 'wangan', '고속도로', 'expressway', '도로', '교통', '일본', 'japan'],
    note: '수도고속 완간선 시노노메 분기점 부근의 실시간 교통 상황입니다.'
  },

  /* ───────────── 일본 — 한국 직항 인기 도시(삿포로·후쿠오카·오키나와·교토·나고야) ───────────── */
  {
    id: 'jp-sapporo-tanukikoji', yt: 'TPIzbMwlrOI', name: '삿포로 다누키코지 8초메', en: 'Tanukikoji 8-chome, Sapporo',
    city: '삿포로', country: '일본', cc: 'JP', countryEn: 'Sapporo, Hokkaido', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Hokkaido Kurashi no Yomimono',
    lat: 43.0553, lon: 141.3530, tz: 'Asia/Tokyo',
    tags: ['삿포로', 'sapporo', '홋카이도', 'hokkaido', '다누키코지', 'tanukikoji', '狸小路', '札幌', '스스키노', 'susukino', '일본', 'japan'],
    note: '삿포로 다누키코지 상점가 8초메 교차로를 24시간 비추는 현지 크리에이터 라이브입니다. 눈이 오면 제설 상황도 보입니다.'
  },
  {
    id: 'jp-sapporo-susukino', yt: 'wRYonRnKsKw', name: '삿포로 스스키노 교차로', en: 'Susukino Crossing, Sapporo',
    city: '삿포로', country: '일본', cc: 'JP', countryEn: 'Sapporo, Hokkaido', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'SODANE 채널',
    lat: 43.0556, lon: 141.3528, tz: 'Asia/Tokyo',
    tags: ['삿포로', 'sapporo', '스스키노', 'susukino', '번화가', '홋카이도', 'hokkaido', '삿포로 눈축제', 'snow festival', '일본', 'japan'],
    note: '삿포로 최대 번화가 스스키노 교차로의 유동인구와 날씨를 실시간으로 보여줍니다.'
  },
  {
    id: 'jp-sapporo-tanukikoji4', yt: 'tN_khO1foeA', name: '삿포로 다누키코지 상점가 4초메', en: 'Tanukikoji Shopping Street 4-chome, Sapporo',
    city: '삿포로', country: '일본', cc: 'JP', countryEn: 'Sapporo, Hokkaido', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'たぬきやLIVE',
    lat: 43.0571, lon: 141.3521, tz: 'Asia/Tokyo',
    tags: ['삿포로', 'sapporo', '다누키코지', 'tanukikoji', '상점가', 'shopping street', '狸小路', '홋카이도', 'hokkaido', '일본', 'japan'],
    note: '아케이드 상점가 안쪽 4초메를 비추는 카메라로, 눈·비가 와도 상점가 분위기를 확인할 수 있습니다.'
  },
  {
    id: 'jp-sapporo-moiwa', yt: 'MmOom49Vsco', name: '삿포로 모이와산 로프웨이 산정', en: 'Mt. Moiwa Ropeway Summit, Sapporo',
    city: '삿포로', country: '일본', cc: 'JP', countryEn: 'Sapporo, Hokkaido', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'local', provider: '삿포로 모이와산 로프웨이(공식)',
    lat: 43.0297, lon: 141.3224, tz: 'Asia/Tokyo',
    tags: ['삿포로', 'sapporo', '모이와산', 'moiwa', '로프웨이', 'ropeway', '전망대', '야경', 'night view', '홋카이도', 'hokkaido', '일본', 'japan'],
    note: '모이와산 산정 전망대에서 내려다보는 삿포로 시내. 로프웨이 운영기관이 직접 송출합니다.'
  },
  {
    id: 'jp-sapporo-tram', yt: 'NmF-XRJddxY', name: '삿포로 시덴 주오구청 앞', en: 'Sapporo Tram, Chuo Ward Office Stop',
    city: '삿포로', country: '일본', cc: 'JP', countryEn: 'Sapporo, Hokkaido', flag: '🇯🇵', region: 'asia',
    cat: 'traffic', src: 'creator', provider: 'yuki nomad',
    lat: 43.0555, lon: 141.3417, tz: 'Asia/Tokyo',
    tags: ['삿포로', 'sapporo', '노면전차', '시덴', 'tram', 'streetcar', '주오구', '도로', '교통', '홋카이도', 'hokkaido', '일본', 'japan'],
    note: '삿포로 시덴(노면전차) 주오구청 앞 정류장과 시내 도로 상황을 함께 보여줍니다.'
  },
  {
    id: 'jp-fukuoka-tenjin', yt: '3JbsYB5OTrA', name: '후쿠오카 텐진 1초메 교차로', en: 'Tenjin 1-chome Intersection, Fukuoka',
    city: '후쿠오카', country: '일본', cc: 'JP', countryEn: 'Fukuoka, Kyushu', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'LOG FUKUOKA',
    lat: 33.5912, lon: 130.3986, tz: 'Asia/Tokyo',
    tags: ['후쿠오카', 'fukuoka', '텐진', 'tenjin', '하카타', 'hakata', '규슈', 'kyushu', '번화가', '일본', 'japan'],
    note: '후쿠오카 최대 번화가 텐진 1초메 교차로. 쇼핑·식당가의 실시간 혼잡도를 확인할 수 있습니다.'
  },
  {
    id: 'jp-fukuoka-tenjin-north', yt: '0OFvn1DebVY', name: '후쿠오카 텐진키타 · 하카타항', en: 'Tenjin North & Hakata Port, Fukuoka',
    city: '후쿠오카', country: '일본', cc: 'JP', countryEn: 'Fukuoka, Kyushu', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'local', provider: '뉴가이아 그룹(공식)',
    lat: 33.5932, lon: 130.4007, tz: 'Asia/Tokyo',
    tags: ['후쿠오카', 'fukuoka', '텐진', 'tenjin', '하카타항', 'hakata port', '규슈', 'kyushu', '항구', '일본', 'japan'],
    note: '텐진 북쪽과 후쿠오카 도시고속도로·하카타항 방향을 담은 카메라입니다. 배·페리 운항 판단에 참고됩니다.'
  },
  {
    id: 'jp-fukuoka-hakata-station', yt: 'nBhfgvZlzpE', name: '하카타역', en: 'Hakata Station, Fukuoka',
    city: '후쿠오카', country: '일본', cc: 'JP', countryEn: 'Fukuoka, Kyushu', flag: '🇯🇵', region: 'asia',
    cat: 'traffic', src: 'creator', provider: 'The Wayfarer',
    lat: 33.5898, lon: 130.4207, tz: 'Asia/Tokyo',
    tags: ['후쿠오카', 'fukuoka', '하카타역', 'hakata station', '하카타', 'hakata', '기차역', '규슈', 'kyushu', '일본', 'japan'],
    note: '하카타역 앞 광장과 주변 빌딩을 24시간 비추는 카메라입니다. 야경과 일출 장면도 볼 수 있습니다.'
  },
  {
    id: 'jp-naha-kokusai-kencho', yt: 'Yq8WmXplhrU', name: '나하 국제거리 (현청 북쪽 입구)', en: 'Kokusai-dori, Naha (Kencho North)',
    city: '나하', country: '일본', cc: 'JP', countryEn: 'Naha, Okinawa', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'バクノビジョン',
    lat: 26.2125, lon: 127.6797, tz: 'Asia/Tokyo',
    tags: ['오키나와', 'okinawa', '나하', 'naha', '국제거리', 'kokusai dori', '국제通り', '번화가', '일본', 'japan'],
    note: '오키나와 여행의 중심지 국제거리 북쪽 입구. 관광객 밀도와 날씨를 실시간으로 볼 수 있습니다.'
  },
  {
    id: 'jp-naha-kokusai-asato', yt: 'ZBBezhwzCzY', name: '나하 국제거리 (아사토 3차로)', en: 'Kokusai-dori, Asato Crossing, Naha',
    city: '나하', country: '일본', cc: 'JP', countryEn: 'Naha, Okinawa', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'バクノビジョン',
    lat: 26.2169, lon: 127.6905, tz: 'Asia/Tokyo',
    tags: ['오키나와', 'okinawa', '나하', 'naha', '국제거리', 'kokusai dori', '아사토', 'asato', '安里', '일본', 'japan'],
    note: '국제거리 아사토 삼거리 방향. 유메타운·시장 방향 이동 동선을 확인하기 좋은 각도입니다.'
  },
  {
    id: 'jp-naha-makishi', yt: 'se05Vc8g_TY', name: '나하 마키시 시장 앞', en: 'Makishi Market, Naha',
    city: '나하', country: '일본', cc: 'JP', countryEn: 'Naha, Okinawa', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: '定点カメラ部沖縄',
    lat: 26.2152, lon: 127.6881, tz: 'Asia/Tokyo',
    tags: ['오키나와', 'okinawa', '나하', 'naha', '마키시', 'makishi', '시장', 'market', '牧志', '국제거리', '일본', 'japan'],
    note: '마키시 공설시장 앞 파출소 부근 고정 카메라. 시장 골목 분위기와 날씨를 확인할 수 있습니다.'
  },
  {
    id: 'jp-okinawa-busena', yt: 'VWpOgCVKoK4', name: '부세나 테라스 비치', en: 'The Busena Terrace Beach, Okinawa',
    city: '나고', country: '일본', cc: 'JP', countryEn: 'Nago, Okinawa', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'local', provider: 'The Terrace Hotels(공식)',
    lat: 26.5317, lon: 127.9366, tz: 'Asia/Tokyo',
    tags: ['오키나와', 'okinawa', '부세나', 'busena', '나고', 'nago', '해변', 'beach', '리조트', 'resort', '本部', '일본', 'japan'],
    note: '부세나 테라스 호텔의 전용 해변을 호텔 측이 직접 송출합니다. 파도·수온 판단에 참고됩니다.'
  },
  {
    id: 'jp-okinawa-onna', yt: '3VuKgtoZWbQ', name: '온나손 마리부 비치', en: 'Malibu Beach, Onna Village, Okinawa',
    city: '온나손', country: '일본', cc: 'JP', countryEn: 'Onna, Okinawa', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'creator', provider: '오키나와 NOW!!',
    lat: 26.4978, lon: 127.8535, tz: 'Asia/Tokyo',
    tags: ['오키나와', 'okinawa', '온나손', 'onna', '마리부', 'malibu', '해변', 'beach', '다이빙', 'marine', '태풍', '일본', 'japan'],
    note: '온나손 마리부 해변. 해양 레저 운영 여부와 태풍 접근 시 파도 상황을 확인하는 데 쓰입니다.'
  },
  {
    id: 'jp-okinawa-senaga', yt: '3e_uPkJCTNo', name: '나하공항 앞 세나가 섬', en: 'Senaga Island by Naha Airport, Okinawa',
    city: '나하', country: '일본', cc: 'JP', countryEn: 'Naha, Okinawa', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'creator', provider: 'BANKSY GINOWAN',
    lat: 26.1747, lon: 127.6437, tz: 'Asia/Tokyo',
    tags: ['오키나와', 'okinawa', '나하', 'naha', '나하공항', 'naha airport', '세나가섬', 'senaga', '瀬長島', '비행기', '일본', 'japan'],
    note: '나하공항 활주로와 세나가 섬을 함께 담아 이착륙 장면을 볼 수 있는 카메라입니다.'
  },
  {
    id: 'jp-kyoto-gion', yt: 'J3xHBUgWRqc', name: '교토 기온 하나미코지', en: 'Hanamikoji Street, Gion, Kyoto',
    city: '교토', country: '일본', cc: 'JP', countryEn: 'Kyoto', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'public', provider: '교토시 관광협회(공식)',
    lat: 35.0037, lon: 135.7752, tz: 'Asia/Tokyo',
    tags: ['교토', 'kyoto', '기온', 'gion', '하나미코지', 'hanamikoji', '花見小路', '게이샤', '일본', 'japan', '간사이', 'kansai'],
    note: '기온 하나미코지의 전통 거리. 교토시 관광협회가 운영하는 공식 관광지 카메라입니다.'
  },
  {
    id: 'jp-kyoto-arashiyama', yt: 'JLlY6Cg17cc', name: '교토 아라시야마 대나무숲', en: 'Arashiyama Bamboo Grove, Kyoto',
    city: '교토', country: '일본', cc: 'JP', countryEn: 'Kyoto', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'public', provider: '교토시 관광협회(공식)',
    lat: 35.0168, lon: 135.6713, tz: 'Asia/Tokyo',
    tags: ['교토', 'kyoto', '아라시야마', 'arashiyama', '대나무숲', 'bamboo', '죽림', '竹林', '사가', 'saga', '일본', 'japan'],
    note: '아라시야마 죽림 소로(대나무숲 길). 관광객이 몰리는 시간대를 피하려면 혼잡도를 확인하세요.'
  },
  {
    id: 'jp-kyoto-kiyomizu', yt: 'cUnYPpK7ENk', name: '교토 기요미즈자카', en: 'Kiyomizu-zaka, Kyoto',
    city: '교토', country: '일본', cc: 'JP', countryEn: 'Kyoto', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: '교토 관광 혼잡 상황 Live',
    lat: 34.9951, lon: 135.7805, tz: 'Asia/Tokyo',
    tags: ['교토', 'kyoto', '기요미즈', 'kiyomizu', '기요미즈데라', '清水寺', '기요미즈자카', '清水坂', '참배길', '일본', 'japan'],
    note: '기요미즈데라로 오르는 기요미즈자카 참배길. 관광 성수기 혼잡도를 실시간으로 보여줍니다.'
  },
  {
    id: 'jp-kyoto-fushimi', yt: 'MMeBDRfRHyA', name: '교토 후시미이나리 대사', en: 'Fushimi Inari Taisha, Kyoto',
    city: '교토', country: '일본', cc: 'JP', countryEn: 'Kyoto', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: '교토 관광 혼잡 상황 Live',
    lat: 34.9671, lon: 135.7727, tz: 'Asia/Tokyo',
    tags: ['교토', 'kyoto', '후시미', 'fushimi', '후시미이나리', 'fushimi inari', '토리이', 'torii', '伏見稲荷', '일본', 'japan'],
    note: '후시미이나리 대사 표대산도(오모테산도) 입구. 천 본의 토리이를 보러 가는 길의 혼잡도를 확인할 수 있습니다.'
  },
  {
    id: 'jp-kyoto-philosophers', yt: 'vR7q44PEhrM', name: '교토 철학의 길', en: 'The Philosopher\u2019s Path, Kyoto',
    city: '교토', country: '일본', cc: 'JP', countryEn: 'Kyoto', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'public', provider: '교토시 관광협회(공식)',
    lat: 35.0260, lon: 135.7948, tz: 'Asia/Tokyo',
    tags: ['교토', 'kyoto', '철학의 길', 'philosopher', '은각사', '긴카쿠지', '산책', '벚꽃', '단풍', '일본', 'japan'],
    note: '은각사에서 남선사로 이어지는 철학의 길. 계절 풍경과 산책로 날씨를 확인할 수 있습니다.'
  },
  {
    id: 'jp-nagoya-hisaya', yt: 'TJsy_Z7wgPs', name: '나고야 히사야오도리 공원', en: 'Hisaya Odori Park, Nagoya',
    city: '나고야', country: '일본', cc: 'JP', countryEn: 'Nagoya, Aichi', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'local', provider: '트리니티 라이브',
    lat: 35.1682, lon: 136.9083, tz: 'Asia/Tokyo',
    tags: ['나고야', 'nagoya', '히사야오도리', 'hisaya odori', '공원', 'park', '사카에', 'sakae', '아이치', 'aichi', '일본', 'japan'],
    note: '나고야 사카에의 히사야오도리 공원. 미디어 타워·TV타워 주변 행사와 혼잡도를 볼 수 있습니다.'
  },
  {
    id: 'jp-nagoya-station-west', yt: 'cJd9IIu2vio', name: '나고야역 서쪽 출구', en: 'Nagoya Station West Gate (Taiko-dori)',
    city: '나고야', country: '일본', cc: 'JP', countryEn: 'Nagoya, Aichi', flag: '🇯🇵', region: 'asia',
    cat: 'traffic', src: 'local', provider: '스타캣(공식)',
    lat: 35.1706, lon: 136.8797, tz: 'Asia/Tokyo',
    tags: ['나고야', 'nagoya', '나고야역', 'nagoya station', '다이고초', '太閤通口', '역', 'station', '아이치', 'aichi', '일본', 'japan'],
    note: '나고야역 태합통(서쪽) 출구. 택시 승강장과 버스 흐름을 확인하기 좋습니다.'
  },
  {
    id: 'jp-nagoya-station', yt: 'X304dz1zrfU', name: '나고야역 정면', en: 'Nagoya Station Front',
    city: '나고야', country: '일본', cc: 'JP', countryEn: 'Nagoya, Aichi', flag: '🇯🇵', region: 'asia',
    cat: 'traffic', src: 'local', provider: '스타캣(공식)',
    lat: 35.1709, lon: 136.8816, tz: 'Asia/Tokyo',
    tags: ['나고야', 'nagoya', '나고야역', 'nagoya station', '역', 'station', '아이치', 'aichi', '일본', 'japan'],
    note: '나고야역 정면 광장과 주변 빌딩. 신칸센 환승 동선 확인에 참고됩니다.'
  },

  /* ───────────── 대만 ───────────── */
  {
    id: 'tw-xiangshan', yt: 'z_fY1pj1VBw', name: '타이베이 샹산 전망대', en: 'Xiangshan Viewpoint, Taipei',
    city: '타이베이', country: '대만', cc: 'TW', countryEn: 'Taipei, Taiwan', flag: '🇹🇼', region: 'asia',
    cat: 'street', src: 'public', provider: 'Taipei Travel Live Cam (타이베이시 관광)',
    lat: 25.0275, lon: 121.5866, tz: 'Asia/Taipei',
    tags: ['타이베이', 'taipei', '대만', 'taiwan', '샹산', 'xiangshan', '101', '전망'],
    note: '샹산 꼭대기에서 타이베이 101과 도심을 내려다보는 공식 관광 라이브입니다.'
  },
  {
    id: 'tw-dadaocheng', yt: 'Ndo_8RuefH4', name: '타이베이 다다오청 부두', en: 'Dadaocheng Wharf, Taipei',
    city: '타이베이', country: '대만', cc: 'TW', countryEn: 'Taipei, Taiwan', flag: '🇹🇼', region: 'asia',
    cat: 'street', src: 'public', provider: 'Taipei Travel Live Cam (타이베이시 관광)',
    lat: 25.0570, lon: 121.5095, tz: 'Asia/Taipei',
    tags: ['타이베이', 'taipei', '대만', 'taiwan', '다다오청', 'dadaocheng', '부두', 'wharf', '딘화'],
    note: '담수허(淡水河) 강변 다다오청 부두와 타이베이 101 방향을 담은 카메라입니다.'
  },
  {
    id: 'tw-daxi', yt: 'XUWjAsajKXg', name: '타오위안 다시 옛거리', en: 'Daxi Old Street, Taoyuan',
    city: '타오위안', country: '대만', cc: 'TW', countryEn: 'Taoyuan, Taiwan', flag: '🇹🇼', region: 'asia',
    cat: 'street', src: 'public', provider: '타오위안시 관광국 (遊桃園)',
    lat: 24.8806, lon: 121.2880, tz: 'Asia/Taipei',
    tags: ['타오위안', 'taoyuan', '대만', 'taiwan', '다시', 'daxi', '옛거리', 'old street'],
    note: '타오위안시가 운영하는 다시 옛거리(대계노가) 보행 거리 라이브입니다.'
  },

  /* ───────────── 베트남 ───────────── */
  {
    id: 'vn-hanoi', yt: '6Vwsx3igmIQ', name: '하노이 빈뚜이 교 · 홍강', en: 'Vinh Tuy Bridge & Red River, Hanoi',
    city: '하노이', country: '베트남', cc: 'VN', countryEn: 'Hanoi, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'traffic', src: 'local', provider: 'Ha Noi Live Cam',
    lat: 20.9990, lon: 105.8670, tz: 'Asia/Ho_Chi_Minh',
    tags: ['하노이', 'hanoi', '베트남', 'vietnam', '빈뚜이', 'vinh tuy', '홍강', 'red river', '교량'],
    note: '하노이 빈뚜이 다리와 홍강, 오토바이 통행량을 24시간 보여줍니다.'
  },
  {
    id: 'vn-bacha', yt: 'WnebXNDmBN0', name: '박하 시장 (라오까이)', en: 'Bac Ha Market, Lao Cai',
    city: '라오까이', country: '베트남', cc: 'VN', countryEn: 'Lao Cai, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Wandering Vietnam',
    lat: 22.5333, lon: 103.2833, tz: 'Asia/Ho_Chi_Minh',
    tags: ['베트남', 'vietnam', '박하', 'bac ha', '라오까이', 'lao cai', '시장', 'market', '산악'],
    note: '북부 산악지대 박하 일요 시장의 소수민족 장터 풍경을 중계하는 워킹 캠입니다.'
  },

  /* ───────────── 인도네시아 ───────────── */
  {
    id: 'id-bali-jimbaran', yt: 'L1duJDAqbJY', name: '발리 부킷 짐바란 전망', en: 'Bukit Jimbaran, Bali',
    city: '발리', country: '인도네시아', cc: 'ID', countryEn: 'Bali, Indonesia', flag: '🇮🇩', region: 'asia',
    cat: 'nature', src: 'webcam', provider: 'Bali Weather Live Stream',
    lat: -8.7963, lon: 115.1760, tz: 'Asia/Makassar',
    tags: ['발리', 'bali', '인도네시아', 'indonesia', '짐바란', 'jimbaran', '부킷', 'bukit', '해변', 'beach'],
    note: '부킷 반도 짐바란 언덕에서 바다와 공항 활주로 방향을 4K 파노라마로 보여줍니다.'
  },
  {
    id: 'id-bali-batur', yt: 'onXhMdHEx54', name: '킨타마니 · 바투르 화산', en: 'Kintamani & Mount Batur, Bali',
    city: '발리', country: '인도네시아', cc: 'ID', countryEn: 'Bali, Indonesia', flag: '🇮🇩', region: 'asia',
    cat: 'nature', src: 'local', provider: 'Arkaluna Resort & Adventure',
    lat: -8.2410, lon: 115.3760, tz: 'Asia/Makassar',
    tags: ['발리', 'bali', '인도네시아', 'indonesia', '킨타마니', 'kintamani', '바투르', 'batur', '화산', 'volcano', '산'],
    note: '바투르 화산과 칼데라 호수를 마주 보는 리조트 카메라로 일출 구름 상태를 볼 수 있습니다.'
  },

  /* ───────────── 필리핀 ───────────── */
  {
    id: 'ph-mayon', yt: 'UDAZWxehMAI', name: '마욘 화산', en: 'Mayon Volcano, Albay',
    city: '레가스피', country: '필리핀', cc: 'PH', countryEn: 'Albay, Philippines', flag: '🇵🇭', region: 'asia',
    cat: 'nature', src: 'webcam', provider: 'afarTV',
    lat: 13.2572, lon: 123.6856, tz: 'Asia/Manila',
    tags: ['필리핀', 'philippines', '마욘', 'mayon', '화산', 'volcano', '레가스피', 'legazpi'],
    note: '둥근 원뿔로 유명한 마욘 화산을 4K로 24시간 관측하는 자연 카메라입니다.'
  },
  {
    id: 'ph-davao', yt: 'u8CbGedbI08', name: '다바오 아그다오 시장', en: 'Agdao Market, Davao City',
    city: '다바오', country: '필리핀', cc: 'PH', countryEn: 'Davao City, Philippines', flag: '🇵🇭', region: 'asia',
    cat: 'street', src: 'local', provider: 'Edge Babor Family PH',
    lat: 7.0750, lon: 125.6100, tz: 'Asia/Manila',
    tags: ['필리핀', 'philippines', '다바오', 'davao', '시장', 'market', '민생'],
    note: '다바오 아그다오 공설시장의 이른 아침 장터 풍경을 보여주는 현지 카메라입니다.'
  },

  /* ───────────── 태국 · 싱가포르 · 말레이시아 ───────────── */
  {
    id: 'ap-bangkok', yt: 'UemFRPrl1hk', name: '방콕 수쿰빗', en: 'Sukhumvit Soi 11, Bangkok',
    city: '방콕', country: '태국', cc: 'TH', countryEn: 'Bangkok, Thailand', flag: '🇹🇭', region: 'asia',
    cat: 'street', src: 'webcam', provider: 'The Real Samui Webcam',
    lat: 13.7440, lon: 100.5510, tz: 'Asia/Bangkok',
    tags: ['방콕', 'bangkok', '수쿰빗', 'sukhumvit', '태국', 'thailand'],
    note: '수쿰빗 소이 11 거리 풍경과 야간 유동인구를 4K로 보여줍니다.'
  },
  {
    id: 'sg-downtown', yt: 'rQ3VvxadJeo', name: '싱가포르 다운타운 · 마리나', en: 'Downtown Singapore & Marina',
    city: '싱가포르', country: '싱가포르', cc: 'SG', countryEn: 'Singapore', flag: '🇸🇬', region: 'asia',
    cat: 'street', src: 'local', provider: 'SingReef',
    lat: 1.2830, lon: 103.8510, tz: 'Asia/Singapore',
    tags: ['싱가포르', 'singapore', '마리나', 'marina bay', '다운타운', 'downtown', '스카이라인'],
    note: '싱가포르 도심 스카이라인과 마리나베이 방향을 24시간 중계합니다.'
  },
  {
    id: 'my-klia', yt: 'zBDJAqy1I9U', name: '쿠알라룸푸르 국제공항', en: 'Kuala Lumpur International Airport',
    city: '쿠알라룸푸르', country: '말레이시아', cc: 'MY', countryEn: 'Kuala Lumpur, Malaysia', flag: '🇲🇾', region: 'asia',
    cat: 'traffic', src: 'local', provider: 'Live Airways Malaysia',
    lat: 2.7456, lon: 101.7072, tz: 'Asia/Kuala_Lumpur',
    tags: ['말레이시아', 'malaysia', '쿠알라룸푸르', 'kuala lumpur', 'klia', '공항', 'airport'],
    note: 'KLIA 활주로와 터미널 항공기 이동을 보여주는 공항 라이브 카메라입니다.'
  },

  /* ───────────── 미국 · 캐나다 ───────────── */
  {
    id: 'us-timessquare', yt: 'ZxCeWQ3Lcig', name: '뉴욕 타임스퀘어', en: 'Times Square North 4K',
    city: '뉴욕', country: '미국', cc: 'US', countryEn: 'New York, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'EarthCam',
    lat: 40.7580, lon: -73.9855, tz: 'America/New_York',
    tags: ['뉴욕', 'new york', '타임스퀘어', 'times square', '미국', 'usa', '거리'],
    note: 'EarthCam이 운영하는 타임스퀘어 노스 4K 카메라입니다.'
  },
  {
    id: 'us-miami', yt: 'GkBMgHwSIV0', name: '마이애미 맥아더 코즈웨이', en: 'Miami Skyline · MacArthur Causeway',
    city: '마이애미', country: '미국', cc: 'US', countryEn: 'Miami, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'Ozolio Live',
    lat: 25.7880, lon: -80.1790, tz: 'America/New_York',
    tags: ['마이애미', 'miami', '비치', 'beach', '미국', 'usa', '스카이라인'],
    note: '마이애미 스카이라인과 코즈웨이 차량 흐름을 함께 보여줍니다.'
  },
  {
    id: 'us-hollywood', yt: 'cmkAbDUEoyA', name: '할리우드 비치 브로드워크', en: 'Hollywood Beach Broadwalk',
    city: '플로리다', country: '미국', cc: 'US', countryEn: 'Florida, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'public', provider: '시티 오브 할리우드 (시청)',
    lat: 26.0112, lon: -80.1160, tz: 'America/New_York',
    tags: ['플로리다', 'florida', '할리우드', 'hollywood beach', '비치', 'beach', '미국', 'usa'],
    note: '할리우드 시청이 직접 운영하는 해변 브로드워크 카메라입니다.'
  },
  {
    id: 'us-waikiki', yt: 'sL576ZclD_Q', name: '와이키키 해변', en: 'Waikiki Beach, Honolulu',
    city: '호놀룰루', country: '미국', cc: 'US', countryEn: 'Hawaii, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'Port of Cams',
    lat: 21.2793, lon: -157.8292, tz: 'Pacific/Honolulu',
    tags: ['하와이', 'hawaii', '와이키키', 'waikiki', '호놀룰루', 'honolulu', '해변', 'beach', '미국', 'usa'],
    note: '레워스 스트리트에서 바라본 와이키키 해변과 파도입니다.'
  },
  {
    id: 'us-niagara', yt: 'qx7gry390YA', name: '나이아가라 폭포', en: 'Niagara Falls',
    city: '나이아가라', country: '미국·캐나다', cc: 'US', countryEn: 'NY, USA / Ontario, Canada', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'EarthCam',
    lat: 43.0828, lon: -79.0742, tz: 'America/New_York',
    tags: ['나이아가라', 'niagara', '폭포', 'falls', '미국', '캐나다', 'canada'],
    note: '말굽폭포 방향을 비추는 EarthCam 라이브입니다.'
  },
  {
    id: 'us-brooks', yt: 'J7ZrIDvqlic', name: '브룩스 폴스 (알래스카)', en: 'Brooks Falls, Katmai',
    city: '알래스카', country: '미국', cc: 'US', countryEn: 'Alaska, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'explore.org',
    lat: 58.5566, lon: -155.7745, tz: 'America/Anchorage',
    tags: ['알래스카', 'alaska', '브룩스', 'brooks falls', '곰', 'bear', '자연', 'nature', '미국', 'usa'],
    note: '연어를 잡는 야생 곰을 24시간 중계하는 자연 카메라입니다.'
  },
  {
    id: 'us-steamboat', yt: '2UJDLWcSADk', name: '스팀보트 스키장 베이스', en: 'Steamboat Resort Base',
    city: '콜로라도', country: '미국', cc: 'US', countryEn: 'Colorado, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'public', provider: 'Steamboat Resort (공식)',
    lat: 40.4850, lon: -106.8317, tz: 'America/Denver',
    tags: ['콜로라도', 'colorado', '스키', 'ski', '스키장', 'resort', '스팀보트', 'steamboat', '미국', 'usa'],
    note: '리조트가 직접 운영하는 베이스 구역 카메라로 적설·혼잡도를 볼 수 있습니다.'
  },
  {
    id: 'ca-vancouver', yt: 'GHEmhcWjiTE', name: '밴쿠버 항구 · 다운타운', en: 'Vancouver Harbour & Downtown',
    city: '밴쿠버', country: '캐나다', cc: 'CA', countryEn: 'Vancouver, Canada', flag: '🇨🇦', region: 'americas',
    cat: 'street', src: 'local', provider: 'Vancouver Port Live',
    lat: 49.2887, lon: -123.1115, tz: 'America/Vancouver',
    tags: ['밴쿠버', 'vancouver', '캐나다', 'canada', '항구', 'harbour', '북밴쿠버', 'north shore'],
    note: '밴쿠버 항구와 다운타운 스카이라인, 수상비행기 이착륙을 24시간 보여줍니다.'
  },
  {
    id: 'ca-banff', yt: 'F-QLs9aKPvE', name: '밴프 림록 · 보우 밸리', en: 'Rimrock Banff, Bow Valley',
    city: '밴프', country: '캐나다', cc: 'CA', countryEn: 'Banff, Canada', flag: '🇨🇦', region: 'americas',
    cat: 'nature', src: 'local', provider: 'Rimrock Banff (호텔 공식)',
    lat: 51.1784, lon: -115.5708, tz: 'America/Edmonton',
    tags: ['밴프', 'banff', '캐나다', 'canada', '로키', 'rockies', '보우밸리', 'bow valley', '설경'],
    note: '밴프 국립공원 림록 호텔이 직접 운영하는 보우 밸리·설산 카메라입니다.'
  },
  {
    id: 'ca-calgary', yt: 'MwcqP3ta6RI', name: '캘거리 시내', en: 'Calgary Downtown',
    city: '캘거리', country: '캐나다', cc: 'CA', countryEn: 'Calgary, Canada', flag: '🇨🇦', region: 'americas',
    cat: 'street', src: 'local', provider: 'DELTATECH Calgary',
    lat: 51.0447, lon: -114.0719, tz: 'America/Edmonton',
    tags: ['캘거리', 'calgary', '캐나다', 'canada', '도심', 'downtown', '앨버타', 'alberta'],
    note: '캘거리 다운타운과 보우강 방향을 비추는 현지 카메라입니다.'
  },

  /* ───────────── 멕시코 · 브라질 ───────────── */
  {
    id: 'mx-zocalo', yt: 'oOsoFwMPbOg', name: '멕시코시티 소칼로 광장', en: 'Zócalo, Mexico City',
    city: '멕시코시티', country: '멕시코', cc: 'MX', countryEn: 'Mexico City, Mexico', flag: '🇲🇽', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'webcamsdemexico',
    lat: 19.4326, lon: -99.1332, tz: 'America/Mexico_City',
    tags: ['멕시코', 'mexico', '멕시코시티', 'mexico city', '소칼로', 'zocalo', '광장', 'plaza'],
    note: '멕시코시티 중심 소칼로 광장과 대성당을 내려다보는 파노라마 카메라입니다.'
  },
  {
    id: 'mx-cancun', yt: 'NeHO46kDJ20', name: '칸쿤 푼타 칸쿤', en: 'Punta Cancún, Quintana Roo',
    city: '칸쿤', country: '멕시코', cc: 'MX', countryEn: 'Cancún, Mexico', flag: '🇲🇽', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'Webcams de México TV',
    lat: 21.1350, lon: -86.7460, tz: 'America/Cancun',
    tags: ['칸쿤', 'cancun', '멕시코', 'mexico', '카리브', 'caribbean', '해변', 'beach'],
    note: '칸쿤 호텔존과 카리브해 파도·모래톱 색을 실시간으로 보여줍니다.'
  },
  {
    id: 'ap-rio', yt: 'wyEi0OPai5g', name: '리우 코파카바나', en: 'Copacabana Beach, Rio',
    city: '리우데자네이루', country: '브라질', cc: 'BR', countryEn: 'Rio de Janeiro, Brazil', flag: '🇧🇷', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'Homes in Rio',
    lat: -22.9711, lon: -43.1822, tz: 'America/Sao_Paulo',
    tags: ['리우', 'rio', '코파카바나', 'copacabana', '브라질', 'brazil', '해변', 'beach'],
    note: '코파카바나 해변 포스투 6 구간의 파도와 날씨를 보여줍니다.'
  },

  /* ───────────── 영국 · 프랑스 · 이탈리아 · 네덜란드 ───────────── */
  {
    id: 'eu-abbeyroad', yt: 'zMCea32gpmg', name: '런던 애비 로드', en: 'Abbey Road Crossing, London',
    city: '런던', country: '영국', cc: 'GB', countryEn: 'London, UK', flag: '🇬🇧', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'EarthCam',
    lat: 51.5320, lon: -0.1780, tz: 'Europe/London',
    tags: ['런던', 'london', '애비로드', 'abbey road', '영국', 'uk', 'england'],
    note: '비틀즈 앨범 표지로 유명한 횡단보도를 실시간으로 보여줍니다.'
  },
  {
    id: 'eu-londonbridge', yt: 'MXmzsjABC-U', name: '런던 브리지 · 템스강', en: 'London Bridge & River Thames',
    city: '런던', country: '영국', cc: 'GB', countryEn: 'London, UK', flag: '🇬🇧', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Beach Life Cams',
    lat: 51.5055, lon: -0.0900, tz: 'Europe/London',
    tags: ['런던', 'london', '런던브리지', 'london bridge', '템스', 'thames', '영국', 'uk'],
    note: '런던 브리지와 템스강 유람선 흐름을 4K로 송출합니다.'
  },
  {
    id: 'eu-eiffel', yt: 'QI-PPEW2Bgc', name: '파리 에펠탑', en: 'Eiffel Tower, Paris',
    city: '파리', country: '프랑스', cc: 'FR', countryEn: 'Paris, France', flag: '🇫🇷', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Paris75Webcam',
    lat: 48.8584, lon: 2.2945, tz: 'Europe/Paris',
    tags: ['파리', 'paris', '에펠탑', 'eiffel', '프랑스', 'france'],
    note: '에펠탑과 몽파르나스 타워가 함께 보이는 전경 카메라입니다.'
  },
  {
    id: 'eu-sacrecoeur', yt: '-xzg3wujOVM', name: '파리 사크레쾨르', en: 'Sacré-Cœur, Montmartre',
    city: '파리', country: '프랑스', cc: 'FR', countryEn: 'Paris, France', flag: '🇫🇷', region: 'europe',
    cat: 'street', src: 'local', provider: 'PARIS TV',
    lat: 48.8867, lon: 2.3431, tz: 'Europe/Paris',
    tags: ['파리', 'paris', '사크레쾨르', 'sacre coeur', '몽마르트르', 'montmartre', '프랑스', 'france'],
    note: '몽마르트르 언덕과 파리 시내 전망을 보여줍니다.'
  },
  {
    id: 'eu-venice', yt: 'r8N6IsoIkTk', name: '베네치아 그란데 운하', en: 'Grand Canal, Venice',
    city: '베네치아', country: '이탈리아', cc: 'IT', countryEn: 'Venice, Italy', flag: '🇮🇹', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'I Love You Venice',
    lat: 45.4345, lon: 12.3300, tz: 'Europe/Rome',
    tags: ['베네치아', 'venice', '베니스', '그란데운하', 'grand canal', '이탈리아', 'italy'],
    note: '리알토 인근 그란데 운하의 곤돌라·수상버스 흐름을 보여줍니다.'
  },
  {
    id: 'eu-amsterdam', yt: 'Gd9d4q6WvUY', name: '암스테르담 담 광장', en: 'Dam Square, Amsterdam',
    city: '암스테르담', country: '네덜란드', cc: 'NL', countryEn: 'Amsterdam, Netherlands', flag: '🇳🇱', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Now4Rent.NL',
    lat: 52.3731, lon: 4.8932, tz: 'Europe/Amsterdam',
    tags: ['암스테르담', 'amsterdam', '담광장', 'dam square', '네덜란드', 'netherlands', 'holland'],
    note: '왕궁 앞 담 광장을 팬·틸트·줌이 가능한 4K 카메라로 중계합니다.'
  },

  /* ───────────── 독일 ───────────── */
  {
    id: 'de-berlin-frankfurtertor', yt: '5XeN6jZmrLI', name: '베를린 프랑크푸르터 토르', en: 'Frankfurter Tor, Berlin',
    city: '베를린', country: '독일', cc: 'DE', countryEn: 'Berlin, Germany', flag: '🇩🇪', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Wolkenwacht Berlin',
    lat: 52.5145, lon: 13.4545, tz: 'Europe/Berlin',
    tags: ['베를린', 'berlin', '독일', 'germany', '프리드리히스하인', 'friedrichshain', '거리'],
    note: '프리드리히스하인 프랑크푸르터 토르 교차로와 카를마르크스알레를 24시간 비춥니다.'
  },
  {
    id: 'de-berlin-17juni', yt: 'a6k2evUSFOU', name: '베를린 6월 17일 거리', en: 'Straße des 17. Juni, Berlin',
    city: '베를린', country: '독일', cc: 'DE', countryEn: 'Berlin, Germany', flag: '🇩🇪', region: 'europe',
    cat: 'street', src: 'creator', provider: 'BerlinWebcam (Günther Kohlbecker)',
    lat: 52.5145, lon: 13.3510, tz: 'Europe/Berlin',
    tags: ['베를린', 'berlin', '독일', 'germany', '티어가르텐', 'tiergarten', '승전기념탑', 'siegersäule'],
    note: '티어가르텐 공원과 승전기념탑 방향 도로를 비추는 베를린 시내 카메라입니다.'
  },

  /* ───────────── 스페인 · 포르투갈 ───────────── */
  {
    id: 'es-barcelona', yt: 'nefnkjc1yVs', name: '바르셀로나 스카이라인', en: 'Barcelona Skyline, Baix Guinardó',
    city: '바르셀로나', country: '스페인', cc: 'ES', countryEn: 'Barcelona, Spain', flag: '🇪🇸', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Barcelona Directo',
    lat: 41.4170, lon: 2.1740, tz: 'Europe/Madrid',
    tags: ['바르셀로나', 'barcelona', '스페인', 'spain', '스카이라인', '사그라다', '카탈루냐'],
    note: '바이크 기나르도 언덕에서 바르셀로나 시내와 사그라다 파밀리아 방향을 24시간 중계합니다.'
  },
  {
    id: 'es-sansebastian', yt: 'N1leboi8ePI', name: '산세바스티안 라 콘차 해변', en: 'Playa de la Concha, San Sebastián',
    city: '산세바스티안', country: '스페인', cc: 'ES', countryEn: 'San Sebastián, Spain', flag: '🇪🇸', region: 'europe',
    cat: 'nature', src: 'webcam', provider: 'WEBCAMS ONLINE',
    lat: 43.3183, lon: -1.9850, tz: 'Europe/Madrid',
    tags: ['산세바스티안', 'san sebastian', '스페인', 'spain', '라콘차', 'la concha', '해변', 'beach', '바스크'],
    note: '라 콘차 만의 조개 모양 해변과 산타클라라 섬을 보여줍니다.'
  },
  {
    id: 'pt-lisbon', yt: 'tKIgNtEgLN0', name: '리스본 시내', en: 'Lisbon Live',
    city: '리스본', country: '포르투갈', cc: 'PT', countryEn: 'Lisbon, Portugal', flag: '🇵🇹', region: 'europe',
    cat: 'street', src: 'creator', provider: 'I love Lx',
    lat: 38.7100, lon: -9.1400, tz: 'Europe/Lisbon',
    tags: ['리스본', 'lisbon', '포르투갈', 'portugal', '리스보아', 'lisboa'],
    note: '리스본 시내 지붕과 테주강 방향을 담은 현지 카메라입니다.'
  },
  {
    id: 'pt-porto', yt: 'QetuuDxsgig', name: '포르투 리베이라', en: 'Ribeira, Porto',
    city: '포르투', country: '포르투갈', cc: 'PT', countryEn: 'Porto, Portugal', flag: '🇵🇹', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Webcamtaxi',
    lat: 41.1408, lon: -8.6130, tz: 'Europe/Lisbon',
    tags: ['포르투', 'porto', '포르투갈', 'portugal', '리베이라', 'ribeira', '도루', 'douro'],
    note: '도루강과 리베이라 지구, 돔루이스 1세 다리를 함께 보여줍니다.'
  },

  /* ───────────── 스위스 · 오스트리아 ───────────── */
  {
    id: 'ch-geneva', yt: '3HsL6AA6rPM', name: '제네바 레만호', en: 'Lake Geneva, Les Corsaires',
    city: '제네바', country: '스위스', cc: 'CH', countryEn: 'Geneva, Switzerland', flag: '🇨🇭', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Vision-Environnement',
    lat: 46.2044, lon: 6.1432, tz: 'Europe/Zurich',
    tags: ['제네바', 'geneva', '스위스', 'switzerland', '레만호', 'lake geneva', '호수'],
    note: '레만호와 제네바 분수(제트 드오) 방향을 비추는 웹캠 운영사 카메라입니다.'
  },
  {
    id: 'eu-grimentz', yt: 'iCxfe27HpaY', name: '그리멘츠 스키밸리', en: 'Grimentz Ski Valley',
    city: '그리멘츠', country: '스위스', cc: 'CH', countryEn: 'Valais, Switzerland', flag: '🇨🇭', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Grimentz Live',
    lat: 46.1667, lon: 7.5500, tz: 'Europe/Zurich',
    tags: ['스위스', 'switzerland', '스키', 'ski', '알프스', 'alps', '그리멘츠', 'grimentz', '산'],
    note: '발레주 스키밸리의 설질과 슬로프 상태를 실시간으로 보여줍니다.'
  },
  {
    id: 'at-wien', yt: 'omcPYHHDNyQ', name: '빈 암 힘멜 전망', en: 'Am Himmel, Vienna',
    city: '빈', country: '오스트리아', cc: 'AT', countryEn: 'Vienna, Austria', flag: '🇦🇹', region: 'europe',
    cat: 'street', src: 'local', provider: 'Am Himmel',
    lat: 48.2300, lon: 16.2830, tz: 'Europe/Vienna',
    tags: ['빈', 'vienna', 'wien', '오스트리아', 'austria', '암힘멜', 'am himmel', '전망'],
    note: '빈 북쪽 암 힘멜 언덕에서 시내와 도나우 방향을 내려다보는 카메라입니다.'
  },
  {
    id: 'at-saalbach', yt: 'CjG8iZY4JK4', name: '잘바흐 힌터글렘 스키장', en: 'Saalbach Hinterglemm',
    city: '잘바흐', country: '오스트리아', cc: 'AT', countryEn: 'Salzburg, Austria', flag: '🇦🇹', region: 'europe',
    cat: 'nature', src: 'local', provider: 'TravelTrax',
    lat: 47.3900, lon: 12.6400, tz: 'Europe/Vienna',
    tags: ['오스트리아', 'austria', '잘바흐', 'saalbach', '힌터글렘', 'hinterglemm', '스키', 'ski', '알프스'],
    note: '알프스 최대 규모 스키 서킷 잘바흐 힌터글렘의 슬로프와 설질을 보여줍니다.'
  },

  /* ───────────── 노르웨이 · 스웨덴 · 덴마크 · 핀란드 · 아이슬란드 ───────────── */
  {
    id: 'no-geiranger', yt: 'yMSc-qqW3To', name: '가이랑에르 피오르', en: 'Geirangerfjord',
    city: '가이랑에르', country: '노르웨이', cc: 'NO', countryEn: 'Geiranger, Norway', flag: '🇳🇴', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Geirangerfjord cruise port',
    lat: 62.1005, lon: 7.2060, tz: 'Europe/Oslo',
    tags: ['노르웨이', 'norway', '가이랑에르', 'geiranger', '피오르', 'fjord', '세계유산', '산'],
    note: '유네스코 세계유산 가이랑에르 피오르와 크루즈선 입항을 보여줍니다.'
  },
  {
    id: 'no-tromso', yt: 'zKpPfH8u3GI', name: '트롬쇠 하늘 · 오로라', en: 'Tromsø Sky',
    city: '트롬쇠', country: '노르웨이', cc: 'NO', countryEn: 'Tromsø, Norway', flag: '🇳🇴', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Vervet Tromsø',
    lat: 69.6489, lon: 18.9551, tz: 'Europe/Oslo',
    tags: ['노르웨이', 'norway', '트롬쇠', 'tromso', '오로라', 'aurora', '북극', 'arctic', '밤하늘'],
    note: '북극권 트롬쇠 상공을 향한 카메라로, 밤에는 오로라가 잡히기도 합니다.'
  },
  {
    id: 'no-oslo', yt: 'faKBmRq0lYg', name: '오슬로', en: 'Oslo, Norway',
    city: '오슬로', country: '노르웨이', cc: 'NO', countryEn: 'Oslo, Norway', flag: '🇳🇴', region: 'europe',
    cat: 'street', src: 'local', provider: 'Norway Live - Kanal3',
    lat: 59.9139, lon: 10.7522, tz: 'Europe/Oslo',
    tags: ['오슬로', 'oslo', '노르웨이', 'norway', '도심', 'city'],
    note: '오슬로 시내와 오슬로피오르 방향을 24시간 중계하는 노르웨이 현지 채널입니다.'
  },
  {
    id: 'se-stockholm', yt: 'agY6ZaM1G_o', name: '스톡홀름 DN 스크라판', en: 'DN-Skrapan, Stockholm',
    city: '스톡홀름', country: '스웨덴', cc: 'SE', countryEn: 'Stockholm, Sweden', flag: '🇸🇪', region: 'europe',
    cat: 'street', src: 'local', provider: 'MED Mediateknik',
    lat: 59.3330, lon: 18.0700, tz: 'Europe/Stockholm',
    tags: ['스톡홀름', 'stockholm', '스웨덴', 'sweden', '스칸디나비아', '도심'],
    note: '스톡홀름 중심가 고층 빌딩에서 시내와 발트해 방향을 내려다보는 카메라입니다.'
  },
  {
    id: 'dk-hennestrand', yt: '9B8e3Y8JPUk', name: '헤네 스트란드 해변', en: 'Henne Strand, Jutland',
    city: '헤네', country: '덴마크', cc: 'DK', countryEn: 'Jutland, Denmark', flag: '🇩🇰', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Købmand Hansens Feriehusudlejning',
    lat: 55.7300, lon: 8.2400, tz: 'Europe/Copenhagen',
    tags: ['덴마크', 'denmark', '헤네', 'henne', '해변', 'beach', '북해', 'north sea', '윌란'],
    note: '덴마크 서해안 헤네 스트란드의 넓은 백사장과 파도를 보여줍니다.'
  },
  {
    id: 'eu-levi', yt: 'LwihxyJ4V20', name: '레비 스키장 제로포인트', en: 'Levi Ski Resort Zero Point',
    city: '레비', country: '핀란드', cc: 'FI', countryEn: 'Lapland, Finland', flag: '🇫🇮', region: 'europe',
    cat: 'nature', src: 'public', provider: 'Levi Ski Resort (공식)',
    lat: 67.8050, lon: 24.8000, tz: 'Europe/Helsinki',
    tags: ['핀란드', 'finland', '라플란드', 'lapland', '스키', 'ski', '오로라', 'aurora', '산'],
    note: '북극권 리조트가 직접 운영하는 카메라로, 밤에는 오로라가 잡히기도 합니다.'
  },
  {
    id: 'is-reykjavik', yt: 'WuBmLBuvKYA', name: '레이캬비크 펄란 전망', en: 'Perlan, Reykjavík',
    city: '레이캬비크', country: '아이슬란드', cc: 'IS', countryEn: 'Reykjavík, Iceland', flag: '🇮🇸', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'mbl.is (아이슬란드 언론)',
    lat: 64.1289, lon: -21.9190, tz: 'Atlantic/Reykjavik',
    tags: ['아이슬란드', 'iceland', '레이캬비크', 'reykjavik', '펄란', 'perlan', '전망'],
    note: '펄란 전망대에서 레이캬비크 시내와 에스야 산을 내려다보는 카메라입니다.'
  },
  {
    id: 'is-volcano', yt: '8VjPqa2go6o', name: '파그라달스피아들 화산', en: 'Fagradalsfjall Volcano',
    city: '레이캬네스', country: '아이슬란드', cc: 'IS', countryEn: 'Reykjanes, Iceland', flag: '🇮🇸', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Fridriksson',
    lat: 63.8800, lon: -22.2700, tz: 'Atlantic/Reykjavik',
    tags: ['아이슬란드', 'iceland', '화산', 'volcano', '파그라달스피아들', 'fagradalsfjall', '용암', '자연'],
    note: '레이캬네스 반도 화산 지대를 향한 24시간 카메라로 분화·용암 상태를 볼 수 있습니다.'
  },

  /* ───────────── 그리스 · 튀르키예 ───────────── */
  {
    id: 'gr-corfu', yt: 'CcnlJI_UXyM', name: '코르푸 아릴라스 해변', en: 'Arillas Beach, Corfu',
    city: '코르푸', country: '그리스', cc: 'GR', countryEn: 'Corfu, Greece', flag: '🇬🇷', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Arillas Corfu LIVE',
    lat: 39.7340, lon: 19.6490, tz: 'Europe/Athens',
    tags: ['그리스', 'greece', '코르푸', 'corfu', '아릴라스', 'arillas', '이오니아', '해변', 'beach'],
    note: '이오니아해 코르푸섬 아릴라스 해변의 일몰과 파도를 보여주는 현지 카메라입니다.'
  },
  {
    id: 'tr-rize', yt: 'ffaZExAkVC8', name: '리제 시청 광장', en: 'Rize City Center, Turkey',
    city: '리제', country: '튀르키예', cc: 'TR', countryEn: 'Rize, Türkiye', flag: '🇹🇷', region: 'mideast',
    cat: 'street', src: 'local', provider: 'Rize 시청 광장 라이브',
    lat: 41.0201, lon: 40.5234, tz: 'Europe/Istanbul',
    tags: ['튀르키예', '터키', 'turkey', 'turkiye', '리제', 'rize', '흑해', 'black sea', '광장'],
    note: '흑해안 리제 시청 광장과 시내 통행을 보여주는 현지 카메라입니다.'
  },

  /* ───────────── 체코 · 크로아티아 ───────────── */
  {
    id: 'cz-prague', yt: '3C8W4Rlgiog', name: '프라하 도심', en: 'Prague City Centre',
    city: '프라하', country: '체코', cc: 'CZ', countryEn: 'Prague, Czechia', flag: '🇨🇿', region: 'europe',
    cat: 'traffic', src: 'public', provider: 'ITS Praha (프라하 교통정보)',
    lat: 50.0755, lon: 14.4378, tz: 'Europe/Prague',
    tags: ['프라하', 'prague', 'praha', '체코', 'czech', 'czechia', '도심', '교통'],
    note: '프라하시 교통정보센터(ITS)가 운영하는 도심 도로·광장 카메라입니다.'
  },
  {
    id: 'hr-hvar', yt: '0wHWHAFnNh0', name: '흐바르 섬', en: 'Hvar, Croatia',
    city: '흐바르', country: '크로아티아', cc: 'HR', countryEn: 'Hvar, Croatia', flag: '🇭🇷', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Hvar Live',
    lat: 43.1729, lon: 16.4410, tz: 'Europe/Zagreb',
    tags: ['크로아티아', 'croatia', '흐바르', 'hvar', '아드리아', 'adriatic', '섬', 'island', '해변'],
    note: '아드리아해 흐바르 항구와 팔미자나 제도 방향을 보여주는 섬 카메라입니다.'
  },

  /* ───────────── 오스트레일리아 · 뉴질랜드 ───────────── */
  {
    id: 'ap-sydney', yt: '5uZa3-RMFos', name: '시드니 하버', en: 'Sydney Harbour',
    city: '시드니', country: '호주', cc: 'AU', countryEn: 'Sydney, Australia', flag: '🇦🇺', region: 'oceania',
    cat: 'street', src: 'webcam', provider: 'WebcamSydney',
    lat: -33.8568, lon: 151.2153, tz: 'Australia/Sydney',
    tags: ['시드니', 'sydney', '하버브리지', 'harbour bridge', '오페라하우스', 'opera house', '호주', 'australia'],
    note: '하버브리지와 오페라하우스가 한 화면에 들어오는 24시간 카메라입니다.'
  },
  {
    id: 'nz-auckland', yt: 'nLCMw_Fh0u0', name: '오클랜드 바이어덕트 하버', en: 'Viaduct Harbour, Auckland',
    city: '오클랜드', country: '뉴질랜드', cc: 'NZ', countryEn: 'Auckland, New Zealand', flag: '🇳🇿', region: 'oceania',
    cat: 'street', src: 'local', provider: 'Auckland Viaduct View',
    lat: -36.8430, lon: 174.7630, tz: 'Pacific/Auckland',
    tags: ['뉴질랜드', 'new zealand', '오클랜드', 'auckland', '항구', 'harbour', '하버브리지'],
    note: '오클랜드 바이어덕트 하버와 하버브리지를 비추는 24시간 카메라입니다.'
  },
  {
    id: 'nz-wellington', yt: 'AajdfhglWd8', name: '웰링턴 리얼 베이', en: 'Lyall Bay, Wellington',
    city: '웰링턴', country: '뉴질랜드', cc: 'NZ', countryEn: 'Wellington, New Zealand', flag: '🇳🇿', region: 'oceania',
    cat: 'nature', src: 'local', provider: 'John Young',
    lat: -41.3300, lon: 174.7950, tz: 'Pacific/Auckland',
    tags: ['뉴질랜드', 'new zealand', '웰링턴', 'wellington', '리얼베이', 'lyall bay', '서핑', '해변'],
    note: '웰링턴 공항 활주로 옆 리얼 베이의 파도와 서퍼들을 보여주는 카메라입니다.'
  },

  /* ───────────── 남아프리카공화국 ───────────── */
  {
    id: 'za-tablemountain', yt: 'jOqASqt3vVI', name: '케이프타운 테이블마운틴', en: 'Table Mountain, Cape Town',
    city: '케이프타운', country: '남아프리카공화국', cc: 'ZA', countryEn: 'Cape Town, South Africa', flag: '🇿🇦', region: 'africa',
    cat: 'nature', src: 'local', provider: 'Table Mountain Live Stream',
    lat: -33.9628, lon: 18.4098, tz: 'Africa/Johannesburg',
    tags: ['남아프리카', '남아공', 'south africa', '케이프타운', 'cape town', '테이블마운틴', 'table mountain', '산'],
    note: '테이블마운틴과 라이언스 헤드, 테이블베이를 한 화면에 담은 카메라입니다.'
  },

/* ───────────── 한국 직항 인기 여행지 — 중화권·동남아·대양주·미주·유럽 ───────────── */
  {
    id: 'hk-tst-harbour', yt: 'Z8NTLkEFZjg', name: '홍콩 침사추이 · 빅토리아 하버', en: 'Tsim Sha Tsui & Victoria Harbour, Hong Kong',
    city: '홍콩', country: '홍콩', cc: 'HK', countryEn: 'Hong Kong', flag: '🇭🇰', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Brainrolling Workshop',
    lat: 22.2936, lon: 114.1722, tz: 'Asia/Hong_Kong',
    tags: ['홍콩', 'hong kong', '침사추이', 'tsim sha tsui', '빅토리아 하버', 'victoria harbour', '尖沙咀', '香港', '야경', '홍콩섬', 'kowloon'],
    note: '침사추이에서 바라본 빅토리아 하버. 홍콩섬 스카이라인과 라이트쇼 시간대를 확인할 수 있습니다.'
  },
  {
    id: 'hk-harbour-4k', yt: 'OtreHvXgAoA', name: '홍콩 항구 도심 4K', en: 'Hong Kong Cityscape 4K',
    city: '홍콩', country: '홍콩', cc: 'HK', countryEn: 'Hong Kong', flag: '🇭🇰', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Brainrolling Workshop',
    lat: 22.2950, lon: 114.1725, tz: 'Asia/Hong_Kong',
    tags: ['홍콩', 'hong kong', '스카이라인', 'skyline', '빅토리아 하버', 'victoria harbour', '4k', '중환', 'central', '香港'],
    note: '홍콩 도심과 항구를 담은 4K 라이브. 낮·밤 경관과 안개·비 상황을 함께 볼 수 있습니다.'
  },
  {
    id: 'hk-kwuntong', yt: 'XN-ArdUrqtc', name: '홍콩 쿤통 · 동구룡 항구', en: 'Kwun Tong Waterfront, East Kowloon, Hong Kong',
    city: '홍콩', country: '홍콩', cc: 'HK', countryEn: 'Hong Kong', flag: '🇭🇰', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Marcus Wong',
    lat: 22.3125, lon: 114.2246, tz: 'Asia/Hong_Kong',
    tags: ['홍콩', 'hong kong', '쿤통', 'kwun tong', '동구룡', 'east kowloon', '觀塘', '항구', 'harbour', '香港'],
    note: '쿤통 해안에서 바라본 동구룡과 빅토리아 하버 동쪽. 카이탁 옛 활주로 방향 전망입니다.'
  },
  {
    id: 'hk-tungchung', yt: 'ZbUAX0ZvTZI', name: '홍콩 퉁충 · HZMB 항구', en: 'Tung Chung & HZMB Port, Hong Kong',
    city: '홍콩', country: '홍콩', cc: 'HK', countryEn: 'Hong Kong', flag: '🇭🇰', region: 'asia',
    cat: 'traffic', src: 'creator', provider: 'RingBoy 介子仔',
    lat: 22.2900, lon: 113.9444, tz: 'Asia/Hong_Kong',
    tags: ['홍콩', 'hong kong', '퉁충', 'tung chung', '홍콩주주오대교', 'hzmb', '港珠澳大橋', '공항', 'airport', '교통', 'traffic', '東涌'],
    note: '란타우섬 퉁충과 홍콩-주하이-마카오 대교(HZMB) 진입로·공항 주변 도로 상황을 비춥니다.'
  },
  {
    id: 'vn-danang-airport', yt: 'CRFSA3L1cHU', name: '다낭 국제공항', en: 'Da Nang International Airport',
    city: '다낭', country: '베트남', cc: 'VN', countryEn: 'Da Nang, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'traffic', src: 'creator', provider: 'Live Airways Vietnam',
    lat: 16.0439, lon: 108.1994, tz: 'Asia/Ho_Chi_Minh',
    tags: ['다낭', 'da nang', 'danang', '공항', 'airport', '베트남', 'vietnam', '한국 직항', '도착', '출발', 'Đà Nẵng'],
    note: '다낭 국제공항 도착·출발 안내와 활주로 주변 상황을 함께 보여주는 라이브입니다.'
  },
  {
    id: 'vn-danang-city', yt: 'G_G8A6JU_LI', name: '다낭 시내 (한강 동쪽)', en: 'Da Nang City (East of Han River)',
    city: '다낭', country: '베트남', cc: 'VN', countryEn: 'Da Nang, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'street', src: 'public', provider: 'Phát Triển Đà Nẵng',
    lat: 16.0544, lon: 108.2478, tz: 'Asia/Ho_Chi_Minh',
    tags: ['다낭', 'da nang', 'danang', '한강', 'han river', '시내', 'city', '베트남', 'vietnam', 'Đà Nẵng'],
    note: '다낭시 개발 사업 채널이 운영하는 시내 PTZ 카메라. 한강 동쪽 도로와 거리 상황을 비춥니다.'
  },
  {
    id: 'vn-nhatrang-oceanus', yt: 'n8lmPY3dEfA', name: '나트랑 해변 · 오세아누스', en: 'Nha Trang Beach & Oceanus',
    city: '나트랑', country: '베트남', cc: 'VN', countryEn: 'Nha Trang, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'nature', src: 'creator', provider: '아렌다 v 냐짱',
    lat: 12.2395, lon: 109.1965, tz: 'Asia/Ho_Chi_Minh',
    tags: ['나트랑', 'nha trang', '냐짱', '해변', 'beach', '바다', '베트남', 'vietnam', '나트랑 해변', 'Nha Trang'],
    note: '나트랑 트란푸 해변가 오세아누스 아파트에서 바라본 바다. 파도와 해수욕 적합도를 확인할 수 있습니다.'
  },
  {
    id: 'vn-nhatrang-beach', yt: '5MRY7QZqyeQ', name: '나트랑 해변 전망', en: 'Nha Trang Beach View',
    city: '나트랑', country: '베트남', cc: 'VN', countryEn: 'Nha Trang, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'nature', src: 'creator', provider: 'Дядя Ваня Вьетнам',
    lat: 12.2388, lon: 109.1967, tz: 'Asia/Ho_Chi_Minh',
    tags: ['나트랑', 'nha trang', '냐짱', '해변', 'beach', '바다', '베트남', 'vietnam', 'Nha Trang'],
    note: '나트랑 해변을 매일 갱신해 보여주는 라이브. 현지 날씨와 파도 상태를 함께 볼 수 있습니다.'
  },
  {
    id: 'vn-phuquoc-airport', yt: 'phYngbJn9Fw', name: '푸꾸옥 국제공항', en: 'Phu Quoc International Airport',
    city: '푸꾸옥', country: '베트남', cc: 'VN', countryEn: 'Phu Quoc, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'traffic', src: 'creator', provider: 'Live Airways Vietnam',
    lat: 10.1698, lon: 103.9931, tz: 'Asia/Ho_Chi_Minh',
    tags: ['푸꾸옥', 'phu quoc', '푸쿠옥', '공항', 'airport', '베트남', 'vietnam', '휴양지', 'resort', 'Phú Quốc'],
    note: '푸꾸옥 국제공항의 도착·출발 보드와 활주로 주변. 우기 항공편 지연 여부를 확인하는 데 쓰입니다.'
  },
  {
    id: 'th-chiangmai', yt: '61ahmhZoeKY', name: '치앙마이 시내', en: 'Chiang Mai City 4K',
    city: '치앙마이', country: '태국', cc: 'TH', countryEn: 'Chiang Mai, Thailand', flag: '🇹🇭', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Chiang Mai Live Cam',
    lat: 18.7883, lon: 98.9853, tz: 'Asia/Bangkok',
    tags: ['치앙마이', 'chiang mai', '태국', 'thailand', '북부', 'north', '시내', 'city', 'เชียงใหม่'],
    note: '치앙마이 시내를 24시간 4K로 송출하는 라이브. 우기 스콜과 미세먼지 계절 하늘 상태를 볼 수 있습니다.'
  },
  {
    id: 'th-phuket-panwa', yt: 'X-h-xgKg-VA', name: '푸켓 케이프 판와 바다', en: 'Cape Panwa Sea Conditions, Phuket',
    city: '푸켓', country: '태국', cc: 'TH', countryEn: 'Phuket, Thailand', flag: '🇹🇭', region: 'asia',
    cat: 'nature', src: 'local', provider: 'NAMA Freediving Phuket',
    lat: 7.8025, lon: 98.4075, tz: 'Asia/Bangkok',
    tags: ['푸켓', 'phuket', '케이프 판와', 'cape panwa', '바다', 'sea', '파도', '다이빙', 'freediving', '태국', 'thailand'],
    note: '푸켓 남동쪽 케이프 판와의 해상 상태. 다이빙·보트 투어 가능 여부 판단에 쓰는 카메라입니다.'
  },
  {
    id: 'th-phuket-bangla', yt: 'Rsb5iWSnuK8', name: '푸켓 방라로드', en: 'Bangla Road, Patong, Phuket',
    city: '푸켓', country: '태국', cc: 'TH', countryEn: 'Phuket, Thailand', flag: '🇹🇭', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Go Maria 4K',
    lat: 7.8925, lon: 98.2966, tz: 'Asia/Bangkok',
    tags: ['푸켓', 'phuket', '파통', 'patong', '방라로드', 'bangla road', '번화가', '밤거리', '태국', 'thailand'],
    note: '푸켓 파통의 방라로드. 야간 번화가 분위기와 비 오는 날 노점 상황을 실시간으로 보여줍니다.'
  },
  {
    id: 'th-phuket-sky', yt: 'n-E0UHEfssg', name: '푸켓 시내 하늘', en: 'Phuket Sky & City Horizon',
    city: '푸켓', country: '태국', cc: 'TH', countryEn: 'Phuket, Thailand', flag: '🇹🇭', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Upsky view',
    lat: 7.8804, lon: 98.3923, tz: 'Asia/Bangkok',
    tags: ['푸켓', 'phuket', '하늘', 'sky', '날씨', 'weather', '몽키마운틴', 'monkey mountain', '태국', 'thailand'],
    note: '푸켓 시내에서 몽키마운틴 방향 하늘을 고정 촬영. 우기 구름과 바람을 판단하기 좋습니다.'
  },
  {
    id: 'th-phuket-patong', yt: '_nvG0c9keWI', name: '푸켓 파통 사이나미엔 로드', en: 'Sainamyen Road, Patong, Phuket',
    city: '푸켓', country: '태국', cc: 'TH', countryEn: 'Phuket, Thailand', flag: '🇹🇭', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Randomly Entertained',
    lat: 7.8895, lon: 98.2969, tz: 'Asia/Bangkok',
    tags: ['푸켓', 'phuket', '파통', 'patong', '사이나미엔', 'sainamyen', '거리', 'street', '태국', 'thailand'],
    note: '파통 사이나미엔 로드의 상점·마사지샵 거리. 낮과 밤 유동인구를 확인할 수 있습니다.'
  },
  {
    id: 'ph-moalboal', yt: 'rIcFVErHQrY', name: '세부 모알보알 해변', en: 'Moalboal Front Beach, Cebu',
    city: '세부', country: '필리핀', cc: 'PH', countryEn: 'Cebu, Philippines', flag: '🇵🇭', region: 'asia',
    cat: 'nature', src: 'local', provider: 'Junedive Resort',
    lat: 9.9820, lon: 123.3686, tz: 'Asia/Manila',
    tags: ['세부', 'cebu', '모알보알', 'moalboal', '해변', 'beach', '필리핀', 'philippines', '스쿠버', 'diving', '리조트', 'resort'],
    note: '세부 남서쪽 모알보알 해변. 스쿠버다이빙 포인트의 파도와 조류 상황을 리조트가 직접 송출합니다.'
  },
  {
    id: 'ph-quezoncity-sky', yt: 'SIdi3pCdPvA', name: '마닐라 케손시티 하늘', en: 'Quezon City Sky, Metro Manila',
    city: '마닐라', country: '필리핀', cc: 'PH', countryEn: 'Metro Manila, Philippines', flag: '🇵🇭', region: 'asia',
    cat: 'street', src: 'creator', provider: 'K.Richard 날씨수첩',
    lat: 14.6760, lon: 121.0437, tz: 'Asia/Manila',
    tags: ['마닐라', 'manila', '케손시티', 'quezon city', '필리핀', 'philippines', '하늘', 'sky', '태풍', 'typhoon', '날씨', 'weather'],
    note: '마닐라 수도권 케손시티의 하늘을 고정 촬영. 태풍철 구름 발달과 소나기를 판단하는 데 쓰입니다.'
  },
  {
    id: 'au-melbourne-city', yt: 'gEbrHdFRgpQ', name: '멜버른 시내 교차로', en: 'Melbourne City Intersection',
    city: '멜버른', country: '호주', cc: 'AU', countryEn: 'Melbourne, Australia', flag: '🇦🇺', region: 'oceania',
    cat: 'street', src: 'creator', provider: 'Cityscape Live',
    lat: -37.8110, lon: 144.9640, tz: 'Australia/Melbourne',
    tags: ['멜버른', 'melbourne', '호주', 'australia', '빅토리아', 'victoria', '시내', 'city', '거리', 'street'],
    note: '멜버른 시내 주요 교차로의 보행자와 노면전차 흐름. 사계절 변덕스러운 날씨를 눈으로 확인할 수 있습니다.'
  },
  {
    id: 'au-brisbane-city', yt: 'pIaqtdmfbZ4', name: '브리즈번 시내 하늘', en: 'Brisbane City & Weather',
    city: '브리즈번', country: '호주', cc: 'AU', countryEn: 'Brisbane, Australia', flag: '🇦🇺', region: 'oceania',
    cat: 'street', src: 'creator', provider: 'Brisbane Live',
    lat: -27.4698, lon: 153.0251, tz: 'Australia/Brisbane',
    tags: ['브리즈번', 'brisbane', '호주', 'australia', '퀸즐랜드', 'queensland', '날씨', 'weather', '시내', 'city'],
    note: '브리즈번 시내와 하늘을 함께 담은 라이브. 여름 스톰 시즌 접근 상황을 확인하기 좋습니다.'
  },
  {
    id: 'au-brisbane-airport', yt: '7dlz_g6j4Nk', name: '브리즈번 공항', en: 'Brisbane Airport (BNE)',
    city: '브리즈번', country: '호주', cc: 'AU', countryEn: 'Brisbane, Australia', flag: '🇦🇺', region: 'oceania',
    cat: 'traffic', src: 'creator', provider: 'LJK Aviation',
    lat: -27.3842, lon: 153.1175, tz: 'Australia/Brisbane',
    tags: ['브리즈번', 'brisbane', '공항', 'airport', 'bne', '호주', 'australia', '퀸즐랜드', 'queensland', '활주로', 'runway'],
    note: '브리즈번 공항 활주로와 관제 상황. 국제선 도착·출발 지연 여부를 확인할 수 있습니다.'
  },
  {
    id: 'us-la-hollywood', yt: 'YHWJd_DNgKY', name: 'LA 할리우드', en: 'Hollywood, Los Angeles (LA Times)',
    city: '로스앤젤레스', country: '미국', cc: 'US', countryEn: 'Los Angeles, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'broadcaster', provider: 'LA Times Studios',
    lat: 34.1016, lon: -118.3267, tz: 'America/Los_Angeles',
    tags: ['LA', '로스앤젤레스', 'los angeles', '할리우드', 'hollywood', '미국', 'usa', '캘리포니아', 'california'],
    note: 'LA 할리우드 일대를 LA타임스가 운영하는 24시간 라이브 피드로 보여줍니다.'
  },
  {
    id: 'us-santa-monica', yt: 'v97JpT3ZA0w', name: '샌타모니카 해변 · 부두', en: 'Santa Monica Beach & Pier',
    city: '로스앤젤레스', country: '미국', cc: 'US', countryEn: 'Los Angeles, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'explore.org',
    lat: 34.0083, lon: -118.4983, tz: 'America/Los_Angeles',
    tags: ['샌타모니카', 'santa monica', 'LA', 'los angeles', '부두', 'pier', '해변', 'beach', '미국', 'usa', '캘리포니아'],
    note: '샌타모니카 해변과 부두. 일몰 시간대와 파도·안개 상황을 확인할 수 있습니다.'
  },
  {
    id: 'us-venice-beach', yt: '0IgjqQzibqE', name: '베니스 비치 보드워크', en: 'Venice Beach Boardwalk',
    city: '로스앤젤레스', country: '미국', cc: 'US', countryEn: 'Los Angeles, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'creator', provider: 'Venice Vive',
    lat: 33.9870, lon: -118.4730, tz: 'America/Los_Angeles',
    tags: ['베니스', 'venice beach', 'LA', 'los angeles', '보드워크', 'boardwalk', '해변', 'beach', '미국', 'usa'],
    note: '베니스 비치 보드워크와 광장. 주말 혼잡도와 서핑 파도를 함께 볼 수 있습니다.'
  },
  {
    id: 'us-sf-pier23', yt: 'PDKGik7Np88', name: '샌프란시스코 피어 23', en: 'Pier 23, San Francisco Bay',
    city: '샌프란시스코', country: '미국', cc: 'US', countryEn: 'San Francisco, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'StreamTime Live',
    lat: 37.8083, lon: -122.4019, tz: 'America/Los_Angeles',
    tags: ['샌프란시스코', 'san francisco', '피어23', 'pier 23', '베이', 'bay', '미국', 'usa', '캘리포니아'],
    note: '샌프란시스코 베이 피어 23의 해상·부두 상황. 안개(칼 포그)와 페리 운항을 확인할 수 있습니다.'
  },
  {
    id: 'us-sf-treasure-island', yt: 'BSWhGNXxT9A', name: '샌프란시스코 베이 · 금문교', en: 'San Francisco Skyline & Golden Gate',
    city: '샌프란시스코', country: '미국', cc: 'US', countryEn: 'San Francisco, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'Teleport.camera',
    lat: 37.8236, lon: -122.3690, tz: 'America/Los_Angeles',
    tags: ['샌프란시스코', 'san francisco', '금문교', 'golden gate', '스카이라인', 'skyline', '미국', 'usa', '베이', 'bay'],
    note: '트레저 아일랜드에서 바라본 샌프란시스코 스카이라인과 금문교 방향.'
  },
  {
    id: 'us-lasvegas-strip', yt: 'C1hrfERKzbg', name: '라스베이거스 스트립', en: 'Las Vegas Strip',
    city: '라스베이거스', country: '미국', cc: 'US', countryEn: 'Las Vegas, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'creator', provider: 'LV Strip Cam',
    lat: 36.1147, lon: -115.1728, tz: 'America/Los_Angeles',
    tags: ['라스베이거스', 'las vegas', '베이거스', 'vegas', '스트립', 'strip', '미국', 'usa', '네바다', 'nevada'],
    note: '라스베이거스 스트립 대로의 실시간 교통과 네온사인. 사막 한낮 더위와 야간 기온을 비교해 볼 수 있습니다.'
  },
  {
    id: 'us-fremont-street', yt: 'uaIhqF1hz0I', name: '라스베이거스 프리몬트 스트리트', en: 'Fremont Street Experience, Las Vegas',
    city: '라스베이거스', country: '미국', cc: 'US', countryEn: 'Las Vegas, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'creator', provider: 'Justin Clouse',
    lat: 36.1700, lon: -115.1430, tz: 'America/Los_Angeles',
    tags: ['라스베이거스', 'las vegas', '프리몬트', 'fremont', '다운타운', 'downtown', '미국', 'usa', '네바다'],
    note: '다운타운 라스베이거스 프리몬트 스트리트 체험 거리. 야간 조명 쇼 시간대를 확인할 수 있습니다.'
  },
  {
    id: 'us-bellagio', yt: 'KJuGU7v5oYw', name: '벨라지오 식물원·분수대', en: 'Bellagio Conservatory, Las Vegas',
    city: '라스베이거스', country: '미국', cc: 'US', countryEn: 'Las Vegas, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'EarthCam',
    lat: 36.1126, lon: -115.1740, tz: 'America/Los_Angeles',
    tags: ['라스베이거스', 'las vegas', '벨라지오', 'bellagio', '분수', 'fountain', '미국', 'usa', '네바다'],
    note: '벨라지오 호텔 식물원 정원. 계절 장식과 분수쇼 주변 혼잡도를 볼 수 있습니다.'
  },
  {
    id: 'us-chicago-lakefront', yt: 'j2P0SoAh8Pc', name: '시카고 레이크프론트', en: 'Chicago Lakefront & Navy Pier',
    city: '시카고', country: '미국', cc: 'US', countryEn: 'Chicago, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'creator', provider: 'Lakefront Live',
    lat: 41.8917, lon: -87.6050, tz: 'America/Chicago',
    tags: ['시카고', 'chicago', '레이크프론트', 'lakefront', '네이비피어', 'navy pier', '미시간호', 'lake michigan', '미국', 'usa'],
    note: '미시간호를 낀 시카고 레이크프론트와 네이비 피어. 겨울 한파·바람 상황을 확인하기 좋습니다.'
  },
  {
    id: 'us-chicago-midway', yt: 'EiUyBIcG4fQ', name: '시카고 미드웨이 공항', en: 'Midway Airport, Chicago',
    city: '시카고', country: '미국', cc: 'US', countryEn: 'Chicago, USA', flag: '🇺🇸', region: 'americas',
    cat: 'traffic', src: 'webcam', provider: 'EarthCam',
    lat: 41.7868, lon: -87.7522, tz: 'America/Chicago',
    tags: ['시카고', 'chicago', '미드웨이', 'midway', '공항', 'airport', '미국', 'usa', '일리노이', 'illinois'],
    note: '시카고 미드웨이 공항 활주로와 터미널. 겨울 폭설철 결항·지연 여부를 확인하는 데 쓰입니다.'
  },
  {
    id: 'us-seattle-lake', yt: 'NCzKkn0wD30', name: '시애틀 워싱턴호', en: 'Lake Washington, Seattle (UW)',
    city: '시애틀', country: '미국', cc: 'US', countryEn: 'Seattle, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'public', provider: '워싱턴대학교(UW Video)',
    lat: 47.6505, lon: -122.3070, tz: 'America/Los_Angeles',
    tags: ['시애틀', 'seattle', '워싱턴호', 'lake washington', '워싱턴대', 'uw', '미국', 'usa', '워싱턴주'],
    note: '워싱턴대 캠퍼스에서 바라본 워싱턴호와 레이니어산 방향. 비·안개가 잦은 시애틀 날씨를 그대로 보여줍니다.'
  },
  {
    id: 'us-seattle-campus', yt: '9-hGCRgqMMs', name: '시애틀 워싱턴대 캠퍼스', en: 'UW Campus, Seattle',
    city: '시애틀', country: '미국', cc: 'US', countryEn: 'Seattle, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'public', provider: '워싱턴대학교(UW Video)',
    lat: 47.6553, lon: -122.3035, tz: 'America/Los_Angeles',
    tags: ['시애틀', 'seattle', '워싱턴대', 'university of washington', 'uw', '캠퍼스', 'campus', '미국', 'usa'],
    note: '워싱턴대 캠퍼스 안 광장과 건물. 시애틀 시내 북쪽의 실시간 하늘·눈 상황을 확인할 수 있습니다.'
  },
  {
    id: 'us-fortworth-tower55', yt: 'blcDjPvPbss', name: '댈러스 · 포트워스 타워 55', en: 'Tower 55, Fort Worth (Dallas–Fort Worth)',
    city: '댈러스', country: '미국', cc: 'US', countryEn: 'Dallas–Fort Worth, USA', flag: '🇺🇸', region: 'americas',
    cat: 'traffic', src: 'webcam', provider: 'Virtual Railfan',
    lat: 32.7530, lon: -97.3280, tz: 'America/Chicago',
    tags: ['댈러스', 'dallas', '포트워스', 'fort worth', 'dfw', '텍사스', 'texas', '철도', 'railcam', '미국', 'usa'],
    note: '댈러스-포트워스 지역 타워 55 철도 교차점. 광활한 텍사스 하늘과 폭풍 접근을 볼 수 있습니다.'
  },
  {
    id: 'it-rome-venezia', yt: 'wwkVJ-jL3CI', name: '로마 피아자 베네치아', en: 'Piazza Venezia, Rome',
    city: '로마', country: '이탈리아', cc: 'IT', countryEn: 'Rome, Italy', flag: '🇮🇹', region: 'europe',
    cat: 'street', src: 'local', provider: 'Roma Five Suites',
    lat: 41.8960, lon: 12.4824, tz: 'Europe/Rome',
    tags: ['로마', 'rome', 'roma', '피아자 베네치아', 'piazza venezia', '이탈리아', 'italy', '콜로세오', 'colosseum'],
    note: '로마 피아자 베네치아와 비토리아노 광장. 콜로세오 방향 보행 흐름을 확인할 수 있습니다.'
  },
  {
    id: 'it-rome-stpeter', yt: 'gXm3PGF4z0s', name: '로마 성 베드로 대성당', en: 'St. Peter\u2019s Basilica, Rome',
    city: '로마', country: '이탈리아', cc: 'IT', countryEn: 'Rome, Italy', flag: '🇮🇹', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Webcam Italia',
    lat: 41.9022, lon: 12.4539, tz: 'Europe/Rome',
    tags: ['로마', 'rome', 'roma', '바티칸', 'vatican', '성베드로', 'st peter', '이탈리아', 'italy'],
    note: '프라티 지구에서 바라본 성 베드로 대성당 돔. 바티칸 방문 전 인파와 하늘을 확인할 수 있습니다.'
  },
  {
    id: 'it-rome-monte-mario', yt: 'IZtH_58-jKI', name: '로마 몬테 마리오 전망', en: 'Monte Mario, Rome',
    city: '로마', country: '이탈리아', cc: 'IT', countryEn: 'Rome, Italy', flag: '🇮🇹', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Webcam Italia',
    lat: 41.9248, lon: 12.4478, tz: 'Europe/Rome',
    tags: ['로마', 'rome', 'roma', '몬테 마리오', 'monte mario', '전망', 'panorama', '이탈리아', 'italy'],
    note: '로마에서 가장 높은 언덕 몬테 마리오에서 내려다보는 도심 파노라마.'
  },
  {
    id: 'it-rome-vatican360', yt: 'NMC7TRAalOo', name: '로마 바티칸 야경 360', en: 'Vatican & St. Peter\u2019s Night 360, Rome',
    city: '로마', country: '이탈리아', cc: 'IT', countryEn: 'Rome, Italy', flag: '🇮🇹', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'RMS RAMSAT Multimedia',
    lat: 41.9025, lon: 12.4545, tz: 'Europe/Rome',
    tags: ['로마', 'rome', 'roma', '바티칸', 'vatican', '야경', 'night view', '360', '이탈리아', 'italy'],
    note: '바티칸과 성 베드로 대성당을 360도로 담은 야경 카메라. 로마의 저녁 기온과 조명을 함께 볼 수 있습니다.'
  },
  {
    id: 'it-milan-skyline', yt: 'dsoM6TYIkOI', name: '밀라노 스카이라인', en: 'Milan Skyline',
    city: '밀라노', country: '이탈리아', cc: 'IT', countryEn: 'Milan, Italy', flag: '🇮🇹', region: 'europe',
    cat: 'street', src: 'local', provider: 'Espansione TV',
    lat: 45.4642, lon: 9.1900, tz: 'Europe/Rome',
    tags: ['밀라노', 'milan', 'milano', '스카이라인', 'skyline', '이탈리아', 'italy', '롬바르디아', 'lombardy'],
    note: '밀라노 신도심(포르타 누오바) 마천루 스카이라인. 안개 낀 겨울 아침 풍경도 자주 잡힙니다.'
  },
  {
    id: 'it-milan-duomo', yt: 'Iuc9BjSriaM', name: '밀라노 두오모 광장', en: 'Duomo di Milano',
    city: '밀라노', country: '이탈리아', cc: 'IT', countryEn: 'Milan, Italy', flag: '🇮🇹', region: 'europe',
    cat: 'street', src: 'local', provider: 'Duomo Milano TV',
    lat: 45.4641, lon: 9.1919, tz: 'Europe/Rome',
    tags: ['밀라노', 'milan', 'milano', '두오모', 'duomo', '대성당', '광장', 'piazza', '이탈리아', 'italy'],
    note: '밀라노 두오모 대성당과 광장. 관광객 밀집도와 광장 행사 여부를 확인할 수 있습니다.'
  },
  {
    id: 'pl-warsaw', yt: 'Gtm6fq73BZU', name: '바르샤바 파노라마 · 국립경기장', en: 'Warsaw Panorama & National Stadium',
    city: '바르샤바', country: '폴란드', cc: 'PL', countryEn: 'Warsaw, Poland', flag: '🇵🇱', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Warsaw Livestream',
    lat: 52.2370, lon: 21.0450, tz: 'Europe/Warsaw',
    tags: ['바르샤바', 'warsaw', 'warszawa', '폴란드', 'poland', '국립경기장', 'national stadium', '비스와', 'vistula'],
    note: '비스와강 너머 바르샤바 스카이라인과 국립경기장. 겨울 안개와 강물 수위를 볼 수 있습니다.'
  },
  {
    id: 'es-madrid-skyline', yt: '2QXqf9p-L80', name: '마드리드 스카이라인', en: 'Madrid Skyline',
    city: '마드리드', country: '스페인', cc: 'ES', countryEn: 'Madrid, Spain', flag: '🇪🇸', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Madrid Live Skyline',
    lat: 40.4168, lon: -3.7038, tz: 'Europe/Madrid',
    tags: ['마드리드', 'madrid', '스페인', 'spain', '스카이라인', 'skyline', '시내', 'city'],
    note: '마드리드 도심 스카이라인을 24시간 담은 라이브. 고원 도시 특유의 맑은 하늘과 일몰을 볼 수 있습니다.'
  },
  {
    id: 'de-frankfurt-skyline', yt: 'FydsHtlfHHM', name: '프랑크푸르트 스카이라인', en: 'Frankfurt Skyline',
    city: '프랑크푸르트', country: '독일', cc: 'DE', countryEn: 'Frankfurt, Germany', flag: '🇩🇪', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Webcam Skyline Frankfurt',
    lat: 50.1109, lon: 8.6821, tz: 'Europe/Berlin',
    tags: ['프랑크푸르트', 'frankfurt', '독일', 'germany', '스카이라인', 'skyline', '마인강', 'main river', '공항'],
    note: '프랑크푸르트 마천루 스카이라인과 마인강. 라인강 유역 안개와 비구름 이동을 확인할 수 있습니다.'
  },
  {
    id: 'de-frankfurt-city', yt: 'boJCx2dXCko', name: '프랑크푸르트 시내', en: 'Frankfurt am Main City Cam',
    city: '프랑크푸르트', country: '독일', cc: 'DE', countryEn: 'Frankfurt, Germany', flag: '🇩🇪', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Marco Schirrmeister',
    lat: 50.1120, lon: 8.6850, tz: 'Europe/Berlin',
    tags: ['프랑크푸르트', 'frankfurt', '독일', 'germany', '시내', 'city', '레머', 'römer', '마인강'],
    note: '프랑크푸르트 구시가지와 강변 도로를 함께 비추는 24시간 카메라.'
  },
  {
    id: 'de-munich-marienplatz', yt: 'VAS9A0LRGHA', name: '뮌헨 마리엔플라츠', en: 'Marienplatz, Munich (LUDWIG BECK)',
    city: '뮌헨', country: '독일', cc: 'DE', countryEn: 'Munich, Germany', flag: '🇩🇪', region: 'europe',
    cat: 'street', src: 'local', provider: 'LUDWIG BECK(공식)',
    lat: 48.1374, lon: 11.5755, tz: 'Europe/Berlin',
    tags: ['뮌헨', 'munich', 'münchen', '마리엔플라츠', 'marienplatz', '신시청사', '독일', 'germany', '바이에른', 'bavaria'],
    note: '뮌헨 마리엔플라츠 신시청사 앞 광장. 백화점 LUDWIG BECK이 운영하는 공식 카메라로, 크리스마스 마켓 철 혼잡도도 보입니다.'
  },
  {
    id: 'ae-dubai-downtown', yt: '22AyE6m7WhA', name: '두바이 다운타운 · 부르즈 할리파', en: 'Downtown Dubai & Burj Khalifa',
    city: '두바이', country: '아랍에미리트', cc: 'AE', countryEn: 'Dubai, UAE', flag: '🇦🇪', region: 'mideast',
    cat: 'street', src: 'creator', provider: 'UinDubai',
    lat: 25.1972, lon: 55.2744, tz: 'Asia/Dubai',
    tags: ['두바이', 'dubai', '부르즈 할리파', 'burj khalifa', '다운타운', 'downtown', 'uae', '아랍에미리트', '두바이몰', 'dubai mall'],
    note: '부르즈 할리파와 두바이몰 주변을 걷는 4K 도보 라이브. 사막 도시의 한낮 더위와 야간 경관을 비교할 수 있습니다.'
  },
  {
    id: 'ae-dubai-citycenter', yt: 'VFM5MOSS8Ok', name: '두바이 시티센터 야경', en: 'Dubai City Center Evening Walk',
    city: '두바이', country: '아랍에미리트', cc: 'AE', countryEn: 'Dubai, UAE', flag: '🇦🇪', region: 'mideast',
    cat: 'street', src: 'creator', provider: 'CitiesTouch',
    lat: 25.1930, lon: 55.2770, tz: 'Asia/Dubai',
    tags: ['두바이', 'dubai', '시티센터', 'city center', '야경', 'night', 'uae', '아랍에미리트', 'burj khalifa'],
    note: '두바이 다운타운 저녁 거리를 걷는 라이브. 분수쇼 시간대 인파와 습도를 가늠할 수 있습니다.'
  },

  /* ───────────── 공식 라이브 바로가기(외부 링크 전용) ───────────── */
  {
    id: 'ext-topis', mode: 'external', name: '서울시 TOPIS 교통 CCTV', en: 'Seoul TOPIS Traffic CCTV',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'traffic', src: 'public', provider: '서울특별시 교통정보센터(TOPIS)',
    lat: 37.5566, lon: 126.9368, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', 'topis', '양화대교', '명동', '교통', 'cctv', '도로', '대한민국', 'korea'],
    url: 'https://topis.seoul.go.kr/',
    note: '서울시가 직접 운영하는 실시간 CCTV. 영상 재배포가 제한되어 공식 페이지로만 연결합니다.'
  },
  {
    id: 'ext-busan-tunnel', mode: 'external', name: '부산 구덕터널 CCTV', en: 'Busan Gudeok Tunnel CCTV',
    city: '부산', country: '대한민국', cc: 'KR', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'traffic', src: 'public', provider: '부산시설공단 교통정보',
    lat: 35.1180, lon: 129.0120, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '구덕터널', '터널', '교통', 'cctv', '도로', '대한민국', 'korea'],
    url: 'https://www.youtube.com/watch?v=AjxhLFTDSbE',
    note: '공단 공식 유튜브 채널이지만 외부 임베드가 막혀 있어 원본으로만 연결합니다.'
  },
  {
    id: 'ext-jartic', mode: 'external', name: '일본 JARTIC 도로 교통정보', en: 'Japan Road Traffic (JARTIC)',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Japan', flag: '🇯🇵', region: 'asia',
    cat: 'traffic', src: 'public', provider: '일본 도로교통정보센터(JARTIC)',
    lat: 35.6812, lon: 139.7671, tz: 'Asia/Tokyo',
    tags: ['일본', 'japan', 'jartic', '도로', '교통', '고속도로', 'highway', '도쿄', 'tokyo'],
    url: 'https://www.jartic.or.jp/',
    note: '일본 전국 주요 도로의 공공 교통정보. 공식 페이지 링크만 제공합니다.'
  },
  {
    id: 'ext-macau-dsat', mode: 'external', name: '마카오 교통사무국 실시간 교통영상', en: 'Macao DSAT Live Traffic Cameras',
    city: '마카오', country: '마카오', cc: 'MO', countryEn: 'Macao', flag: '🇲🇴', region: 'asia',
    cat: 'traffic', src: 'public', provider: '마카오 특별행정구 교통사무국(DSAT)',
    lat: 22.1987, lon: 113.5439, tz: 'Asia/Macau',
    tags: ['마카오', 'macau', 'macao', '澳門', '교통', 'traffic', 'cctv', '도로', '세나도 광장', 'senado square', '카지노', 'cotai'],
    url: 'https://www.dsat.gov.mo/dsat/realtime.aspx',
    note: '마카오 교통사무국이 공개하는 실시간 교통 영상(5초 갱신·일부 구간 생방송). 유튜브 임베드가 가능한 시내 캠이 없어 공식 페이지로만 연결합니다.'
  },
  {
    id: 'ext-guam-gvb', mode: 'external', name: '괌 관광청 공식 페이지', en: 'Guam Visitors Bureau (visitguam.com)',
    city: '투몬', country: '괌', cc: 'GU', countryEn: 'Guam', flag: '🇬🇺', region: 'oceania',
    cat: 'street', src: 'public', provider: '괌 관광청(Guam Visitors Bureau)',
    lat: 13.5015, lon: 144.7886, tz: 'Pacific/Guam',
    tags: ['괌', 'guam', '투몬', 'tumon', '타무닝', 'tamuning', '관광청', 'guam visitors bureau', '괌여행', '하갓냐', 'hagatna'],
    url: 'https://www.visitguam.com/', btnLabel: '괌 관광청 공식 페이지',
    note: '괌에는 24시간 공개하는 공식 라이브 캠이 남아 있지 않습니다(호텔·해변 캠 대부분 운영 중단, 2026-11-20 확인). 대신 괌 관광청 공식 홈페이지로 연결합니다 — 해변·투몬 지역 최신 영상과 여행 정보는 공식 페이지에서 확인하세요.'
  },
  {
    id: 'ext-saipan-beach', mode: 'external', name: '사이판 해변 라이브 캠', en: 'Saipan Beach Cam (EarthCam)',
    city: '가라판', country: '북마리아나 제도', cc: 'MP', countryEn: 'Saipan, Northern Mariana Islands', flag: '🇲🇵', region: 'oceania',
    cat: 'nature', src: 'webcam', provider: 'EarthCam · 미국 적십자',
    lat: 15.2160, lon: 145.7180, tz: 'Pacific/Saipan',
    tags: ['사이판', 'saipan', '북마리아나', 'northern mariana islands', '가라판', 'garapan', '마이크로비치', 'micro beach', '해변', 'beach', '괌 근교'],
    url: 'https://www.earthcam.com/world/northernmarianaislands/saipan/',
    note: '미국 적십자 기상 모니터링과 함께 운영되는 해변 라이브 카메라입니다. 임베드가 아닌 EarthCam 공식 페이지에서 시청합니다(좌표는 가라판 앞바다 기준 근사값).'
  },
  {
    id: 'ext-boracay', mode: 'external', name: '보라카이 화이트비치 라이브 캠', en: 'Boracay White Beach Cam (EarthCam)',
    city: '보라카이', country: '필리핀', cc: 'PH', countryEn: 'Boracay, Philippines', flag: '🇵🇭', region: 'asia',
    cat: 'nature', src: 'webcam', provider: 'EarthCam · Red Coconut Beach Hotel',
    lat: 11.9646, lon: 121.9237, tz: 'Asia/Manila',
    tags: ['보라카이', 'boracay', '화이트비치', 'white beach', '칼리보', 'aklan', '필리핀', 'philippines', '해변', 'beach', '리조트'],
    url: 'https://www.earthcam.com/cams/philippines/boracay/',
    note: '레드코코넛 비치호텔에서 화이트비치 모래사장과 일몰을 비추는 라이브 카메라입니다. 외부 임베드가 막혀 공식 페이지로 연결합니다.'
  },
  {
    id: 'ext-doha-katara', mode: 'external', name: '도하 카타라 문화마을 라이브 캠', en: 'Doha Katara Cultural Village (earthTV)',
    city: '도하', country: '카타르', cc: 'QA', countryEn: 'Doha, Qatar', flag: '🇶🇦', region: 'mideast',
    cat: 'street', src: 'webcam', provider: 'earthTV · 카타라 문화마을',
    lat: 25.3603, lon: 51.5265, tz: 'Asia/Qatar',
    tags: ['도하', 'doha', '카타르', 'qatar', '카타라', 'katara', '문화마을', 'cultural village', '도하베이', 'doha bay', '걸프'],
    url: 'https://www.earthtv.com/en/webcam/doha-cultural-village-katara',
    note: '카타라 원형극장 위에서 카타라 해변 산책로와 도하 베이를 비추는 earthTV 라이브 카메라입니다. 공식 페이지에서 재생합니다.'
  },
  {
    id: 'ext-budapest-chainbridge', mode: 'external', name: '부다페스트 다뉴브 · 세체니 연쇄교', en: 'Budapest Danube & Chain Bridge (earthTV)',
    city: '부다페스트', country: '헝가리', cc: 'HU', countryEn: 'Budapest, Hungary', flag: '🇭🇺', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'earthTV',
    lat: 47.4990, lon: 19.0450, tz: 'Europe/Budapest',
    tags: ['부다페스트', 'budapest', '헝가리', 'hungary', '다뉴브', 'danube', '세체니', '연쇄교', 'chain bridge', '부다성', 'buda castle'],
    url: 'https://www.earthtv.com/en/webcam/budapest-chain-bridge',
    note: '다뉴브강과 세체니 연쇄교, 부다성 언덕 방향을 담는 earthTV 라이브 카메라입니다. 공식 페이지에서 재생합니다.'
  },
  {
    id: 'ext-istanbul-beyazit', mode: 'external', name: '이스탄불 보스포루스 · 성소피아', en: 'Istanbul Bosphorus & Hagia Sophia (earthTV)',
    city: '이스탄불', country: '튀르키예', cc: 'TR', countryEn: 'Istanbul, Türkiye', flag: '🇹🇷', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'earthTV · 베야즈트',
    lat: 41.0100, lon: 28.9640, tz: 'Europe/Istanbul',
    tags: ['이스탄불', 'istanbul', '튀르키예', '터키', 'turkey', '튀르키예', '보스포루스', 'bosphorus', '성소피아', 'hagia sophia', '베야즈트', 'beyazit', '톱카프'],
    url: 'https://www.earthtv.com/en/webcam/istanbul-beyazit',
    note: '베야즈트 일대에서 보스포루스와 성소피아·톱카프 방향을 담는 earthTV 라이브 카메라입니다. 공식 페이지에서 재생합니다.'
  }
];
