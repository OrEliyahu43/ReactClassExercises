import React from "react";
import axios from "axios";


export default class ChuckJoke extends React.Component {

    state = {
        randomJoke: '',
        categories: '',
        jokeByCat: ''

    }

    componentDidMount() {
        this.categoryListJoke();
    }

    getRandomJoke = async () => {
        const joke = await axios.get('https://intense-mesa-62220.herokuapp.com/api.chucknorris.io/jokes/random');
        this.setState({ randomJoke: joke.data.value });
    }


    categoryListJoke = async () => {
        const categoryList = await axios.get('https://intense-mesa-62220.herokuapp.com/https://api.chucknorris.io/jokes/categories') 
        console.log(categoryList);
        const categoryJokeList = categoryList.data.map((cat, index) => { return <div onClick={() => {this.getJokeByCategory(cat)}} key={index}>{cat}</div> })
        this.setState({ categories: categoryJokeList })
    }

    getJokeByCategory = async (cat) => {
        const joke = await axios.get(`https://intense-mesa-62220.herokuapp.com/api.chucknorris.io/jokes/random?category=${cat}`)
        this.setState({jokeByCat : joke.data.value})
    }

    render() {


        return (<div>

            <div style={{ border: '2px black solid' }} onClick={this.getRandomJoke}>click on me for chuck noris nice joke :)</div>
            <h1>{this.state.randomJoke}</h1>
            <h2>{this.state.categories}</h2>
            <h3>{this.state.jokeByCat}</h3>
        </div>
        )
    }
}