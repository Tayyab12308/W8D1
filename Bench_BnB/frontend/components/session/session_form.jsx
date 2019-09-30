import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
   return e => this.setState({ [value]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  render() {
    const errors = this.props.errors.map((error, id) =>  <li key={id}>{error}</li>)
   
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formType}</h2>
        
        <ul>
          {errors}
        </ul>
        <label>
          Username
          <input type="text" onChange={this.handleChange('username')} value={this.state.username} />
        </label>
        <label>
          Password
          <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
        </label>
        <input type="submit" value={this.props.formType} />
      </form>
      </>
    )
  }
};

export default SessionForm;