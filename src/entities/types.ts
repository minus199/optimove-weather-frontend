import { Suggestion } from '../components/search/CitySearchSuggestion';

import { Dispatch, SetStateAction } from 'react';
import { Current, Location } from './weather-response';

export interface City {
    name: string
    isSpotlight: boolean
    location: Location
    current: Current
}

export interface Spotlight extends City {
    isSpotlight: true
}

export interface WeatherUpdate {
    topCities: { [key: string]: City }
    spotlight: Spotlight
}

export interface UserProps {
    username: string
    isLoggedIn: boolean
    weatherUpdate: WeatherUpdate
}

export default interface WeatherResponse {
    name: string
    isSpotlight: boolean
    location: Location
    current: Current
}

export type WeatherByCity = { [key: string]: WeatherResponse }

export interface CitiesProps {
    cities: WeatherByCity
    fetchWeatherHandler: (cityName: string, isSpotlight: boolean) => void
}

export interface TopToolbarProps {
    userState: UserProps
}

export interface SearchHistoryItemProps {
    searchTerm: string
    searchTime: Date
}

export interface SearchHistoryProps {
    history: SearchHistoryItemProps[]
    onItemClick: (city: string, isSpotlight: boolean) => void
}


export interface SearchState {
    setSpotlightCityData: Dispatch<SetStateAction<WeatherResponse>>
    setSearchState: Dispatch<SetStateAction<string>>
    setSearchHistoryState: Dispatch<SetStateAction<SearchHistoryItemProps[]>>
}

export interface SearchProps {
    searchHistoryState: SearchHistoryItemProps[]
    searchState: string
    suggestionsState: Suggestion[]
}

export interface AutosuggestionsProps {
    searchState: string
    suggestionsState: Suggestion[]
    setSearchState: Dispatch<SetStateAction<string>>
    onSelect: (value: string, item: any) => void

}



export type CityID = string

export interface CitiesState { [key: string]: WeatherResponse }

export interface Suggestions { [key: string]: Suggestion }


export interface SuggestionsState {
    suggestions: Suggestions
    searchTerm: string
    selectedItem?: Suggestion
}

export interface State {
    user: UserProps,
    lastUpdated: Date


    cities: CitiesState
    suggestions: SuggestionsState
}