import React, { useEffect, useState } from "react";
import axios from "axios";

const Ex201 = () => {

    const [result, setResult] = useState([])

    useEffect(() => {
        
        const controller = new AbortController();
        const fetchData = (async () => {
            const response = await axios.get('https://restcountries.com/v3.1/all', {
                signal: controller.signal
            });
            setResult(prev => {
                return JSON.stringify(response.data)
            })

        })();

        return () => {
            controller.abort()
        }

    })

    return (
        <div>
            {result}

        </div>
    )
}

export default Ex201;