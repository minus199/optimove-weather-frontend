import React, { } from 'react';
import { Grid } from '@material-ui/core';

import Cities from "./city/Cities"
import City from './city/City';
import SearchHistory from "./search/SearchHistory"
import WeatherResponse, { SearchHistoryItemProps, WeatherByCity } from '../entities/types';

export interface MainContentProps {
  topCitiesData: WeatherByCity
  searchHistoryState: SearchHistoryItemProps[]
  spotlightCityData: WeatherResponse
  onNeedWeatherRefresh: (cityName: string, isSpotlight: boolean) => void
}

function MainContent(props: MainContentProps) {
  const { topCitiesData, searchHistoryState, spotlightCityData, onNeedWeatherRefresh } = props
  return (
    <Grid container>
      {/* The top list of cities */}
      <Grid item xs={12}>
        <Cities cities={topCitiesData} fetchWeatherHandler={onNeedWeatherRefresh} />
      </Grid>

      {/* Search history */}
      <Grid item xs={6}>
        <SearchHistory history={searchHistoryState} onItemClick={onNeedWeatherRefresh} />
      </Grid>

      {/* Selected city from search */}
      <Grid item xs={6}>
        <City {...{ onNeedWeatherRefresh, ...spotlightCityData }} />
      </Grid>
    </Grid>
  );
}

export default MainContent