import React from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "1px solid gray",
  },
  greeting: {
    marginRight: 8
  }
};


function Toolbar(props) {
  const { isLoggedIn, handleClickLogin, handleClickLogout} = props;
  // landingpage에서 함수 3개 받아옴

  return (
    <div style={styles.wrapper}>
      {/* Quiz:
        로그인/로그아웃 버튼을 누를때마다 인사말이 나오도록 && 로 조건부 렌더링
        버튼도 로그인/로그아웃 버튼이 바뀌도록 삼항 연산자로 조건부 렌더링
      */}
      {/* isLoggedIn 값에 따라 조건부 렌더링 처리 */}

      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>} 
      {/* isLoggedIn 값 true -> <span style={styles.greeting}>환영합니다!</span>남음
          false -> -    */}

      {isLoggedIn
      ? <button type='button' onClick={handleClickLogout}>로그아웃</button>
      : <button type='button' onClick={handleClickLogin}>로그인</button>
      }
{/*
    isLoggedIn 초기값 false > 로그인 버튼만 보임
    isLoggedIn true > 환영합니다 / 로그아웃 버튼 보임
 */}
    </div>
  );
}
export default Toolbar;

// 정리:   /&& 보일지 말지 삼항 연산자(? :) 둘 중 뭘 보일지/
// 논리 연산자(&&)와 삼항 연산자(? :)를 이용한 조건부 렌더링은 매우 많이 쓰임
// 동적인 UI만드는 3step
// 1. HTML/CSS로 미리 마크업/디자인 완성
// 2. UI 현재 상태를 state로 저장
// 3. 조건문으로 state에 따라 UI가 어떻게 보일지 작성