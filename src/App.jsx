import SearchBar from './Components/SearchBar';
import Data from './Data.json';

function App() {
  return (
    <div className='App'>
      <SearchBar placeholder='Enter A Book Name...' data={Data} />
    </div>
  );
}

export default App;
