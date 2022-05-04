import React from "react";
import CharacterCard from "./CharacterCard";
import { Grid, Container } from '@mui/material';
import useStyles from '../styles/styles.js'
import { withRouter } from 'react-router';
import { useLikedCharacters } from "../hooks/useLikedCharacters";

const LIKED_CHARACTERS_KEY = 'char_key';

function LikedCharacters () {
    const classes = useStyles();

    const likedObject = JSON.parse(localStorage.getItem(LIKED_CHARACTERS_KEY)) || {};
    
    const arrayWithLikedCharacters = Object.entries(likedObject).filter(entry => entry[1]).map(entry => entry[0]);
    const {data, loading, error} = useLikedCharacters(arrayWithLikedCharacters);
    
    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

     if (error) {
        console.log(error)
    }

    console.log(data);
    
    return (
        <Container>
            <Grid container className={classes.characterContainer}>
            {data.charactersByIds.map((character) => {
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

export default withRouter(LikedCharacters);
