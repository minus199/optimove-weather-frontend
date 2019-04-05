import React, { FormEvent } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import MenuItem from '@material-ui/core/MenuItem';
import { TextFieldProps } from '@material-ui/core/TextField';

/**
 * Container for metadata about suggested city
 */
export interface Suggestion {
    id: number,
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    url: string
}

export type SearchSuggestionTextFieldProps = Suggestion | TextFieldProps

/**
 * Represent one city in the search result
 * @param suggestion 
 */
function renderCitySuggestionItem(suggestion: Suggestion, { query, isHighlighted }: { query: string, isHighlighted: boolean }) {
    console.log("@@@@", arguments);
    
    const matches = match(suggestion.name, query);
    const parts = parse(suggestion.name, matches).map((part, index) =>
        part.highlight ?
            (<span key={String(index)} style={{ fontWeight:"bolder" }}>{part.text}</span>)
            : (<strong key={String(index)} style={{ fontWeight: "lighter" }}>{part.text}</strong>),
    );

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>{parts}</div>
        </MenuItem>);
}

export default renderCitySuggestionItem;