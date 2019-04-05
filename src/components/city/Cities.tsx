import React from 'react';
import { GridList, GridListTile } from "@material-ui/core";
import City from './City';
import { CitiesProps } from '../../entities/types'

function Cities({ cities, fetchWeatherHandler }: CitiesProps) {
    const cityItems = []
    for (const city in cities) {
        cityItems.push(
            <GridListTile key={city} style={{height: "fit-content"}} >
                <City {...cities[city]} onNeedWeatherRefresh={fetchWeatherHandler}></City>
            </GridListTile>
        )
    }

    return (
        <GridList style={{ margin: "10px" }} spacing={20} cols={4}>
            {cityItems}
        </GridList>)
}


export default Cities
