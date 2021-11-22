import React, { useState, useEffect } from "react";
import CategoryDataTable from "./CategoryDataTable";


const ResultSet = ({ data }) => {
    const [availableCategories, setAvailableCategories] = useState([]);

    useEffect(() => {
        setAvailableCategories([...new Set(data.map(item => item.category))]);
    }, [data]);

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                {availableCategories.map((item) => {
                    const filteredData = data.filter(record => record.category === item);
                    return <CategoryDataTable key={item} categoryName={item} items={filteredData} />
                })}

            </table>
        </React.Fragment>
    )
}

export default ResultSet;