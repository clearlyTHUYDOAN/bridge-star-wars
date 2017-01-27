import React, {Component} from 'react';
import $ from 'jquery';
import Planet from '../../components/planet/planet'

export default class Planets extends Component {

  planetListUrl = "http://swapi.co/api/planets"; // don't have to declare, it just know it's a variable.
  // with classes, whenever you put anything between these curly brakcets, it's being defined on the class itself.
  // it's like saying "for my object, i'm going to call this property this and make it equal to this.
  // assumed to be part of the class object 

  state = { // does not have to be in a constructor and does not have to have this. in front of it in this case but you have to reference it by this. later on
    nextUrl: null,
    planetList: [] // initial state
  }

  componentDidMount() { // fires after constructor(), componentWillMount, and render()
    // $.get(this.planetListUrl).then(res => this.setState({planetList: res.results})); // provides us with ability to paginate 10+ per page
  this.getPlanets();
}

  getPlanets(overWriteURL) {
    $.get(overWriteURL ? overWriteURL : this.planetListUrl)
    .then(res => this.setState({
      planetList: this.state.planetList.concat(res.results), // list of planets that render gets bigger.
      nextUrl: res.next
    })); // nextUrl's state changing provides you with the info to display the right page's planets
  }

  render(){
    return <div>
      <h2>Planet List</h2>

      <Planet name={"Planet Della"} climate={"Cool"} terrain={"Rocky"} population={"4000"}></Planet>
      {this.state.planetList.map((planet, index) => 
        <Planet 
        key={index} 
        name={planet.name}
        climate={planet.climate}
        terrain={planet.terrain}
        population={planet.population}
        />)}
      {this.state.nextUrl ?
        <button onClick={() => this.getPlanets(this.state.nextUrl)}>Load more planets...</button> :
        <h6>Nothing Else To Add</h6>}
    </div>
  }

}

// key helps it render as efficiently as possible by helping it know what's what'