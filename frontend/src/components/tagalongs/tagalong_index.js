import React from 'react';
import { withRouter } from 'react-router-dom';

class TagAlongIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'all'
        }
    }

    componentDidMount() {
        this.props.fetchTagAlongs();
    }

    filter(category) {
        this.setState({
            filter: `${category}`
        })
    }

    renderTagAlongs() {
        
    }

    render() {
        return (
            <div className="tagalongs-index-container">
                <div className="filter-bar">
                    <ul className="filter-bar-list">
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onClick={this.filter(all)}>All</button>
                        </li>
                    </ul>
                </div>
                <div className="tagalongs-index">
                    { this.renderTagAlongs() }
                </div>
            </div>
        )
    }
}

export default withRouter(TagAlongIndex);