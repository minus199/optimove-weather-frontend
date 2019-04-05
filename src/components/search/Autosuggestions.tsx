import React from 'react';

import Autocomplete from 'react-autocomplete'
import { Suggestion } from '../search/CitySearchSuggestion';
import { AutosuggestionsProps } from "../../entities/types"

function CitiesAutoSuggestions(props: AutosuggestionsProps) {
    const { onSelect, searchState, setSearchState, suggestionsState } = props

    return (
        <Autocomplete
            value={searchState}
            items={suggestionsState}

            getItemValue={(item: Suggestion) => item.name}
            renderItem={(item: Suggestion, isHighlighted) => <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>{item.name}</div>}

            menuStyle={{ zIndex: 1, position: "absolute", flexGrow: 1 }}
            onChange={(e) => { setSearchState(e.target.value) }}
            onSelect={onSelect}
        />
    );
}

export default CitiesAutoSuggestions