javascript.info



패키지 설치
npm install react-router-dom styled-components@5.3.11
package.json에서 확인


export
파일 1개내에서 여러번 사용 가능
import시 {}로 받아와야 하고 네임이 일치해야 됨

export default
파일 1개당 하나만 사용 가능
import 시 변수명을 내가 지을 수 있음


공통 스타일 먼저
1. 버튼

  Q.props로 받아온 title이 있을때는 title값을 보여주고 아니면 기본값 '버튼'
  {title || '버튼'} false로 취급받는 undefinde 오면 '버튼'

  Q.클릭했을 때 어떤 동작을 할것인가는 상위 컴포넌트에서 받아옴
  onClick={onClick}  == onClick={() => {}}  onClick함수를 props로 받아옴

2. textinput

  textarea 여러줄 쓸 때

  height, value, onChange 받아옴

3. PostListItem 글의 제목만 표시해주는 컴포넌트

  const { post } = props;
    제목도 props로받아옴(제목만이 아니라 데이터 다 받아옴)
    id만 받아오지 않고 post전체 받아옴

  const navigate = useNavigate(); 
    페이지 이동을 위해 /post/2(id값)

 
    <Wrapper onClick={() => {
      navigate(`/post/${post.id}`); 
        id 값은 url파라미터로 사용할 예정 list 아이템 클릭시 주소에 id값 할당 
   
4. postlist
posts로 리스트 전체를 받아옴

map()함수를 사용해 PostListItem을 반복 렌더링 하는 컴포넌트
map 고유한속성을 가진 key값들어가야함

5.comentlistitem
comments안의 coment

5.postlistitem

map함수를 사용해 CommentListItem을 반복 렌더링하는 컴포넌트
{comments.map((commment) => {
        return (
          <ComentListItem key={comment.id} comment={comment} />

6.mainpage
1에서 만든 버튼 props로 넘겨줘야 함
onclick함수보내줘야 함
작성하기 버튼 누르면 페이지 바뀌기 위해 onclick에 navigate 씀

7.app.js

8.PostViewPage


9.  PostWritePage
