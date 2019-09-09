import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    if (this.props.formType === 'signup') {
      this.buttonText = "Sign Up";
      this.linkText = "Log In"
      this.linkTo = "/login";
    } else {
      this.buttonText = "Log In";
      this.linkText = "Sign Up"
      this.linkTo = "/signup";
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    let errors = this.props.errors.session;
    if (errors) {
      errors = errors.map((error) => {
        return <section key={error}>{error}</section>
      });
    }
    // console.log(this.props);
    // Object.values(this.props.session).map((array) => {
    //   errors.concat(array);
    // });
    return (
      <div>
        <Link to={this.linkTo}>{this.linkText}</Link>
        <form onSubmit={this.handleSubmit}>
          <label>Username
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          </label>
          <br />
          <label>Password
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
          </label>
          <br />
          <button> {this.buttonText} </ button>
        </form>
        {
          errors
        }
      </div>
    );
  }
}