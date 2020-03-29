import React, {Component} from 'react';

import Header from '../header';
import './app.css';
import SwapiService from '../../services/swapi-service';


import {SwapiServiceProvider} from '../swapi-service-context'

import {
  PersonDetails,
  PLanetDetails,
  StarshipDetails,
  PersonList,
  PLanetList,
  StarshipList,
} from '../sw-components/index'
import RandomPlanet from '../random-planet';
import Row from '../row';

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

    const planet = this.state.showRandomPlanet ? 
      <RandomPlanet/> :
      null


    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div>
          <Header />

          {planet}

          <Row
            left={<PersonList/>}
            right={<PersonDetails itemId={11}/>}
          />

          <Row
            left={<PLanetList/>}
            right={<PLanetDetails itemId={11}/>}
          />

        <Row
            left={<StarshipList/>}
            right={<StarshipDetails itemId={11}/>}
          />
        </div>
      </SwapiServiceProvider>
    )
  }
};
