import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link } from '@material-ui/core';


import { TopToolbarProps, AutosuggestionsProps } from '../entities/types';
import CitiesAutoSuggestions from "./search/Autosuggestions"

function TopToolbar(props: TopToolbarProps & AutosuggestionsProps) {
    const { username } = props.userState || { username: "anon" }
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Grid container>
                    <Grid item xs >
                        <Typography variant="h4" color="primary">Global Weather Forcasts</Typography>
                    </Grid>

                    <Grid item xs>
                        <CitiesAutoSuggestions {...props as AutosuggestionsProps} />
                    </Grid>

                    <Grid item xs>{username === "anon" ?
                        <Link href="/api/auth/github">Login</Link>
                        : <Typography variant="body1" color="textSecondary">{`Hello, ${username}`}</Typography>}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default TopToolbar