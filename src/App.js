import React, { Component } from 'react'



import axios from 'axios';

import ImgCard from './component/ImgCard'
import OurForm from './component/OurForm';
import Header from './component/Header';
import Footer from './component/Footer';

export class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      location: '',
      data: '',
      show: false,
      text:''
    }
  }
  changLocation = (event) => {
    event.preventDefault();
    this.setState({ location: event.target.value })
  }
  explore = async (event) => {

    event.preventDefault();
    try {
      this.setState({ show: true });
      let url = `https://us1.locationiq.com/v1/search.php?key=pk.107ac8c82afac7d3a6cb29ba677ba0c0&q=${this.state.location}&format=json`
      const request = await axios.get(url);
      this.setState({
        data: request.data[0]
      })
    } catch (error) {
      console.log('erroooorrrr')
      this.setState({ show: false, text:'ERROR, pleas add a Existing city' });


    }

  }

  render() {



    return (

      <>
        <Header />
        <div>
          <OurForm changLocation={this.changLocation} explore={this.explore} />
          {(this.state.show) ?
            <>

              <ImgCard lat={this.state.data.lat} lon={this.state.data.lon} name={this.state.data.display_name} />
            </>

            :
           


              <p >{this.state.text}</p>
           }
          <Footer />
        </div>

      </>


    )




  }
}

export default App
