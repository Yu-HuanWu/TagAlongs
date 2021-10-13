import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MapIndexContainer from '../map/map_index_container';

class TagAlongIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'all',
            chosenTagAlongs:[]
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
        let all = Object.values(this.props.tagAlongs);
        let filtered = all.filter(tagalong => {
            return tagalong.category === this.state.filter
        })
        let tagAlongs;
        if (this.state.filter === 'all') {
            tagAlongs = all;
        } else {
            tagAlongs = filtered;
        }
        return (
            <ul className="tagalong-index-list">
                { tagAlongs.map((tagalong, i) => (
                    <li key={`tagalong-${i}`}
                        className="tagalong-index-item">
                            <Link to={`/map/${tagalong._id}`}>Go to Map</Link>
                            <h1>{tagalong.title}</h1>
                            <h3>{tagalong.category}</h3>
                            <h3>{tagalong.startLocation}</h3>
                            <h3>{tagalong.endLocation}</h3>
                            <h2>{tagalong.body}</h2>
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="tagalongs-index-container">
                <div className="filter-bar">
                    <ul className="filter-bar-list">
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onClick={() => this.filter('all')}>All</button>
                        </li>
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onClick={() => this.filter('chat')}>Chat</button>
                        </li>
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onClick={() => this.filter('stroll')}>Stroll</button>
                        </li>
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onClick={() => this.filter('jog')}>Jog</button>
                        </li>
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onClick={() => this.filter('groceries')}>Groceries</button>
                        </li>
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onClick={() => this.filter('chores')}>Other Trip</button>
                        </li>
                        <li className="filter-bar-item">
                            <button className="filter-bar-button"
                                onClick={() => this.filter('misc')}>Miscellaneous</button>
                        </li>
                    </ul>
                </div>
                <div className="tagalongs-index">
                    { this.renderTagAlongs() }
                </div>
                <MapIndexContainer filter={this.state.filter}/>
            </div>
        )
    }
}

export default withRouter(TagAlongIndex);