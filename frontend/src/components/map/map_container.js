import { connect } from "react-redux";
import MapComponent from "./map";
import { fetchTag } from "../../actions/tagalong_actions";

const mapStateToProps = (state,ownProps) => ({
  TagAlong: state.entities.tagAlongs,
  TagID: ownProps.match.params.TagID,
  totalState: state
})

const mapDispatchToProps = dispatch => ({
  fetchTag: id => dispatch(fetchTag(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(MapComponent)
