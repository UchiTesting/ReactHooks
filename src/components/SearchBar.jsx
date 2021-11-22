import React from "react";

const SearchBar = () => {


    return (
        <form>
            <input type="text" placeholder="Search items here..." style={{ width: "94%", backgroundColor: "yellow", margin: "5px" }} />
            <input type="checkbox" id="onlyInStockCheck" />
            <label htmlFor="onlyInStockCheck">Only In-Stock</label>
        </form>
    )
}

export default SearchBar;