import React, { useEffect, useState } from 'react';
import { AppBar } from '@material-ui/core';
import MainContent from "./MainContent"
import TopToolbar from './TopToolbar'
import WeatherResponse, { UserProps, SearchHistoryItemProps, WeatherByCity } from "../entities/types"

import { addHistoryHandler } from '../service/history-service';

import './App.css';


function App() {
  const [userState, setUserProps] = useState(null)

  /**
   * Search realted hooks
   */
  const [searchState, setSearchState] = useState("")
  const [suggestionsState, setSuggestionsState] = useState([])
  const [searchHistoryState, setSearchHistoryState] = useState([])

  /**
   * Fetch suggestions from server on userinput
   */
  useEffect(() => {
    fetch(`/api/autosuggest/cities/${searchState}`)
      .then(res => res.json()).then(setSuggestionsState)
      .catch(e => console.error("//TODO: Show indication", e))
  }, [searchState])

  /**
   * City data related hooks
   */
  const [spotlightCityData, setSpotlightCityData] = useState<WeatherResponse>(null)
  const [topCitiesData, setTopCitiesData] = useState<WeatherByCity>({})

  useEffect(() => {
    fetch("/api/users/current").then(res => res.json())
      .then((userInitialData: UserProps) => {
        setUserProps(userInitialData)
        setSpotlightCityData(userInitialData.weatherUpdate.spotlight)
        setTopCitiesData(userInitialData.weatherUpdate.topCities)
      })

    fetch("/api/users/current/lastSearches")
      .then(res => res.json())
      .then((history: SearchHistoryItemProps[]) => {
        for (const h of history) {
          h.searchTime = new Date(h.searchTime)
        }
        setSearchHistoryState(history)
      })
  }, [])

  return (
    <div className="App">
      <AppBar position="static" color="default">
        <TopToolbar
          userState={userState}
          {...{ searchState, suggestionsState, setSearchState }}
          onSelect={
            (val, item) => addHistoryHandler(
              val,
              { setSearchHistoryState, setSearchState, setSpotlightCityData },
              { searchHistoryState, searchState, suggestionsState },
              userState
            )}
        />
      </AppBar>

      <MainContent
        onNeedWeatherRefresh={(city, isSpotlight) => fetch(`/api/cities/${city}/current?isSpotlight=${isSpotlight}`)
          .then(res => res.json()).then(x => {
            isSpotlight ? setSpotlightCityData(x) : setTopCitiesData({ ...topCitiesData, [x.location.name]: x })
          })}

        {...{ topCitiesData, searchHistoryState, spotlightCityData }}
      />
    </div>
  );
}

export default App