import ItemDetails, { Record } from "../item-details";
import React from 'react'
import { SwapiServiceConsumer } from "../swapi-service-context";
import { withSwapiService } from "../hoc-helpers";

const PLanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}
export default withSwapiService(PLanetDetails, mapMethodsToProps)
