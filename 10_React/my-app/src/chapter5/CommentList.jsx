import Comment from "./Coment";

// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 배열에 담기
const comments = [
  {
    name:'킴지수',
    content:'안녕하세요, 김지수입니다'
  },
  {
    name:'유재석',
    content:'리액트 배워요~!'
  },
  {
    name:'이미주',
    content:'저도 배우고 싶어요'
  },
  {
    name:'이이경',
    content:'저도 배우고 싶어요'
  }
];

// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList() {
  return (
    <div>
      {/* Quiz: props를 추가하여 name과 content값 전달 */}
      
      {/* <Comment 
        name="김지수"
        content="제가 만든 첫 컴포넌트"
        />
      <Comment
      name="정보영"
      content="니가 만든 첫 컴포넌트" 
      />
      <Comment
      name="엄예린"
      content="니가 만든 두번째 컴포넌트" 
      /> */}
      {/* 배열을 동적으로 랜더링해야 할 때에는 배열의 map()함수를 사용
      (map(): 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦)
      앞으로 리액트에서 배열을 동적으로 렌더링해야 할 때는 map()함수를 사용하여
      일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨 */}
      {comments.map((comment, index) => {
        return (
          <Comment name={comment.name} content={comment.content} />
        );
      })}

      {/* map() 함수의 결과 */}
      {/* {
        const array = [킴지수, 안녕하세요, 김지수입니다, 유재석, 리액트 배워요~!, 이미주, 저도 배우고 싶어요,  이이경, 저도 배우고 싶어요];
      } */}
    </div>
  );
}

export default CommentList;