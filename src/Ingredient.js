import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Ingredient extends Component {

    constructor(props) {
        super(props);
        
    }
    


    render() {
    return( <div>                 
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={this.props.data.Image}  style={{width:"18rem",height:"200px"}}/>
    <Card.Body>
      <Card.Title>Name: {this.props.data.Name}</Card.Title>
      <Card.Text>
      Calories: {this.props.data.Calories} 
      </Card.Text>
     
    </Card.Body>
  </Card> </div>);
    }
}

export default Ingredient;

