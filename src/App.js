import './App.css';
import ResultSet from './components/ResultSet';
import SearchBar from "./components/SearchBar";
import data from './data.json';

const App = () => {
  return (
    <div className="truc">
      <SearchBar />
      <ResultSet data={data} />
      {console.log(data)}
    </div>
  );
}

export default App;
