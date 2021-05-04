import React from 'react';
import { Card } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';


class Img extends React.Component{ render(){ return(
    <>
    <CardDeck>
  <Card>
      <Card.Text>
      {this.props.name} is located at {this.props.lat} by {this.props.lon}
      </Card.Text>
     
      <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.lat},${this.props.lon}&zoom=12`}  />
   
  </Card>
  </CardDeck>
  
</>
);}}
export default Img;
