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
        return( this.state.boxDisapear === false ?
            <div>
            <div class="box"></div>            
            <div class="box2"> </div>            
            <div class="box3"> </div>            
            </div>
            :
            <div></div>

        )


    //    return(
    //        <div>
    //     {!this.state.boxDisapear && <div className="box"></div>}
    //        </div>
    //    )
    }   
}

//------app.js file
// function App() {
//     return (
//       <Ex81 />
//     );
//   };
  
//   export default App;