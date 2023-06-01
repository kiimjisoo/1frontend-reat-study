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



-chapter9_toolbar

falsy면 && 뒤에 있는 표현식은 건너뜀
falsy 표현식이 반환된다는 것에 주의(falsy 표현식에 따라 화면에 출력될 수도 있음)

/&& 보일지 말지 삼항 연산자(? :) 둘 중 뭘 보일지/
논리 연산자(&&)와 삼항 연산자(? :)를 이용한 조건부 렌더링은 매우 많이 쓰임
동적인 UI만드는 3step
1. HTML/CSS로 미리 마크업/디자인 완성
2. UI 현재 상태를 state로 저장
3. 조건문으로 state에 따라 UI가 어떻게 보일지 작성

-chapter10_ListKey
Key = 리스트의 아이템들을 구분하기 위한 고유한 값


ket값이 없을때 
return <li>{item}</li>
추가된 아이템뿐만 아니라 전체가 다 DOM에 업데이트 됨 (비효율적)
고유한값이 아니면 중복시 전체 업데이트 함

return <li key={index}>{item}</li>;
가장 지양하는 방법
데이터 추가를 앞에 두면 순번이 밀려 전체 업데이트 함

-chapter10_AttendanceBook

{students.map((student, index) => {
return <li key={student.id}>{student}</li>

에러나는 이유는 {name:김지수}를 불러옴 
{student}이 아닌 {student.name}으로 써야 {김지수}옴

-chapter11_NameForm
form태그 사용시 꼭 안에 input태그 있어야함
onChange={e => handleChange(e)
onChange 이벤트 객체를 e로 전달(받는게 1개라면 e생략 가능)

==useRef==
참조를 사용하기 위해
특정DOM선택시 사용
-chapter7_TextInputWithFocusButton

e.target //현재 이벤트가 발생한 대상



-chapter11_SignUp
e.preventDefault(); submit은 기본적으로 새로고침이 일어남 그거 막기 위해 넣어줌
구조분해 할당 안 하면 매번 접근시 불편함 (ex)input.name)
방법1
react는 얕은 비교를 하기때문에 새로운 주소(copy)를 만들어야함
스프레드 연산자 사용해 복사
set함수에 넣어줌
방법2
set함수 내에서 처리하는 방법
set함수 내 새로운 state가 들어와야 함
setInputs(함수 넣음(매개변수명은 내마음대로 이전 state값을 모두 받아옴 inputs) => ({
  return        
  ...inputs, // 기존의 inputs값을 복사한 뒤
  [name]: value // name 값을 키로 가진 속성의 값을 value로 설정
}))



packagejson 부터 확인



onChange={handleNameChange} 변경 감지




