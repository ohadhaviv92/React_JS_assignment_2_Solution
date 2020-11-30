import React, { Component } from 'react';
import {Form ,Button} from 'react-bootstrap';

class Ingredient extends Component {

    constructor(props) {
        super(props);
        
     this.state={
       name:'',
       image:'',
       calories:'',
       apiUrl:'http://localhost:59472/api/kitchen/',
     }
        
    }
    

 

    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }


    handleSubmit = (event) => {
      
      console.log(this.state);

      const data = { 
        name: this.state.name,
        image: this.state.image,
        calories:parseInt(this.state.calories) 
        };

      fetch(this.state.apiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
        })
        })
        .then(res => {
        console.log('res=', res);
        return res.json()
        })
        .then(
        (result) => {
          if(result==1){
            alert("Ingredient added");
          }
        console.log("fetch POST= ", result);
        console.log(result.Avg);
        },
        (error) => {
        console.log("err post=", error);
        });
      event.preventDefault();
  }

    render() {
        return (
            <div>
                New Ingredient
                <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" onChange={this.name} name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter ingredient name" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="password" value={this.state.image} name="image" onChange={this.handleChange} placeholder="enter image url" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>calories</Form.Label>
    <Form.Control type="number" value={this.state.calories} name="calories" onChange={this.handleChange} placeholder="enter dish calories" />
  </Form.Group>
  <Button variant="primary" type="submit" >
    Create New Ingredient
  </Button>
  <Button variant="warning">
    Clear Form
  </Button>
</Form>
            </div>
        );
    }
}

export default Ingredient;

