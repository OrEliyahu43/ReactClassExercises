import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Ex201 from './exercises/31.5/Ex201';
  const App = () => {

    const [show,setShow] = useState(true);

    const clickHandler = () => {
      setShow(prev => {
        return !prev;
      })
    } 

    return (

    <div className='App-header'>
      <button onClick={e => { clickHandler(e) }}>show/data</button>
      {show &&<Ex201 />}

    </div>
  )
}

export default App


