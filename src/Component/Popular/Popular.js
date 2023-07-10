import React, { useState, useEffect, useRef } from 'react';
import './Popular.css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM1MjIzMWRlNjEwYjZkN2M5Nzk1NDZhYjM1NDU1YyIsInN1YiI6IjY0YTk2NTgxYjY4NmI5MDEyZjg2NWRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bOjnC9zNEG8WgX52oHxPJv3WakuVHcVby0WvCzopEeE'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => setPopular(data.results))
      .catch(err => console.error(err));
  }, []);

  const movieContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (movieContainerRef.current) {
      movieContainerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };

  const handleScrollLeft = () => {
    if (movieContainerRef.current) {
      movieContainerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed ....
    }
  };

  return (
    <div className="Popular">
      <h1>Popular</h1>
      <div className="movie-container" ref={movieContainerRef}>
        {popular.map(movie => (
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
      <div className="scroll-buttons">
        <button className="scroll-button" onClick={handleScrollLeft}>
          &lt;
        </button>
        <button className="scroll-button" onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Popular;
