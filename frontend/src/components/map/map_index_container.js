import { connect } from "react-redux";
import MapIndex from "./map_index";
import { fetchTagAlongs } from "../../actions/tagalong_actions";

const mapStateToProps = (state) => ({
  tagAlongs: state.entities.tagAlongs,
  totalState: state
})

const mapDispatchToProps = dispatch => ({
  fetchTagAlongs: id => dispatch(fetchTagAlongs())
})


export default connect(mapStateToProps,mapDispatchToProps)(MapIndex)
