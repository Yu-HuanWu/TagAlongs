import React from 'react';
import RatingsForm from '../ratings/rating_container';

class CompletedTagAlongs
 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          tagAlongs:[]
        }
        
        this.props.fetchCompleted(this.props.currentUser._id).then((data)=>
        this.setState({tagAlongs:data.acceptedTagAlongs.data})
        )
        
      }


    componentDidMount() {
        this.props.fetchCompleted(this.props.currentUser._id);
    }

    render() {
        return (
            <div className="accepted-tagalongs-list">
                <ul className="accepted-tagalongs user-achievement-list">
                    {this.state.tagAlongs.map((tagalong, i) => (
                        <li key={`tagalong-${i}`}
                            className="accepted-tagalong-item user-achievement-badge">
                                <h1>{tagalong.title}</h1>
                                <p>Category: &nbsp; <h3>{tagalong.category}</h3></p>
                                <p>Starting Point: &nbsp; <h3>{tagalong.startLocation}</h3></p>
                                <p>End Point: &nbsp; <h3>{tagalong.endLocation}</h3></p>
                                 <RatingsForm tagalong={tagalong} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CompletedTagAlongs
;