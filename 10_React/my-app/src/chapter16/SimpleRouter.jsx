import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './MainPage';
import GamePage from './GamePage';
import PlacePage from './PlacePage';
import HotGamePage from './HotGamePage';
import NewGamePage from './NewGamePage';
import AboutPage from './AboutPage';
import NoMathchPage from './NoMatchPage';

// 0. react-router-dom 설치하기
// npm install react-router-dom

// 1. react-router-dom이란?
// 리액트를 위한 라우팅 라이브러리
// 라우팅: 사용자가 원하는 경로로 보내는 과정
// 라우팅 예시: 깃허브, 네이버 바이브

// 2. 페이지 나누는 법
// 1) 리액트 미사용시
// MPA라서 각 페이지 별 html 만듦
// /list 경로로 접속하면 해당 list.html파일 보내줌

// 2) 리액트 사용시
// SPA라서 index.html 파일 하나만 존재
// List 컴포넌트를 만듦
// /list 경로로 접속하면 기존 컴포넌트 자리에 List 컴포넌트 보여줌

// 3. 라우팅 구성을 위한 기본 컴포넌트
// 1) BrowserRouter, 2) Routes, 3) Route
// 1) BrowserRouter는 웹 브라우저에서 react-router를 사용하여 라우팅 할 수 있도록 해주는 컴포넌트
//    웹 브라우저의 history 객체를 이용해서 경로를 탐색할 수 있게 해줌
// 2) Routes는 여러 개의 Route 컴포넌트를 자식으로 가질 수 있음
// 3) Route는 Routes의 하위 컴포넌트로써 path와 element라는 props를 갖고 있음
//    여기에서 path는 경로를 의미, element는 경로가 일치할 경우 렌더링을 할 리액트 엘리먼트를 의미

// 사용자가 주소창에 새로운 경로를 입력하거나 페이지 내 경로 이동이 일어나게 되면 
// Routes 컴포넌트는 하위 자식으로 갖고 있는 Route 컴포넌트 중에서 현재 경로와 가장 일치하는 경로를 찾아 해당 엘리먼트를 반환
// 그러면 사용자에게 보이는 화면이 바뀌게 되는 것

// 더 많은 기능은 공식 문서 참고
// https://reactrouter.com/

function SimpleRouter(props) {
  return (
    <BrowserRouter>
      <Routes>
        {/* index: index route(여기서는 default child route) */}
        {/* 경로가 없이 루트로 접속하게 되면 index라는 prop을 가진 route로 라우팅 */}
        {/* <Route index element={<MainPage />} /> */}

        {/* /로 접속하면 MainPage 컴포넌트가 렌더링 */}
        {/* /places로 접속하면 PlacePage 컴포넌트가 렌더링 */}
        {/* /games로 접속하면 GamePage 컴포넌트가 렌더링 */}
        <Route path='/' element={<MainPage />} />        
        <Route path='/places' element={<PlacePage />} />        
        <Route path='/games' element={<GamePage />} />   
        {/* 방법1. 서브 경로 설정 */}
        {/* <Route path='/games/hot' element={<HotGamePage /> }/>
        <Route path='/games/new' element={<NewGamePage /> }/> */}

        {/* 방법2. Nested Route 방식 */}
        {/* 위 서브 경로 방식과 차이점: 부모 엘리먼트 + 자식 엘리먼트가 보임 */}
        {/* 부모안에 자식들을 렌더링해 보여줌(어디에 보여줄지는 부모안에서 Outlet 컴포넌트로 지정) */}
        {/* Nested안에 또 Nested 가능 */}
        {/* 활용 예: 헤더, 푸터 사이에 메인 영역 등 */}
        <Route path="/games" element={<GamePage />}>
          <Route path="hot" element={<HotGamePage />}/>
          <Route path="new" element={<NewGamePage />}/>
        </Route>

        {/* URL 파라미터와 쿼리스트링 */}
        {/* URL 파라미터는 주소의 경로에 유동적인 값을 넣는 형태고, 
        쿼리스트링은 주소의 뒷부분에 ? 문자열 이후에 key=value 로 값을 정의하며 & 로 구분을 하는 형태 */}

        {/* 주로 URL 파라미터는 ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용하고, 
        쿼리스트링(Querystring)은 키워드 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션을 전달할 때 사용 
        (꼭 위와 같이 쓰라고 정해진 규칙이 있는것은 아님) 
        URL 파라미터 예시: https://vibe.naver.com/album/9732422 (네이버 바이브)
        쿼리스트링 예시: /articles?**page=1&keyword=react (네이버 검색) */}
        <Route path='/about' element={<AboutPage />} />

        {/* 위에 설정한 라우팅 경로 이외에 경우 */}
        {/* *의 의미는 match anything */}
        <Route path='*'element={<NoMathchPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default SimpleRouter;