import logo from './logo.svg';
import './App.css';
import ButtonComponent from './exercises/4.1/ButtonComponent.js';
import Ex91 from './exercises/17.05.22/Ex9.1.js';
import React from 'react';


export default class App extends React.Component {

  state = {num : 0, showLoading: true}

  componentDidMount(){
    this.interId = setInterval(() => {
      this.setState((prev) => {
        return { num: prev.num + 1 }
      })
      console.log(this.state.num)
    }, 1000)

  }

  componentDidUpdate(){
    if(this.state.num ===10){
      clearInterval(this.interId);
      this.setState((prev) => {
        return { showLoading : false}
      })

    }
  }
  
      render(){
      return (
          <div>

            {this.state.showLoading && <Ex91 />}
            
          </div>

          );
      }
};






  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>