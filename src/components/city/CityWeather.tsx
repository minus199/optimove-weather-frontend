import React from 'react';
import { Typography, Grid, Avatar } from "@material-ui/core";
import WeatherResponse from '../../entities/types';

export const CityWeatherHeader = (props: WeatherResponse) => (
    <Grid container>
        <Grid item xs={6}>
            <Typography gutterBottom variant="headline" component="div" color="textPrimary">{props.location.name}</Typography>
        </Grid>

        <Grid item xs={2}>
            <Avatar className="city-weather-icon"
                alt={props.current ? props.current.condition.text : ""}
                src={props.current ? props.current.condition.icon : ""} />
        </Grid>

        <Grid item xs>
            <Typography gutterBottom variant="body1" component="div">{props.current.condition.text}</Typography>
        </Grid>
    </Grid>)


interface CityWeatherAttributeProps { metaKey: string; metaValue: any; }
const CityWeatherAttribute = (props: CityWeatherAttributeProps) => (
    <Grid className={props.metaKey} container item xs={12}>
        <Grid item xs>
            <Typography align="left" gutterBottom variant="body1" component="div">{props.metaKey}</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography align="right" gutterBottom variant="body1" component="div">{props.metaValue}</Typography>
        </Grid>
    </Grid>)


export const CityWeatherAttributes = (props: WeatherResponse) => (
    <>
        <CityWeatherAttribute metaKey="Current Tempature" metaValue={<>{props.current.temp_c}&#x2103;</>} />
        <CityWeatherAttribute metaKey="Feels Like" metaValue={<>{props.current.feelslike_c}&#x2103;</>} />
        <CityWeatherAttribute metaKey="Wind" metaValue={props.current.wind_kph + " kph"} />
        <CityWeatherAttribute metaKey="Wind Gust" metaValue={props.current.gust_kph + " kph"} />
    </>)
