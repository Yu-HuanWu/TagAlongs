import React from 'react';

class AcceptedTagAlongs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            state: 'default'
        }
    }

    componentDidMount() {
        this.props.fetchAccepted(this.props.currentUser._id);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="accepted-tagalongs-list">
                <ul className="accepted-tagalongs user-achievement-list">
                    {this.props.acceptedTagAlongs.slice(0).reverse().map((tagalong, i) => (
                        <li key={`tagalong-${i}`}
                            className="accepted-tagalong-item user-achievement-badge">
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

export default AcceptedTagAlongs;