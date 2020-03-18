import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../../people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails, { Record } from '../item-details';

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

    const personDetails = (
          <ItemDetails
            itemId={11} 
            getData={getPerson} 
            getImageUrl={getPersonImage}
          >
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
          </ItemDetails>
          
    )

    const starshipDetails = (
      <ItemDetails 
        itemId={5} 
        getData={getStarship} 
        getImageUrl={getStarshipImage}
      >
      </ItemDetails>
)
    return (
      <div>
        <Header />

        <RandomPlanet/>

        <Row 
          left={personDetails}
          right={starshipDetails}
        />

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