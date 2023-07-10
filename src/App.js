
import './App.css';
import NowPlaying from './Component/nowPlaying/NowPlaying';
import Popular from './Component/Popular/Popular';

function App() {

  
  return (
    <div className="header">
      <ul id='main'>
        <li><a href='#'>Now Playing</a></li>
        <li><a href='#'>Popular</a></li>
        <li><a href='#'>Top Rated</a></li>
        <li><a href='#'>Upcoming</a></li>
      </ul>
    <NowPlaying />
    <Popular />
    </div>
  );
}

export default App;
