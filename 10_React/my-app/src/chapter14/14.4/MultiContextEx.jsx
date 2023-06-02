// 개념 설명만을 위한 예제


// 테마 정보를 담은 ThemeContext
const ThemeContext = React.createContext('light');

// 로그인한 유저 정보를 담는 userContext
// const UserContext = React.createContext((
//   name: 'Guest'
// ));

function App(props) {
  const { signedInUser, thema} = props;

  // props로 받아온 값을 context에 제공
  return (
    <ThemeContext.Provider value={thema}>
      <UserContext.Provider value={signedInUser}>
        <Layout />        
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout(params) {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// 여러 Context의 값을 받는 Content 컴포넌트
function Content() {
  return (
    <ThemeContext.Consumer>
      {thema => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} thema={thema} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

// Context API의 한계(단점)?
// 1. 여러개의 데이터를 전역으로 사용하려면 컨텍스트(프로바이더, 컨슈머)를 여러개 만들어야 함
// 2. value값이 바뀌면 프로바이더의 하위 컨슈머 컴포넌트가 전부 다 재렌더링 됨
// 3. Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있음

