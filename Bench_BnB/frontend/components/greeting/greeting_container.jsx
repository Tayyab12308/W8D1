import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

  const msp = state => {
    debugger
    return {
    user: state.entities.users[state.session.id]
    }
  }

  const mdp = dispatch => {
    return {
      logout: () => {
        return dispatch(logout());
      }
    }
  }

  export default connect(msp, mdp)(Greeting);