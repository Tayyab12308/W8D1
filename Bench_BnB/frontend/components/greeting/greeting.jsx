import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  // componentDidMount() {
  //   this.props.
  // }

  render() {
    if (this.props.user) {
      return (
        <>
          <h2>Hi {this.props.user.username}!</h2>
          <button onClick={this.props.logout}>Logout</button>
        </>
      )
    } else {
      return (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Log in</Link>
        </>
      )
    }
  }
}

export default Greeting;