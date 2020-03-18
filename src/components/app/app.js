import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  swapiService = new SwapiService()

    state = {
        selectedPerson: 3,
        hasError: false
    }

  onPersonSelected = (selectedPerson) => {
      this.setState({selectedPerson})
  }



  render() {
    return (
      <div>
        <Header />

        <RandomPlanet/>

        <PeoplePage/>

      </div>
    )
  }
};
/* <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            starships
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => (item.name)}
            />
          </div>
          <div className="col-md-6">
              planets
          </div>
        </div>*/