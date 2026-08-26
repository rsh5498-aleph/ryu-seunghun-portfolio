# 류승훈 포트폴리오

기존 `index.html`을 바탕으로 정리한 독립 실행형 정적 웹 프로젝트입니다.

## 실행

Node.js가 설치된 환경에서 프로젝트 폴더를 열고 다음 명령을 실행합니다.

```bash
npm start
```

브라우저에서 `http://127.0.0.1:4173`을 엽니다.

## 점검

```bash
npm run check
```

증빙 문서와 이미지가 모두 연결되어 있는지 확인합니다.

## 구조

- `index.html`: 포트폴리오 화면, 스타일, 상호작용
- `evidence/documents`: 포트폴리오 제작·검증 문서
- `evidence/images`: 화면 캡처
- `server.js`: 추가 설치가 필요 없는 로컬 서버
- `check.js`: 프로젝트 파일 연결 검사

