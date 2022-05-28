import React from 'react';
import API from './API';

const indexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = this.useState("");

    // fetches data
    const fetchData = (e) => {
        e.preventDefault();

        API.getData()
        .then((response) => {
            setResponseData(response.data);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <h1>
                {responseData.title}
            </h1>

            <button onClick={(e) => fetchData(e)} type="button">
                Click me for DATA!
            </button>
        </div>
    )
};

export default indexPage;