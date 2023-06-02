// 개념 설명만을 위한 예제
function Appp(props) {
  return <Toolbar thema="dark"/>;
}
function Toolbar(props) {
  // Toolbar 컴포넌트는 테마 props를 받아서 ThemedButton에 전달해야함
  // 앱 안의 모든 버튼이 테마를 알아야 한다면 이 정보를 일일이 넘기는 과정은 비효율적임
  // 특히 트리의 구조가 깊어질수록 매우 비효율적
  // 이런 과정을 Prop Drilling 이라고 부름(프로퍼티 내리꽂기)
  
  return (
    <div>
      <ThemedButton thema={props.thema}/>
    </div>
  );
}
function ThemedButton(props) {
  return <Button thema={props.thema}/>;
}