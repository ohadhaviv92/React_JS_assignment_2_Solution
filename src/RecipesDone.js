import React from 'react'
import Recipe from './Recipe';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



function RecipesDone(props) {
  return <> <Row><h1 style={{textAlign:"center"}}>ready to eat:</h1></Row> 
  <Row><h1>recipes made:{props.data.length}</h1></Row>
  <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >  <Row>{props.data.map((data,index) =>  { return <Col><Recipe key={index} sendData={(a)=>{props.sendData(a);}} data2={data} done={true} ></Recipe> </Col>})}</Row> </div></> 
  ;
}


export default RecipesDone;