import { useState, useEffect } from 'react';
import './App.css';
import NowPlaying from './Component/nowPlaying/NowPlaying';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM1MjIzMWRlNjEwYjZkN2M5Nzk1NDZhYjM1NDU1YyIsInN1YiI6IjY0YTk2NTgxYjY4NmI5MDEyZjg2NWRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bOjnC9zNEG8WgX52oHxPJv3WakuVHcVby0WvCzopEeE'
      }
    };

    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
    <NowPlaying />
    </div>
  );
}

export default App;
