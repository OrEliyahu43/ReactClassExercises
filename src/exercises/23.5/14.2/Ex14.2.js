import React from "react";


export default class Ex142 extends React.Component {

    constructor(){
        super()
        this.textareaRef = React.createRef()
    }


    copyFunc = () => {
        this.textareaRef.current.select()
        document.execCommand("copy");


    }
    render(){

        return(
            <div>
                <h1>what is the meaning of life?</h1>
                <textarea ref={this.textareaRef}>  </textarea>
                <button onClick={this.copyFunc}>copy</button>
            </div>
        )
    }
}