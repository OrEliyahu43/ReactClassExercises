import React from "react";
import CustomButton from "./CustomButton";


export default class Parent extends React.Component {

    constructor(props) {
        super(props)
        const colors = ['blue', 'red', 'yellow'];

        this.buttons = colors.map(color => (<CustomButton run={this.logColor} colorName={color} />));
     }

     logColor(color){
        console.log(color)
     }

    render() {
        return (

            <div>
                {this.buttons}
            </div>

        )
    }
}