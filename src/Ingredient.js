import React, { Component } from 'react';
import {Form ,Button} from 'react-bootstrap';

class Ingredient extends Component {

    constructor(props) {
        super(props);
        
     this.state={
       name:'',
       image:'',
       calories:'',
       apiUrl:'http://localhost:59472/api/ingredient/',
     }
        
    }
    


    render() {
        return( <div>j</div>);
    }
}

export default Ingredient;

