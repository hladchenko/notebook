import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

const Note = ({ item }) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link to={`/edit/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/article-image.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item?.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card >

    )
}

export default Note;
