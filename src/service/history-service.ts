import { SearchState, SearchProps, UserProps, SearchHistoryItemProps } from "../entities/types";

export const addHistoryHandler = (city: string, searchState: SearchState, searchProps: SearchProps, userState: UserProps) => {
  searchState.setSearchState(city)

  const searchQuery = { searchTerm: city, searchTime: new Date() }

  if (!userState.isLoggedIn) {
    return searchState.setSearchHistoryState([searchQuery, ...searchProps.searchHistoryState])
  }

  fetch("/api/users/current/lastSearches", {
    method: "POST",
    body: JSON.stringify(searchQuery),
    headers: { "Content-Type": "application/json" }
  }).then(r => r.json()).then((history: SearchHistoryItemProps[]) => {
    const normalized = history.map(h => ({ searchTerm: h.searchTerm, searchTime: new Date(h.searchTime) }))
    searchState.setSearchHistoryState(normalized)

    fetch(`/api/cities/${city}/current?isSpotlight=${true}`)
      .then(res => res.json()).then(x => {
        searchState.setSpotlightCityData(x)
      })
  })
}
