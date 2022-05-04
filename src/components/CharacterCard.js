import React, { useState } from "react";
import { Typography, IconButton, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import { ThumbUpAlt, ThumbUpOffAlt } from '@mui/icons-material';
import useStyles from '../styles/styles.js'

const LIKED_CHARACTERS_KEY = 'char_key';

export default function CharacterCard ({id, name, image, species, gender, likedProp}) {
    const classes = useStyles();
    const [liked, setLiked] = useState(likedProp);

    const handleClick = (id) => {
        const likedObject = JSON.parse(localStorage.getItem(LIKED_CHARACTERS_KEY)) || {};
        console.log(likedObject);
        likedObject[id] = !liked;
        localStorage.setItem(LIKED_CHARACTERS_KEY, JSON.stringify(likedObject));
        setLiked(!liked);
    }

    return (
        <Grid item >
            <Card className={classes.characterCard}>
                <CardMedia className={classes.cardImage} image={image}/>
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="h6">{species} | {gender}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="thumbup" onClick={() => handleClick(id)}>
                        {liked ? <ThumbUpAlt/> : <ThumbUpOffAlt/>}
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}