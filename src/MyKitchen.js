

import React from 'react'
import Recipes from './Recipes';
import RecipesDone from './RecipesDone';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import DishRecipe from './DishRecipe';
import Ingredient from './Ingredient';


class MyKitchen extends React.Component {
    constructor(props){
        super(props)
        this.state={
          apiUrl:'http://localhost:59472/api/dishRecipe/',
        }

    }

      

componentDidMount() {
  

  fetch(this.state.apiUrl)
  .then(res => {
  console.log('res=', res);
  console.log('res.status', res.status);
  console.log('res.ok', res.ok);
  return res.json()
  })
  .then(
  (result) => {
  console.log("fetch btnFetchGetStudents= ", result);
  

  

  
  },
  (error) => {
  console.log("err post=", error);
  });

  
}




    render() {
   
     
      
    return (
      
      <Container fluid>
        <Row>
        <center>
      <h1>Recepis</h1>
      </center>
      </Row>

       </Container>
      
       )
    }
  }

export default MyKitchen;