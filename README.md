# 월드캠 웨더 (WorldCam Weather)

**42개국 141곳(임베드) + 공식 링크 10곳**의 관광지·도로·해변·스키장 **공식 라이브 카메라**와 그 장소의 **현지 실시간 날씨**를 한 화면에서 비교하는 정적 웹 서비스입니다. 국가별 디렉토리(국기 + 국가명 + 카메라 수)에서 나라를 골라 볼 수 있습니다.

- 라이브: https://worldcam-live.github.io/
- 저장소: `worldcam-live/worldcam-live.github.io` (Organization `worldcam-live`, GitHub Pages · main `/`)
- 구성: `index.html` + `assets/{style.css,app.js,cameras.js}` (빌드 도구 없음, GitHub Pages 정적 배포)

## 기능

| 기능 | 구현 |
|---|---|
| 국가별 보기 | `cc`(ISO 국가 코드)로 자동 묶인 국가 디렉토리 칩 — 국기 + 국가명 + 카메라 수(42개국), 클릭 시 해당 국가만 표시 |
| 지역·분류 필터 | 아시아 / 유럽 / 아메리카 / 오세아니아 / 중동 / 아프리카, 관광지·거리 / 도로·교통 / 해변·스키장·산 |
| 한·영 검색 | 국가명·도시명·장소명·채널명·태그 실시간 AND 검색 (`일본`, `도쿄`, `시부야`, `Japan`, `뉴욕` …) |
| 현지 날씨 | 카메라 좌표 기준 [Open-Meteo](https://open-meteo.com/) 현재값(기온·날씨 코드·풍속·습도·체감·낮/밤·현지 시각)을 10분마다 갱신 |
| 수신 상태 자동 배지 | YouTube IFrame API로 메타데이터를 확인해 `LIVE` / `오프라인`(임베드 제한·비공개·삭제) / `방송 종료`(다시보기)를 카드에 표시. 화면에 들어온 카드만 순차 확인하고 결과를 5분간 브라우저에 캐시 |
| 카메라 제보 | 모달에서 도시·URL·분류·설명 입력 → `mailto:` 발송 또는 내용 복사 |
| 광고 영역 | 현재 화면에는 광고 박스를 두지 않습니다. 애드센스 승인 뒤 `assets/style.css`의 `.ad-slot` 규칙과 `index.html`의 슬롯 마크업을 되살려 넣으면 됩니다. |

## 영상·약관 원칙

1. 영상은 제공 채널이 **YouTube에서 임베드를 허용한 라이브만** 공식 iframe 플레이어로 재생합니다. 모든 임베드는 개인정보 보호 모드인 `youtube-nocookie.com` 기준입니다(상세 모달·수신 상태 확인 플레이어 공통).
2. **스트림 URL 추출·녹화·재송출·자가 호스팅 금지.** 영상을 저장하지 않습니다.
3. 외부 임베드가 막혔거나 재배포가 금지된 공공·교통 CCTV(서울 TOPIS, 부산시설공단 교통정보, 일본 JARTIC, 마카오 DSAT)와 캠 운영사 페이지(EarthCam 사이판·보라카이, earthTV 도하·부다페스트·이스탄불)는 **공식 페이지 바로가기**로만 연결합니다.
4. 목록화하는 정보는 장소명·도시·좌표·출처 등 사실 정보이며, 출처를 카드마다 표기합니다.
5. 권리자·운영기관 삭제 요청: **wojin826@naver.com** (사이트 내 `약관 · 권리자 삭제 요청` 모달에서도 안내)

## 카메라 추가하기

`assets/cameras.js`의 배열에 항목을 추가합니다.

```js
{
  id: 'unique-id', yt: 'YOUTUBE_VIDEO_ID',   // 외부 링크 항목은 mode:'external' + url
  name: '장소명', en: 'English name',
  city: '도시', country: '국가', countryEn: 'City, Country', flag: '🇯🇵',
  cc: 'JP', region: 'asia|europe|americas|oceania|mideast|africa', cat: 'street|traffic|nature',
  src: 'broadcaster|public|webcam|local|creator', provider: '채널·기관명',
  lat: 00.0000, lon: 000.0000, tz: 'Asia/Tokyo',
  tags: ['검색어', 'english'],
  note: '한 줄 설명'
}
```

추가 전 확인: ① 현재 라이브인지(YouTube 라이브 검색 `sp=EgJAAQ`로 후보 수집) ② 채널이 임베드를 허용하는지(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ID&format=json` → 200, 401이면 임베드 불가) ③ 약관상 링크 목록화·임베드가 금지되지 않았는지 ④ 배포 후 실제 페이지에서 `LIVE` 배지가 뜨는지.

## 로컬 확인

정적 파일이라 `index.html`을 브라우저로 열면 되지만, YouTube 임베드는 `http(s)` 출처에서만 정상 동작하므로 간단한 서버 사용을 권장합니다.

```bash
python3 -m http.server 8000
```
