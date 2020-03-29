import SwapiService from "../../services/swapi-service"
import withData from '../hoc-helpers/index'
import ItemDetails, { Record } from "../item-details";
import React from 'react'
import { SwapiServiceConsumer } from "../swapi-service-context";

const PLanetDetails = ({itemId}) => {
    return (
      <SwapiServiceConsumer>
        {
          ({getPlanet, getPlanetImage}) => {
            return (
              <ItemDetails 
                itemId={itemId} 
                getData={getPlanet} 
                getImageUrl={getPlanetImage}
              >
                  <Record field="population" label="Population"/>
                  <Record field="rotationPeriod" label="Rotation Period"/>
                  <Record field="diameter" label="Diameter"/>
              </ItemDetails>
            )
          }
        }
      </SwapiServiceConsumer>
    )
}

export default PLanetDetails
