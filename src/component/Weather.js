
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
class Weather extends React.Component {
    render() {
        return (
            this.props.weatherInfo.map(data => {
                return (
                    // <div>
                    //     <p>{data.date} </p>
                    //     <p>{data.description} </p>
                    // </div>{
                    ['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (
                        <ListGroup horizontal={breakpoint} className="my-2" key={idx} >
                          <ListGroup.Item>{data.date}</ListGroup.Item>
                          <ListGroup.Item>{data.description}</ListGroup.Item>
                         
                        </ListGroup>
                      ))
                )
            })
        )



       

    }
}
export default Weather;