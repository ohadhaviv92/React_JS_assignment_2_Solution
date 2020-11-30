import React from 'react'
import Recipe from './Recipe';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function Recipes(props) {
  return <> <Row><h1>Recepis made:</h1></Row> 
  <div
style={{
display: "flex",
justifyContent: "center",
alignItems: "center"
}}
>
<Row>
{props.data.map((data,index) => 
{ return <Col> <Recipe key={index} data2={data} sendData={(a)=>{props.sendData(a);}}  done={false}> </Recipe> </Col>})}
</Row> </div> </> 
}

export default Recipes;