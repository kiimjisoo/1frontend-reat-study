import React from 'react';
import styled from 'styled-components';
const MovieItemWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  .rank {
    font-weight: 500;
  }
  .name {
    font-weight: 600;
    color: royalblue;
  }
`;

function MovieItem({ movie }) {
  const { rank, movieNm, openDt } = movie;
  console.log(movie);
  return (
    <MovieItemWrapper>
      <p className='rank'>랭킹: {rank}</p>
      <p className='name'>제목: {movieNm}</p>
      <p>개봉일: {openDt}</p>
    </MovieItemWrapper>
  );
}

export default MovieItem;