

import React from 'react'

import Container from 'react-bootstrap/Container'

import DishRecipe from './DishRecipe';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class MyKitchen extends React.Component {
    constructor(props){
        super(props)
        this.state={
          recipes:null,
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
  console.log("fetch = ", result);
  
  this.setState({recipes:result});


  
  },
  (error) => {
  console.log("err post=", error);
  });

  
}




    render() {
     
      
   
      
    return (
      
      <Container fluid>
         
        <Row>
       
      <h1>Recepis List : </h1>
      
      </Row>
    
      <Row>
      {this.state.recipes !== null ? this.state.recipes.map(recipe => <Col><DishRecipe key={recipe.Id} data={recipe}/></Col>)  : null}
      </Row>
       </Container>
      
       )
    }
  }

export default MyKitchen;