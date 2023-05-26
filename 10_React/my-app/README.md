# React App 구조 살펴보기
- package.json:
  패키지 정보를 관리
  npm install로 패키지 설치 시 기록됨
  설치된 패키지는 node_modules 폴더에 추가됨(git에 올리지 않기때문에.. gitignore에 자동으로 추가되어있음)
-package-lock.json:
  node_modules 구조나 package.json이 수정되고 생성될 때 당시 의존성에 대한 정확하고 구체적인 정보를 기록하고 자동으로 생성됨
  (중요) git에 올라가야 됨!!!
-App.js:
  실제 보여질 컴포넌트
  사용 예> header-section-main-footer 또는 라우터 작성  
-index.js:
  Root DOM Node 에 App 컴포넌트를 렌더링  
-index.html:
  콘텐츠가 렌더링 될 단 하나의 템플릿 페이지
  Root DOM Node를 갖고 있음



  myapp react npm install -enter => ndoe modules 깔기(git에 안 올라감)
              npm start -enter -> react script start

state사용자가 만듦 직접 변경x

Hook
=함수 (use로 시작)

