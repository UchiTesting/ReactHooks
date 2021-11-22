import React, { useState, useEffect } from "react";
import CategoryDataTable from "./CategoryDataTable";


const ResultSet = (props) => {
    const [availableCategories, setAvailableCategories] = useState([]);

    useEffect(() => {
        setAvailableCategories([...new Set(props.data.map(item => item.category))]);
    }, []);



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
                    const filteredData = props.data.filter(record => record.category === item);
                    return <CategoryDataTable key={item} categoryName={item} items={filteredData} />
                })}

            </table>
        </React.Fragment>
    )
}

export default ResultSet;