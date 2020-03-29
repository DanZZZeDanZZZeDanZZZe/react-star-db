import React from 'react'

import ItemList from "../item-list";
import {withData, withSwapiService} from '../hoc-helpers/index'

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
               {fn}
            </Wrapped>
        )
    }
}
const ListWithChildren = withChildFunction(
    ItemList,
    ({ name }) => <span>{name}</span>
)

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const PersonList = withSwapiService(withData(ListWithChildren), mapPersonMethodsToProps)

const mapPLanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPLanets
    }
}

const PLanetList =  withSwapiService(withData(ListWithChildren), mapPLanetMethodsToProps)

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const StarshipList =  withSwapiService(withData(ListWithChildren), mapStarshipMethodsToProps)

export {
    PersonList,
    PLanetList,
    StarshipList
}