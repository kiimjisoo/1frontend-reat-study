import { useState } from "react";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 방법1. 함수 선언문
  // function handleClick() {
  //   setIsToggleOn(!isToggleOn);
  // }

  // 방법2. 화살표 함수
  // () => {}
    const handleClick = () => {
      setIsToggleOn(!isToggleOn);

      
      // (참고) state Merge 테스트
      // setIsToggleOn(!isToggleOn);
      // setIsToggleOn(!isToggleOn); // 제일 마지막 set함수로 병합됨
      // setIsToggleOn(isToggleOn => !isToggleOn);
      // setIsToggleOn(isToggleOn => !isToggleOn); // 이전 (state)를 받아와서 동기적으로 처리
    };
  return (
    // 이벤트는 카멜케이스(camelCase)를 사용
    // 함수(이벤트 핸들러)를 바로 전달하면 됨
    <button type="button" onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}

export default Toggle;