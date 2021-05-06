import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';

import ImgCard from './component/ImgCard'
import OurForm from './component/OurForm';
import Header from './component/Header';
import Footer from './component/Footer';
import Weather from './component/Weather';
import Movie from './component/Movie';



export class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      location: '',
      data: '',
      show: false,
      text:'',
      weatherForm:[],
      movie:[],
    
    }
  }
  
  changLocation = (event) => {
    event.preventDefault();
    this.setState({ location: event.target.value })
  }
  explore = async (event) => {

    event.preventDefault();
    try {
     
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.location}&format=json`
      const request = await axios.get(url);
      
      // const myApi = `${process.env.REACT_APP_HOST}&lat=38.123&lon=-78.543`
      // const showApi = await axios.get(myApi);
      
     
      this.setState({
        data: request.data[0]
      
      });
      this.getWE();
      this.getMovie();
    
    } catch (error) {
      console.log('erroooorrrr')
      this.setState({ show: false, text:'ERROR, pleas add a Existing city' });


    }

  }
  getWE= async ()=>{
    const myApiUrl = `${process.env.REACT_APP_HOST}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon} `
    
    const showApiUrl = await axios.get(myApiUrl);
   
    

    console.log(showApiUrl.data);
    this.setState({
    
      weatherForm:showApiUrl.data,
      show: true
    })
  }
  getMovie= async ()=>{
    const myApiUrlMovie = `${process.env.REACT_APP_HOST}/movie?query=${this.state.location} `
    const showApiUrlMovie = await axios.get(myApiUrlMovie);
    console.log(showApiUrlMovie.data);
    this.setState({
      movie:showApiUrlMovie.data,
      show: true
    })
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
           
              <Weather weatherInfo={this.state.weatherForm} />
            <Movie  movieInfo={this.state.movie}/>
         
            </>

            : <p >{this.state.text}</p> }

          <Footer />
        </div>

      </>


    )




  }
}

export default App
