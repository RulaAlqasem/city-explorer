import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'






class OurForm extends React.Component {
     
    render() {


        return (
            <div>
       
        <Form.Group>

          <Form.Label column="lg" lg={2}>
          Map location
          </Form.Label>
          <br />
          <Form.Control size="lg" type="text" placeholder="Large text" onChange={this.props.changLocation} />
          <br />
          <Button type='submit' onClick={this.props.explore}>explore!!!</Button>
        </Form.Group>
        
    
      
       
      

      </div>)

    }
}

export default OurForm;