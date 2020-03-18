import React, { Component } from 'react'

import './people-page.css'
import ItemList from '../components/item-list'
import SwapiService from '../services/swapi-service'
import Row from '../components/row'
import ErrorBoundry from '../components/error-boundry'
import ItemDetails from '../components/item-details'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson})
    }

    render() {
        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}


            </ItemList>
        )

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList} right={personDetails}/>
        )
    }
}