import React, { Component } from 'react';

class signupTest extends Component {
  constructor(props) {
    super(props);

    // Initialize state for form fields
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  // Handle form field changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform validation and submit the form data to your server or perform any necessary actions
    console.log('Form data submitted:', this.state);
  };

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Nome</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default signupTest;