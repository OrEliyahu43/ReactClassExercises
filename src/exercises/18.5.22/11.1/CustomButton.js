import React from "react";

export default class CustomButton extends React.Component {
    click = () => {
        this.props.run(this.props.colorName)
    }

    render(){
        return(
            <div>
                <button onClick={this.click} style={{backgroundColor:this.props.colorName}}>button</button>
            </div>
        )
    }



}