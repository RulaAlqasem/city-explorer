import React from 'react';

import Card from 'react-bootstrap/Card'
class Img extends React.Component{ render(){ return(
    <>
  <Card>
  <Card.Body>
      <Card.Text>
      {this.props.name} is located at {this.props.lat} by {this.props.lon}
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.107ac8c82afac7d3a6cb29ba677ba0c0&center=${this.props.lat},${this.props.lon}&zoom=12`}  alt=''  />
   
  </Card>
</>
);}}
export default Img;