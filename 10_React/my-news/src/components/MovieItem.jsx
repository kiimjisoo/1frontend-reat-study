import React from 'react';

function MovieItem({ movie }) {
  const { rank, movieNm, openDt } = movie;
  // console.log(movie);
  return (
    <div>
      <p>{rank}</p>
      <p>{movieNm}</p>
      <p>{openDt}</p>
    </div>
  );
}

export default MovieItem;