import React from 'react'

import SwapiService from "../../services/swapi-service"
import ItemList from "../item-list";
import {withData} from '../hoc-helpers/index'

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService

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


const PersonList = withData(ListWithChildren, getAllPeople)

const PLanetList = withData(ListWithChildren, getAllPlanets)

const StarshipList = withData(ListWithChildren, getAllStarships)

export {
    PersonList,
    PLanetList,
    StarshipList
}