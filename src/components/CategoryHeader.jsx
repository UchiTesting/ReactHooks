import React from "react";

const CategoryHeader = ({ name }) => {
    return (
        <tr>
            <td colSpan="2" className="categoryHeader">{name}</td>
        </tr>
    )
}

export default CategoryHeader;