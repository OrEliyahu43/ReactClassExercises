import React from "react";
import './Ex8.2.css'

export default class Ex82 extends React.Component{

    state = {boxDisapear:false}

    componentDidMount() {
        setTimeout(() => {
            this.setState({boxDisapear: true })
        }, 4000);

    }


    render(){
        // return( this.state.boxDisapear === false ?
        //     <div class="box"> </div>              another way
        //     :<div></div>
       return(
           <div>
        {!this.state.boxDisapear && <div className="box"></div>}
           </div>
       )
    }   
}

//------app.js file
// function App() {
//     return (
//       <Ex81 />
//     );
//   };
  
//   export default App;