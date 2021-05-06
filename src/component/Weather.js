
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
class Weather extends React.Component {
    render() {
        return (
            <div>{
            this.props.weatherInfo.map(data => {
                return (
                    // <div>
                    //     <p>{data.date} </p>
                    //     <p>{data.description} </p>
                    // </div>{
                   
                        <ListGroup horizontal  className='w-50 p-3' >
                          <ListGroup.Item>{data.date}</ListGroup.Item>
                          <ListGroup.Item>{data.description}</ListGroup.Item>
                         
                        </ListGroup>
                     
                )
            })}
            </div>
        )



       

    }
}
export default Weather;