
import './App.css';
// import your arrays here
import ColorList from './ColorList.js';
import { colors } from './ColorData.js';
import CatsList from './CatsList.js';
import { cats } from './CatsData.js';

function App() {
  return (
    <div className="App">
      <ColorList colors={colors} />
      <CatsList cats={cats} />
    </div>
  );
}

export default App;
