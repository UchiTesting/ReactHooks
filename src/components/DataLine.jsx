import React from "react";

const DataLine = (props) => {
    const { name, price, stocked } = props.itemData;

    return (
        <tr>
            <td className={(stocked) ? "" : "notInStock"}>{name}</td>
            <td>{parseFloat(price) === 0.00 ? "Free!" : `${price}`}</td>
        </tr>
    )
}

export default DataLine;