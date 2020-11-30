

import React from 'react'
import Recipes from './Recipes';
import RecipesDone from './RecipesDone';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class MyKitchen extends React.Component {
    constructor(props){
        super(props)
        this.state={
        recipes:[ {img: "https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg" , 
        title:"Pho",text:"slow-cooked soup"}
       , 
       {img: "https://glebekitchen.com/wp-content/uploads/2016/11/easypadthaibowltop-1-500x500.jpg" , 
       title:"Pad Thai",text:"stir-fry dish, mix all ingredients together"}
        , 
        {img: "//kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg", 
        title:"Chop Suey",text:"5 minute stir fry,add each vegetable in the order in which they cook."}
        ],
        recipesDone:[]
        }

    }

    popFromRecipes=(a)=>{


var filtered = this.state.recipes.filter(function(el) { return el.img !== a.img; }); 
this.setState({recipesDone:[...this.state.recipesDone,a],recipes:filtered });

    }


    popFromRecipesDone=(a)=>{
     
      var filtered = this.state.recipesDone.filter(function(el) { return el.img !== a.img; }); 
      this.setState({recipes:[...this.state.recipes,a],recipesDone:filtered });
     
          }
      





    render() {
   
     
      
    return (
      
      <Container fluid>
        <Row>
        <center>
      <h1>Recepis</h1>
      </center>
      </Row>

      {this.state.recipes.length !== 0 ? 
        <Recipes sendData={this.popFromRecipes} data={this.state.recipes}></Recipes> :null} 

     {this.state.recipesDone.length !== 0 ? 
     
       <RecipesDone sendData={this.popFromRecipesDone} data={this.state.recipesDone}></RecipesDone>
       :null} 
       </Container>
      
       )
    }
  }

export default MyKitchen;