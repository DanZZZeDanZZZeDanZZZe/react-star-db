import SwapiService from "../../services/swapi-service"
import ItemList from "../item-list";
import withData from '../hoc-helpers/index'

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService

const PersonList = withData(ItemList, getAllPeople)

const PLanetList = withData(ItemList, getAllPlanets)

const StarshipList = withData(ItemList, getAllStarships)

export {
    PersonList,
    PLanetList,
    StarshipList
}