import React, { useState, useEffect } from "react";
import CategoryDataTable from "./CategoryDataTable";


const ResultSet = (props) => {
    const [availableCategories, setAvailableCategories] = useState([]);

    useEffect(() => {
        setAvailableCategories([...new Set(props.data.map(item => item.category))]);
        console.log(`Categories found: ${availableCategories}`);
    }, []);



    return (
        <React.Fragment>
            {/* Common Header */}

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                {/* ForEach Section its own table */}

                {availableCategories.map((item) => {
                    const filteredData = props.data.filter(record => record.category === item);
                    console.log(`→ ${item} with data:`, filteredData);
                    return <CategoryDataTable key={item} categoryName={item} items={filteredData} />
                })}
            </table>
        </React.Fragment>
    )
}

export default ResultSet;