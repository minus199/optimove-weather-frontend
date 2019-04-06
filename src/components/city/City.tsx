import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { CityWeatherHeader, CityWeatherAttributes } from "./CityWeather"
import WeatherResponse from '../../entities/types';

const City = (props: WeatherResponse & { onNeedWeatherRefresh: (city: string, isSpotlight: boolean) => void }) => {
    const weather = props.current ? <CardContent>
        <CityWeatherHeader {...props} />
        <CityWeatherAttributes {...props} />
    </CardContent> : null

    return (
        <Card style={{ minWidth: "300px" }}>
            {weather}
            <CardActions>
                <Button size="small" color="primary" onClick={() => props.onNeedWeatherRefresh(props.location.name, !!props.isSpotlight)}>Refresh</Button>
                <Typography variant="caption" color="textSecondary">Updated: {new Date(props.current ? props.current.last_updated : undefined).toUTCString()}</Typography>
            </CardActions>
        </Card>
    );
}

export default City