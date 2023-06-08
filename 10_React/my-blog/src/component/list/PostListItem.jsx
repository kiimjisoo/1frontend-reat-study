import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  &:hover {
    background: lightgrey;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

// 글의 제목만 표시해주는 컴포넌트 제목도 props로받아옴(제목만이 아니라 데이터 다 받아옴)
function PostListItem(props) {
  const { post } = props;

  const navigate = useNavigate(); 
  // 페이지 이동을 위해 /post/2(id값)

  return (
    <Wrapper onClick={() => {
      navigate(`/post/${post.id}`); // id 값은 url파라미터로 사용할 예정 list 아이템 클릭시 
    }}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;