import './App.css';
// import your arrays here
import ColorList from './ColorList.js';
import { colors } from './ColorData.js';
import CatsList from './CatsList.js';
import { cats } from './CatsData.js';
import AmpsList from './AmpsList.js';
import { amps } from './AmpsData.js';
import AlbumsList from './AlbumsList.js';
import { albums } from './AlbumsData.js';

function App() {
  return (
    <div className="App">
      <ColorList colors={colors} />
      <CatsList cats={cats} />
      <AmpsList amps={amps} />
      <AlbumsList albums={albums} />
    </div>
  );
}

export default App;
