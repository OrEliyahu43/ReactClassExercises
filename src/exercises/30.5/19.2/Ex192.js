import axios from "axios";
import React, { useEffect, useState } from "react";


const Ex192 = () => {

    const [term, setTerm] = useState('');
    const [filterCountry, setFilterCountry] = useState([]);
    const [result, setResult] = useState([])

    const inputHandler = (e) => {
        setTerm(e.target.value)


    }

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            console.log(response.data)
            console.log('CHECKING')
            const resultArray = response.data.map((country) => {
                return country.name.common;
            })
            setResult(resultArray)
        }
        if (!result) {

            fetchData();

        }
        else {
            const filter = [];
            result.forEach((country, index) => {
              
                    // console.log(`country: ${country} term:${term} ${country.includes(term)}` )                
                if (country.toLowerCase().includes(term.toLowerCase())) {
                    
                    filter.push(<div key={index}>{country}</div>)
                }

            })
            setFilterCountry(filter)

        }




    }, [term])

    const insertList = result.map((country, index) => {
        return (
            <div key={index}> {country}</div>
        )


    })

    return (
        <div>
            <label>search:</label>
            <input onChange={(e) => { inputHandler(e) }} value={term}></input>
            <button>click</button>

            <br></br>

            {/* {insertList}           */}
            {term === '' ? insertList : filterCountry}

        </div>
    )


}


export default Ex192