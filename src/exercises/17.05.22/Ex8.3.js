import React from "react";
import './Ex83.css'

export default class Ex83 extends React.Component{
  
    // constructor(props){
    //     super(props)
    // }
    state =  {color: "blue",changes:0};
    generateColor(){
        // if(this.state.changes === 5){
        //     const box = document.querySelector('.box')
        //     box.style.borderRadius = '50%'
        // }

        const arr = ['blue','red','yellow','teal','green','black','gray'];

            return arr[Math.floor(Math.random()*arr.length)];

    }

    componentDidMount() {
        setInterval(() => {
            const newColor = this.generateColor();
            // if()
            this.setState({color:newColor,changes: this.state.changes + 1})
        }, 500);

    }


    render(){
       return( 
       <div>
           <div className="box" style={{backgroundColor: this.state.color , borderRadius : this.state.changes>5 ? '100%': '0%'}}></div>
        </div>
       )
    }


}

// , borderRadius : this.state.changes>5 ? '100%': '0%'


//------app.js file
// function App() {
//     return (
//       <Ex81 />
//     );
//   };
  
//   export default App;