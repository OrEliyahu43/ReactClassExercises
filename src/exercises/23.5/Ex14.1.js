import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component {

  constructor() {
    super()

    this.inputRef = React.createRef();

  }
    



  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }


  render() {

    return (

      <div>
        <h1>input text</h1>
        <input ref={this.inputRef}></input>

      </div>
    )


  }
}

