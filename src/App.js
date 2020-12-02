import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MyKitchen from './MyKitchen';
import CreateDishRecipe from './CreateDishRecipe';
import CreateIngredient from './CreateIngredient';
import { Navbar, Nav} from 'react-bootstrap';

import FastfoodIcon from '@material-ui/icons/Fastfood';



class App extends Component {

            render() {
                return (
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><FastfoodIcon/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">My Kitchen</Nav.Link>
      <Nav.Link href="Ingredient">Create New Ingredient</Nav.Link>
      <Nav.Link href="DishRecipe">Create New Recipe</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
                <Switch>
                <Route exact path="/" >
                <MyKitchen />
                </Route>
                <Route exact path="/Ingredient" >
                <CreateIngredient />
                </Route>
                <Route exact path="/DishRecipe" >
                <CreateDishRecipe />
                </Route>

                </Switch> </div>
                
        );
    }
}

export default App;