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
        });
    }

    renderTagAlongs() {
        if (!this.props.tagAlongs) {
            return null;
        }
        let all = Object.values(this.props.tagAlongs);
        console.log(all);
        // let filtered = all.filter()
        if (all && this.state.filter === 'all') {
            return (
                <ul className="tagalong-index-list">
                    { all.map((tagalong, i) => (
                        <li key={`tagalong-${i}`}
                            className="tagalong-index-item">
                                <h1>{tagalong.title}</h1>
                                {tagalong.category}
                                {tagalong.startLocation}
                                {tagalong.endLocation}
                                {tagalong.body}
                        </li>
                    ))}
                </ul>
            )
        }
    }

    render() {
        return (
            <div className="tagalongs-index-container">
                <div className="filter-bar">
                    <ul className="filter-bar-list">
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onChange={() => this.filter('all')}>All</button>
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