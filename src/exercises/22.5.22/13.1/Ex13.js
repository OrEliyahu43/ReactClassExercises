import React from "react";
import { data } from "./data";
import NamesList from "./NamesList";
import { getDataName, getBefore90 } from "./utilize";
import Card from './Card.js'

export default class Ex131 extends React.Component {
    state = {
        namesData: [],
        before1990Data: [],
        namesJSX: '',
    }




    componentDidMount() {
        this.setState({
            before1990Data: getBefore90(),

            namesData: getDataName()
        }

        )

    }
  



    render() {

        return (
            <div>
                <NamesList  names={this.state.namesData}/>
                <Card before={this.state.before1990Data}/>
            </div>
        )
    }
}