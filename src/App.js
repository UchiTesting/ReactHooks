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
      setQuery({ ...query, text: e.target.value });

    if (e.nativeEvent instanceof PointerEvent || e.nativeEvent instanceof MouseEvent)
      setQuery({ ...query, stockOnly: e.target.checked });
  }

  useEffect(() => {
    (query.text === "")
      ? setFilteredData(data.filter(record => !(!record.stocked && query.stockOnly)))
      : setFilteredData(data.filter(record => !(!record.stocked && query.stockOnly) && record.name.toLowerCase().includes(query.text.toLowerCase())));
  }, [query]);

  return (
    <div className="truc">
      <SearchBar onQueryChange={handleQueryChange} />
      <ResultSet data={filteredData} />
    </div>
  );
}

export default App;
