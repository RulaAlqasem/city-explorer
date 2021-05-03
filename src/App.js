import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Image from 'react-bootstrap/Image'

export class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      location: '',
      data: '',
      show:false
    }
  }
  changLocation = (event) => {
    event.preventDefault();
    this.setState({ location: event.target.value })
  }
  explore=async(event)=>{
 
    event.preventDefault();
    try {
      this.setState({  show:true });
    let url=`https://us1.locationiq.com/v1/search.php?key=pk.107ac8c82afac7d3a6cb29ba677ba0c0&q=${this.state.location}&format=json`
     const request =await axios.get(url);
     this.setState({
       data:request.data[0]
     })}catch (error) {
       console.log('erroooorrrr')
      this.setState({  show:false });

    }

  }

  render() {
    if (this.state.show===true) {
      
   
    return (
      <div>
        <h1>map view</h1>
        <Form.Group>

          <Form.Label column="lg" lg={2}>
          Map location
    </Form.Label>
    <br />
          <Form.Control size="lg" type="text" placeholder="Large text" onChange={this.changLocation} />
          <br />
<Button type='submit' onClick={this.explore}>explore!!!</Button>
        </Form.Group>
        
        <div show={this.state.show}>
        <p>{this.state.data.display_name}</p>
        <Image  src={`https://maps.locationiq.com/v3/staticmap?key=pk.107ac8c82afac7d3a6cb29ba677ba0c0&center=${this.state.data.lat},${this.state.data.lon}`}  alt=''  fluid/>
        </div>
      </div>
    ) }
    else{
      return(<div>
            <h1>map view</h1>
         <Form.Group>

<Form.Label column="lg" lg={2}>
Map location
</Form.Label>
<br />
<Form.Control size="lg" type="text" placeholder="city" onChange={this.changLocation} />
<br />
<Button type='submit' onClick={this.explore}>explore!!!</Button>
</Form.Group>

<p> add a real city</p>
      </div>)
    }
  }
}

export default App
