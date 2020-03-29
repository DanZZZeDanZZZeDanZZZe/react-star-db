import SwapiService from "../../services/swapi-service"
import withData from '../hoc-helpers/index'
import ItemDetails, { Record } from "../item-details";
import React from 'react'
import { SwapiServiceConsumer } from "../swapi-service-context";

const StarshipDetails = ({itemId}) => {
    return (
      <SwapiServiceConsumer>
        {
          ({getStarship, getStarshipImage}) => {
            return (
              <ItemDetails 
                itemId={itemId} 
                getData={getStarship} 
                getImageUrl={getStarshipImage}
              >
                  <Record field="model" label="Model"/>
                  <Record field="length" label="Length"/>
                  <Record field="costInCredits" label="Cost"/>
              </ItemDetails>
            )
          }
        }
      </SwapiServiceConsumer>
    )
}
export default StarshipDetails
