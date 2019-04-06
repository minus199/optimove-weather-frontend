import { SearchState, SearchProps, UserProps, SearchHistoryItemProps } from "../entities/types";

const afterSearchSelect = (currentCityName: string, searchState: SearchState, ...queries: SearchHistoryItemProps[]) => {
  searchState.setSearchHistoryState(queries)

  // fetch the weather of the searched city
  fetch(`/api/cities/${currentCityName}/current?isSpotlight=${true}`)
    .then(res => res.json()).then(x => {
      searchState.setSpotlightCityData(x)
    })
}

export const addHistoryHandler = (city: string, searchState: SearchState, searchProps: SearchProps, userState: UserProps) => {
  searchState.setSearchState(city)
  const searchQuery = { searchTerm: city, searchTime: new Date() }

  // If user is logged in, nanage search results inmemory
  if (!userState.isLoggedIn) {
    return afterSearchSelect(city, searchState, searchQuery, ...searchProps.searchHistoryState)
  }

  // If user is logged in, nanage search results on server
  fetch("/api/users/current/lastSearches", {
    method: "POST",
    body: JSON.stringify(searchQuery),
    headers: { "Content-Type": "application/json" }
  }).then(r => r.json()).then((history: SearchHistoryItemProps[]) => {
    const normalized = history.map(h => ({ searchTerm: h.searchTerm, searchTime: new Date(h.searchTime) }))
    afterSearchSelect(city, searchState, ...normalized)
  })
}
