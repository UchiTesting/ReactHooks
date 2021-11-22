import React from "react";

const SearchBar = ({ onQueryChange }) => {


    return (
        <form>
            <input type="text" placeholder="Search items here..." onChange={onQueryChange} style={{ width: "94%", color: "black", backgroundColor: "yellow", margin: "5px" }} />
            <input type="checkbox" id="onlyInStockCheck" onChange={onQueryChange} />
            <label htmlFor="onlyInStockCheck">Only In-Stock</label>
        </form>
    )
}

export default SearchBar;