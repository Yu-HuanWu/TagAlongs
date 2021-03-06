import {connect} from 'react-redux';
import Nav from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
   return {
     user: state.session.user
   }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);