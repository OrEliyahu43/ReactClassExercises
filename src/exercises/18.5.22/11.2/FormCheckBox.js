import React from "react";


export default class FormCheckBox extends React.Component {



    render() {

        return (
            <form >
                <label>
                    Name:
                    <input type="checkbox" checked="true" />
                </label>
                <label>
                    Name:
                    <input type="checkbox" checked="true" />
                </label>
        
                <label>
                    Name:
                    <input type="checkbox"  />
                </label>
        
                <label>
                    Name:
                    <input type="checkbox" />
                </label>
        
            </form>
        )

    }


}