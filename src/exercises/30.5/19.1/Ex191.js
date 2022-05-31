import React, { useEffect, useState } from "react";
import axios from "axios";

const Ex191 = () => {

    const [result, setResult] = useState([]);

    useEffect(() => {
        console.log('checking')
        const fetchData = async () => {
            const response = await axios.get('https://swapi.dev/api/films/1/');
            console.log(response.data);
            setResult(response.data);
        }

        fetchData();

    })


    return (
        <div>
            <h1>The name of the movie is:
                {result.title}<br>
                </br>
                the name of the director is:
                {result.director}
            </h1>

        </div>
    )

}


export default Ex191;
