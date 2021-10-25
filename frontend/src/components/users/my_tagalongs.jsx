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
      .then(()=>window.location.reload(false))
    }

    handleDelete(tagAlong){
      this.props.deleteTag(tagAlong)
        .then(() => window.location.reload(false))
    }
    
    renderButton(tagAlong){
      if(tagAlong.completed === false && tagAlong.acceptedBy.length > 0){
        return (
          <div>
            <button className="my-tagalongs-button" onClick={()=>this.handleComplete(tagAlong._id)}>Mark as Complete</button>
            <button className="my-tagalongs-button" onClick={()=>this.handleDelete(tagAlong._id)}>Delete TagAlong</button>
          </div>
          )
        } else if (tagAlong.completed === true) {
          return(
            <div className="my-tagalongs-completed-label">TagAlong Completed!</div>
            )
        } else {
          return (
            <div className="my-tagalongs-completed-label">TagAlong has not been accepted by another user yet.
                <button className="my-tagalongs-button" onClick={()=>this.props.deleteTag(tagAlong._id)}>Delete TagAlong</button>
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
                            className="accepted-tagalong-item user-achievement-badge">
                                <h1>{tagalong.title}</h1>
                                <p>Category: &nbsp; <h3>{tagalong.category}</h3></p>
                                <p>Starting Point: &nbsp; <h3>{tagalong.startLocation}</h3></p>
                                <p>End Point: &nbsp; <h3>{tagalong.endLocation}</h3></p>
                                {this.renderButton(tagalong)}
                                
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default withRouter(MyTagAlongs);