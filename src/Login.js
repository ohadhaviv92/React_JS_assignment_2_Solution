

import React from 'react'


class Login extends React.Component {

    constructor(props){
        super(props)
        this.state={
            Email:"",
            Pass:"",
            lable:""
        }
    }

    emailCh=(e)=>{
        this.setState({Email:e.target.value})
    }

    passCh=(e)=>{
        this.setState({Pass:e.target.value})
        console.log(this.state.Pass)
    }

    login =() => {
    
       if(this.state.Email=="avi" && this.state.Pass=="1234"){
           this.setState({lable:"hello " + this.state.Email});
       }
       else{
        this.setState({lable:"error"});

       }
    }
    render() {
    return (<div>
        Email : <input type='text' value={this.state.Email} onChange={this.emailCh}></input> <br></br>
        Pass : <input type='text' value={this.state.Pass} onChange={this.passCh}></input><br></br>
        <input type="button" onClick={this.login} value="login"></input>
    <div>{this.state.lable}</div>
    </div>)
    }
  }

export default Login;