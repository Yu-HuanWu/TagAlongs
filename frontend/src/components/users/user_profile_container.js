import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
    return {
        user: state.session.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);