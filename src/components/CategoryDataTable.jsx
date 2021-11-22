import React, { useEffect } from "react";
import CategoryHeader from "./CategoryHeader";
import DataLine from "./DataLine";

const CategoryDataTable = (props) => {
    useEffect(() => {
        console.log('CDT => ', props);

    })

    const { categoryName, items } = props;

    return (
        <React.Fragment>
            <tbody id={categoryName}>
                <CategoryHeader name={categoryName} />
                {items.map((item) => {
                    return <DataLine key={item.name} itemData={item} />
                })}
            </tbody>
        </React.Fragment>
    );
}

export default CategoryDataTable;