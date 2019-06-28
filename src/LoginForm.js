import React from 'react';

class LoginForm extends React.Component {

  handleSubmit = (e) => {
    this.props.handleSubmit(e)
  }

  handleChange = (e) => {
    this.props.handleChange(e.target.value)
  }

  render(){
    // debugger
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit} >
          <input type="text" placeholder="Enter a username..." value={this.props.input} onChange={this.handleChange}/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;