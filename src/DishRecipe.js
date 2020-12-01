
import React, { Component } from 'react';
import {Form ,Button} from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';




class DishRecipe extends Component {

    constructor(props) {
        super(props);
        
     this.state={
       name:'',
       image:'',
       ingredients:null,
       time:'',
       options:[],
       selectedValue:[],
       apiUrl:'http://localhost:59472/api/ingredient/',
       apiUrl2:'http://localhost:59472/api/dishRecipe/',
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

let a=[];

result.forEach(element => {
    a.push({id: element.Id, name: element.Name, image:element.Image, calories:element.Calories });
});

this.setState({options:a});

},
(error) => {
console.log("err post=", error);
});


}


handleSubmit = (event) => {

    const data = { 
        name: this.state.name,
        image: this.state.image,
        cookingMethod:this.state.cookingMethod,
        ingredients:this.state.selectedValue,
        time:parseInt(this.state.time) ,
        };


    
}


    render() {


       

        return (
            <div>
                                <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" name="name"  placeholder="Enter dish name" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text"   placeholder="enter image url" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Ingredients</Form.Label>
    <Multiselect
options={this.state.options} // Options to display in the dropdown
selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
onSelect={this.onSelect} // Function will trigger on select event
onRemove={this.onRemove} // Function will trigger on remove event
displayValue="name" // Property name to display in the dropdown options
/>
    <Form.Control as="select" >
      {this.state.ingredients}
    </Form.Control>
   
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>cookingMethod</Form.Label>
    <Form.Control type="text" placeholder="enter dish cookingMethod" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>time</Form.Label>
    <Form.Control type="number" placeholder="enter dish time" />
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