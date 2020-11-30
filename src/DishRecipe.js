
import React, { Component } from 'react';
import {Form ,Button} from 'react-bootstrap';

class DishRecipe extends Component {
    render() {
        return (
            <div>
                                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="Enter ingredient name" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="password" placeholder="enter image url" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Ingredients</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>calories</Form.Label>
    <Form.Control type="number" placeholder="enter dish calories" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Create New Recipe
  </Button>
  <Button variant="warning">
    Clear Form
  </Button>
</Form>
            </div>
        );
    }
}

export default DishRecipe;