import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MapIndexContainer from '../map/map_index_container';
import './tagalong_index.scss'

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
                            <Link to={`/map/${tagalong._id}`}>
                                <h1>{tagalong.title}</h1>
                                <p>Category: &nbsp; <h3>{tagalong.category}</h3></p>
                                <p>Starting Point: &nbsp; <h3>{tagalong.startLocation}</h3></p>
                                <p>End Point: &nbsp; <h3>{tagalong.endLocation}</h3></p>
                            </Link>
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="tagalongs-index-container">
                <div className="tagalongs-index-section">
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
                </div>

                <div className="mapindex">
                    <MapIndexContainer filter={this.state.filter}/>
                </div>
            </div>
        )
    }
}

export default withRouter(TagAlongIndex);