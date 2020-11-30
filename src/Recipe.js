import React from 'react';


import { Button,Card } from 'react-bootstrap';

function Recipe(props) {
  return       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.data2.img}  style={{width:"18rem",height:"200px"}}/>
  <Card.Body>
    <Card.Title>{props.data2.title}</Card.Title>
    <Card.Text>
    {props.data2.text}
    </Card.Text>
    {props.done?  <Button variant="primary" onClick={()=>{ props.sendData(props.data2);}}>Eat!</Button> :  <Button variant="primary" onClick={()=>{ props.sendData(props.data2)}}>perpare Dish!</Button>}
   
  </Card.Body>
</Card> ;
}


export default Recipe;