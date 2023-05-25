function Profile(props) {
  console.log(props);
  // props.name = '고라니'; // props는 전달받은 값 변경 불가 \\ props는 객체이다
  // props는 읽기 전용이다 변경 불가
  
  return (
    <div>
      <h1>사용자 프로필(조회수: {props.viewCount})</h1>
      <h2>이름: {props.name}</h2>
      <h2>자기소개: {props.introduction}</h2>
    </div>
  );
}
export default Profile;