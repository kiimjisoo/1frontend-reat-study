import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";
import MovieItem from './MovieItem';



  const sampleMovie = {
    rank: '랭킹',
    movieNm: '제목',
    openDt: '상영일'
  }

function MovieList() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
console.log(movies);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101');

        console.log(response.data);

        setMovies(response.data.movies);
      } catch(error) {
        console.error(error);
      }
      setLoading(false)
    };
    fetchData();
  }, [])

  return (
    <div>
      {
        movies && movies.map((movie) => {
          return(
            <MovieItem key={movies.rank} movie={movie} />
          );
        })
      }
    </div>
  );
}

export default MovieList;