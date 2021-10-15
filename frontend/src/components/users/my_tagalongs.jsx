import React from 'react';

class MyTagAlongs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMyTags(this.props.currentUser._id);
    }

    render() {
        return (
            <div className="accepted-tagalongs-list">
                <ul className="accepted-tagalongs">
                    {this.props.myTagAlongs.map((tagalong, i) => (
                        <li key={`tagalong-${i}`}
                            className="accepted-tagalong-item">
                                <h1>{tagalong.title}</h1>
                                <p>Category: &nbsp; <h3>{tagalong.category}</h3></p>
                                <p>Starting Point: &nbsp; <h3>{tagalong.startLocation}</h3></p>
                                <p>End Point: &nbsp; <h3>{tagalong.endLocation}</h3></p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default MyTagAlongs;