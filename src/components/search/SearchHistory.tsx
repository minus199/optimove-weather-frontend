import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SearchHistoryItemProps, SearchHistoryProps } from '../../entities/types';
import { ListItemSecondaryAction, Button, IconButton } from '@material-ui/core';
import { Refresh } from "@material-ui/icons"

function SearchHistoryItem(props: SearchHistoryItemProps & { onItemClick: (city: string, isSpotlight: boolean) => void }) {
    return (<>
        <ListItem >
            <ListItemText
                primary={props.searchTerm}
                secondary={props.searchTime.toUTCString()}
            />

            <ListItemSecondaryAction  >
                <IconButton onClick={(e) => props.onItemClick(props.searchTerm, true)} aria-label="Refresh">
                    <Refresh />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </>)
}

function SearchHistory(props: SearchHistoryProps) {
    const historyItems = props.history.map((item, idx: number) =>
        <SearchHistoryItem key={`search-history-${idx}`} {...item} onItemClick={props.onItemClick} />)

    return (<Grid style={{ height: "55vh", overflow: "auto" }} item xs={12} md={6}>
        <Typography variant="h6">Search History</Typography>
        <div><List>{historyItems}</List></div>
    </Grid>)
}

export default SearchHistory