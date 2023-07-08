import React, { useState, useEffect } from 'react';
import './NowPlaying.css';

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM1MjIzMWRlNjEwYjZkN2M5Nzk1NDZhYjM1NDU1YyIsInN1YiI6IjY0YTk2NTgxYjY4NmI5MDEyZjg2NWRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bOjnC9zNEG8WgX52oHxPJv3WakuVHcVby0WvCzopEeE'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="now-playing">
      <h1>Now Playing Movies</h1>
      {movies.map(movie => (
        <div key={movie.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Vote Average: {movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NowPlaying;
