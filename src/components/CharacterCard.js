import React, { useState } from "react";
import { Typography, IconButton, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import { ThumbUpAlt, ThumbUpOffAlt } from '@mui/icons-material';
import useStyles from '../styles/styles.js'
import { stateLikedCharacters } from "../states/stateLikedCharacters.js";

export default function CharacterCard ({id, name, image, species, gender, likedProp}) {
    const classes = useStyles();
    const [liked, setLiked] = useState(likedProp);

    const handleClick = (id) => {
        stateLikedCharacters(id, liked);
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