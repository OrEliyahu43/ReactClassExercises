import React from "react";


export default class Ex81 extends React.Component {

    state = { 'favorite color': "blue" };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ 'favorite color': "yellow" })
        }, 1000);

    }

    componentDidUpdate(){
        const div = document.querySelector('#update');
        div.innerHTML = `the updated favorite color is:${this.state['favorite color']}`
    }
    render() {

        return (
            <div>

                <h1>{this.state["favorite color"]}</h1>
                <div id="update"> div</div>
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