import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import { LinearProgress, Grid, Container } from '@mui/material';
import useStyles from '../styles/styles.js'
import { withRouter } from 'react-router';

const LIKED_CHARACTERS_KEY = 'char_key';

function AllCharacters() {
    const classes = useStyles();
    const { data, loading } = useCharacters();
    const likedObject = JSON.parse(localStorage.getItem(LIKED_CHARACTERS_KEY)) || {};
    
    if (loading) {
        return (
            <LinearProgress />
        );
    }

    return (
        <Container>
            <Grid container className={classes.characterContainer}>
            {data.characters.results.map((character) => {
                return (
                    <CharacterCard  
                        id={character.id}
                        name={character.name} 
                        image={character.image} 
                        species={character.species} 
                        gender={character.gender}
                        liked={likedObject[character.id]}
                    />
                );
            })}
            </Grid>
        </Container>
    )
}

export default withRouter(AllCharacters);
