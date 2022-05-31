import React, { useEffect, useState } from "react";
import axios from "axios";
const Ex193 = () => {

    const [term, setTerm] = useState('');
    const [query, setQuery] = useState('hooks');
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSearch = (e) => {
        setQuery(term)


    }

    useEffect(() => {
        const fetchData = async () => {
            try {

                const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query={${query}}`)
                setResult(data.hits)
            } catch (e) {
                console.log('error from server')
                console.log(e)
                setError(e.message)
            }
        }

        fetchData()

        console.log('problem')

    }, [query])

    const insertData = result.map((hit, index) => {

        return <div key={index}><a href={hit.url}>{hit.title}</a></div>
    })


    return (
        <div>
            <h1>Alogolia search</h1>
            <label>Search</label>
            <input onChange={e => { handleChange(e) }} value={term}></input>
            <button onClick={e => { handleSearch(e) }}>search</button>
            <br></br>
            {insertData}
            {error && <h1>{error} </h1> }
        </div>
    )
}

export default Ex193