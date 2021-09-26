import React from 'react';
import {Card} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
const MovieCard = ({Movie}) => {
    return (
        <div>
            <Card style={{ width: '18rem', color:'black' }}>
                <Card.Img alt={Movie.name} variant="top" src={Movie.posteurl} />
                <Card.Body>
                    <Card.Title>{Movie.name}</Card.Title>
                    <Card.Text>
                        {Movie.description}
                    </Card.Text>
                    <ReactStars
                        value={Movie.rating}
                        edit={false}
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </Card.Body>
            </Card>
        </div>
    )
}
export default MovieCard;
