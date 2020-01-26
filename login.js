import React from 'react';
import './App.css';
import axios from 'axios';

const auth_url = "http://localhost:5030/login";

class App extends React.Component {


  state = {
    employeeId: "",
    password: "" ,
    login: false
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.sendRequest();
  };


  sendRequest = () => { 
    const { employeeId, password } = this.state;
    const headers = {
       'Content-Type': 'application/json'
    }
    axios
    .post(
      auth_url,
      {
       employeeId: employeeId,
       password: password
      },
      { headers }
      )
        .then(res => {
          console.log(res.data.response);
          if(res.data.response === "Successful")
          this.setState({login : true});
        })
        .catch(err =>{
          console.log("error generated");
        });
        
  }

render() {
    return (
      <div>
      <div className="main">
      <form className="form2">
      <input onChange={this.handleChange} name="employeeId" className="un" type="text" placeholder="Employee ID" align="middle" />
      <input onChange={this.handleChange} name="password" className="pass" type="password" placeholder="Password" align="middle" />
      <button className="submit" align="center" onClick={this.handleSubmit} >Login</button>
      </form>
      </div>
      </div>
    );
}
}

export default App;

