import React from 'react';
import { Card, CardColumns} from 'react-bootstrap';



class Movie extends React.Component {

    render() {
        return (
<CardColumns>{
            this.props.movieInfo.map((data) => {
                return (
                    
                        <Card>
                            <Card.Title>
                                {data.movieTitle}
                            </Card.Title>
                            <Card.Text>
                                {data.movieDescription}
                            </Card.Text>

                            
                            <Card.Img src={`https://image.tmdb.org/t/p/original/${data.img}`} />

                        </Card>
                    

                )
            })}

</CardColumns>
        );

    }
}

export default Movie;