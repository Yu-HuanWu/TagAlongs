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
                            className="accepted-tagalong-item user-achievement-style">
                                <h1>{tagalong.title}</h1>
                                <span><p>Category: &nbsp; </p> <h3>{tagalong.category}</h3></span>
                                <span><p>Starting Point: &nbsp; </p> <h3>{tagalong.startLocation}</h3></span>
                                <span><p>End Point: &nbsp;</p> <h3>{tagalong.endLocation}</h3></span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default AcceptedTagAlongs;