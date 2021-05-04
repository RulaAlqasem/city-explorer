import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';

import ImgCard from './component/ImgCard'
import OurForm from './component/OurForm';
import Header from './component/Header';
import Footer from './component/Footer';
import Weather from './component/Weather';


export class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      location: '',
      data: '',
      show: false,
      text:'',
      weatherForm:[]
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
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.location}&format=json`
      const request = await axios.get(url);
      const myApi = `${process.env.REACT_APP_HOST}`
      const showApi = await axios.get(myApi);
      console.log(showApi.data);

      this.setState({
        data: request.data[0],
        weatherForm:showApi.data
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
              <Weather weatherInfo={this.state.weatherForm}/>
         
            </>

            : <p >{this.state.text}</p> }

          <Footer />
        </div>

      </>


    )




  }
}

export default App
