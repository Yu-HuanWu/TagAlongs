import {connect} from 'react-redux';
import Nav from './nav_bar';
import { logout, receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  console.log(state.entities)
   return {
    user: state.entities.users[state.session.currentUserId]
   }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveUser: (user ) => dispatch(receiveCurrentUser(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);