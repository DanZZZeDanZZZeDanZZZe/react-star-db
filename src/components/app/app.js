import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../../people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails, { Record } from '../item-details';
import ItemList from '../item-list';

import {
  PersonDetails,
  PLanetDetails,
  StarshipDetails,
  PersonList,
  PLanetList,
  StarshipList
} from '../sw-components/index'

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
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService


    return (
      <div>
        <Header />

        <PersonDetails itemId={11}/>
        <StarshipDetails itemId={11}/>
        <PLanetDetails itemId={11}/>

        <PersonList/>
        <StarshipList/>
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
        /*<RandomPlanet/>
        <Row 
          left={
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}


            </ItemList>
          }
          right={starshipDetails}
        />
 */