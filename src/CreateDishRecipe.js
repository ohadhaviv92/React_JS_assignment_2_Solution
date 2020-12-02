
import React, { Component } from 'react';
import {Form ,Button} from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';




class CreateDishRecipe extends Component {

    constructor(props) {
        super(props);
        
     this.state={
       name:'',
       image:'',
       ingredients:null,
       time:'',
       cookingMethod:'',
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
    a.push({id: element.Id, name: element.Name, image:element.Image, calories:parseInt(element.Calories) });
});

this.setState({options:a});

},
(error) => {
console.log("err post=", error);
});


}

onSelect =(e) =>{
    console.log(e);
    let a=this.state.selectedValue;
    a.push(e);
    this.setState({selectedValue:a});
}

onRemove =(e) =>{

    var filtered = this.state.selectedValue.filter(function(el) { return el.id !== e.id; }); 

    this.setState({selectedValue:filtered});
}



handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

handleSubmit = (event) => {


    console.log(this.state);



    const data = { 
        name: this.state.name,
        image: this.state.image,
        cookingMethod:this.state.cookingMethod,
        ingredients:this.state.selectedValue[0],
        time:parseInt(this.state.time) ,
        };

        console.log(data);


        fetch(this.state.apiUrl2, {
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
                alert("recipe added");
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
                                <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" name="name"  placeholder="Enter dish name" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" name="image"   placeholder="enter image url" onChange={this.handleChange} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1" >
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
    <Form.Control type="text" name="cookingMethod" placeholder="enter dish cookingMethod" onChange={this.handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>time</Form.Label>
    <Form.Control type="number" name="time" placeholder="enter dish time" onChange={this.handleChange} />
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

export default CreateDishRecipe;