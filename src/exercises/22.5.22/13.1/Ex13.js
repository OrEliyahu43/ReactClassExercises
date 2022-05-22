import React from "react";
import { data } from "./data";

export default class Ex131 extends React.Component {
    state = {
        namesData : '',
        before1990Data : '',
        namesJSX: '',
    }

    getDataName = () => {

        const names = data.map(obj => obj.name)
        this.setState({namesData: names})
    }

    getBefore90 = () => {
        const before = data.map(obj => {
            const year = obj.birthday.split('-')[2];
            if(parseInt(year)<1990)
            return obj;
        })
        this.setState({before1990Data: before})
    }

    componentDidMount(){
        this.getBefore90()
        this.getDataName();


    }
    drawName = () => {
        const names = this.state.namesData.map((name, index) =>{
            return <div key={index}>{name}</div>
            
        } )
            this.setState({namesJSX : names})
    }




    render(){

        return(
            <div></div>
        )
    }
}