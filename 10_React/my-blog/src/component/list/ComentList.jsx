import React from 'react';
import styled from "styled-components";
import ComentListItem from './ComentListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// map()함수를 사용해 CommentListItem을 반복 렌더링하는 컴포넌트
function ComentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {/* Quiz: 반복 렌더링 */}
      {comments.map((commment) => {
        return (
          <ComentListItem key={comment.id} comment={comment} />
        );
      })}
    </Wrapper>
  );
}

export default ComentList;