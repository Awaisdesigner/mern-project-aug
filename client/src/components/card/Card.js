import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Card.css'


const Carrd = () => {
    return (
        <>
            <div className="cardd">Card</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium placeat autem laudantium odit, ipsa nesciunt, eveniet beatae cupiditate, aspernatur similique voluptate saepe ipsum dolore aliquid. Impedit saepe totam sint praesentium labore necessitatibus possimus recusandae, modi harum iusto fuga optio tempora, voluptates enim dignissimos doloremque illo fugit laborum delectus ab explicabo.</p>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>


        </>
    )
}

export default Carrd;