import './App.css';
import React, { useState, useEffect } from 'react';
import ResultSet from './components/ResultSet';
import SearchBar from "./components/SearchBar";
import data from './data.json';

const App = () => {
  const [query, setQuery] = useState({ text: "", stockOnly: false });
  const [filteredData, setFilteredData] = useState([]);

  const handleQueryChange = (e) => {
    if (e.nativeEvent instanceof InputEvent)
      setQuery({ text: e.target.value, stockOnly: query.stockOnly });

    if (e.nativeEvent instanceof PointerEvent)
      setQuery({ stockOnly: e.target.checked, text: query.text });
  }

  useEffect(() => {
    (query.text === "")
      ? setFilteredData(data.filter(record => !(!record.stocked && query.stockOnly)))
      : setFilteredData(data.filter(record => !(!record.stocked && query.stockOnly) && record.name.includes(query.text)));
  }, [query]);

  return (
    <div className="truc">
      <SearchBar onQueryChange={handleQueryChange} />
      <ResultSet data={filteredData} />
    </div>
  );
}

export default App;
