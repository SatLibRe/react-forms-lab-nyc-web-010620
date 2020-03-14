import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "", 
      password: ""
    };
  }

  handleNameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.state.username && this.state.password && this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit= {this.handleSubmit}> 
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleNameChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange} value={this.state.value}/>
          </label>
        </div>
        <div>
          <button  type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
