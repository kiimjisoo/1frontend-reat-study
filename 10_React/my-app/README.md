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


state같은 값 쓸려면 부모에서 Props받아옴
조상 컴포넌트에 state 옮김
남은 하위 컴포넌트에 props로 state넘김

State 끌어올리기 
여러 컴포넌트 사이에서 state공유

컴포넌트 합성
children 사용

context


패키지 다운로드 
npm install 패키지 이름

chapter7 7.5 usercallback - 최적화시 사용

자동완성 안 먹을땐 import 직접 써야함
백틱내부는 css똑같이 쓸 수 있음
vscode-styled-components 없으면 글자색 변동 없음
백틱내에서 &:hover{} &=자기 자신

컴포넌트를 따로 만들어도 되고 아니면 내부에 class로 만들어도 됨 
const TodoTemplateWrapper = styled.div`
  width: 512px;

  컴포넌트를 따로 만들어도 되고 아니면 내부에 class로 만들어도 됨 
  자손을 의미 &. 생략 
  &.app-title {
    background: #22b8cf;
  }
  .content {
    background: white;
  }
`;
<!-- <div className='app-title'>일정 관리</div> -->
=
const AppTitle = styled.div`
  background: #22b8cf;
`}
<!-- <AppTitle>일정 관리</AppTitle> -->
취향차이인데 class 사용하는게 가독성 좋음


https://react-icons.github.io/react-icons/search?q=Mdadd
에서 원하는 아이콘 찾고 import 복붙
// Tip: as를 사용하여 별칭을 붙여 사용하면 추후 아이콘 바꿀 때 한곳만 바꾸면 되서 편함!
ex)MdAdd as AddIcon(별칭)



------- my-todo -------

방법1---
    const copyTodos = [...todos]; 배열 복사
    const targetIndex = todos.findIndex((todo) => todo.id === id);
id에 2가 들어오면 배열에서 id값이 2를 찾음 배열 순서가1번째면 targetIndex에는 1이 들어감
    copyTodos.splice(targetIndex, 1); targetIndex = 1 배열의 1번 요소 1개 제거
    setTodos(copyTodos); 값 반환
    [todos] 의존성 배열에 넣어줘야 함

방법 - 2
  불변성을 지키면서 배열의 요소를 제거해야할 때 filter() 활용
    setTodos(todos => todos.filter((todo) => todo.id !== id));
    id 값 일치하지 않는거 찾아서 그 값만 제외해서 새 배열에 담음
  선택한거 제외 나머지를 새 배열에 추가


체크박스 토글
  방법 - 1
  const copyTodos = [...todos];
  const target = todos.find((todo) => todo.id === id);
  배열에서 id 값 찾아서 target
  target.checked = !target.checked; 
  checked 반대

  const targetIndex = todos.findIndex((todo) => todo.id === id);
  id값 일치하는거 찾아서(findIndex) targetIndex에 넣음
  copyTodos[targetIndex] = target;
  copyTodos가 변경 전 true 면 false로 바뀐 값을 넣어줘야 함
  setTodos(copyTodos);


    방법 - 2
    불변성을 유지하면서 배열의 특정 요소를 업데이트 해야할 때 map() 활용
    setTodos(todos => todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));


쿼리스트링 key-value & key-value


