import React from 'react';
import { completeTag } from '../../util/tagalong_api_util';
import { withRouter } from 'react-router';
import "./my_tagalongs.scss"

class MyTagAlongs extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          tagAlongs:[]
        }
        this.handleComplete = this.handleComplete.bind(this)
        this.renderButton = this.renderButton.bind(this)
        this.props.fetchMyTags(this.props.currentUser._id).then((data)=>this.setState({tagAlongs:data.tagAlongs.data}))
        
      }

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    handleComplete(tagAlong){
      completeTag(tagAlong)
        .then(() => window.location.reload(false))
    }

    handleDelete(tagAlong, i){
      this.props.deleteTag(tagAlong, i)
        .then(() => this.props.fetchMyTags(this.props.currentUser._id).then((data)=>this.setState({tagAlongs:data.tagAlongs.data})))
    }
    
    renderButton(tagAlong, i){
      if(tagAlong.completed === false && tagAlong.acceptedBy.length > 0){
        return (
          <div>
            <button className="my-tagalongs-button" onClick={()=>this.handleComplete(tagAlong._id)}>Mark as Complete</button>
            <button className="my-tagalongs-button" onClick={()=>this.handleDelete(tagAlong._id, i)}>Delete TagAlong</button>
          </div>
          )
        } else if (tagAlong.completed === true) {
          return(
            <div className="my-tagalongs-completed-label">TagAlong Completed!</div>
            )
        } else {
          return (
            <div className="my-tagalongs-completed-label">TagAlong has not been accepted by another user yet.
              <button className="my-tagalongs-button" onClick={()=>this.handleDelete(tagAlong._id, i)}>Delete TagAlong</button>
            </div>
          )
        }
    }
    
    render() {
        return (
            <div className="accepted-tagalongs-list">
                <ul className="accepted-tagalongs user-achievement-list">
                    {this.state.tagAlongs.slice(0).reverse().map((tagalong, i) => (
                        <li key={`tagalong-${i}`}
                            className="accepted-tagalong-item user-achievement-style">
                                <h1>{tagalong.title}</h1>
                                <span><p>Category: &nbsp;</p> <h3>{tagalong.category}</h3></span>
                                <span><p>Starting Point: &nbsp;</p> <h3>{tagalong.startLocation}</h3></span>
                                <span><p>End Point: &nbsp;</p> <h3>{tagalong.endLocation}</h3></span>
                                {this.renderButton(tagalong, i)}
                                
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default withRouter(MyTagAlongs);