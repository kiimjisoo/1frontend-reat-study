import { createGlobalStyle } from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";





// 글로벌(공통)스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  *{
    box-sizing: inherit;
  }

  .cursur-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />  
      {/* 부트스트랩 연습 */}
      {/* 1) 리액트 부트스트랩 */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* 2) 기존 부트스트랩 */}
      {/* <button type="button" className="btn btn-primary">Primary</button> */}

      {/* 헤더 영역: 상단 내비게이션 바 */}
      {/* <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#">지수 샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>홈</Nav.Link>
              <Nav.Link>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header> */}
      {/* Quiz: Header 컴포넌트로 추출 및 Outlet을 활용하여 라우팅 구성해보기 */}
      {/* src/pages/Header.js */}
        <Routes>
          <Route path="/" element={<Header />}>
            {/* idex: index route(여기서는 default child route) */}
            <Route index element={<Main />} />
            {/* 상품별 상세페이지 여러 개를 라우팅 하려면? URL 파라미터 사용 */}
            {/* /detail/1로 접속하면 productID에 1이 담김 */}
            <Route path="/detail/:productId" element={<ProductDetail />} />
          </Route>
        </Routes>  
      
    </>
  );
}

export default App;

// ##Bootstrap
// 레이아웃을 복붙 식으로 편하게 개발 가능한 CSS, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/

// ## 패키지 설치하기styled-components
// npm install react-bootstrap bootstrap react-router-dom @reduxjs/toolkit react-redux axios
