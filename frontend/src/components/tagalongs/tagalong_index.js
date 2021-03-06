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
        window.scrollTo(0, 0)
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
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return (
            <ul className="tagalong-index-list">
                { tagAlongs.splice(0).reverse().map((tagalong, i) => {
                    let year = tagalong.startingTime.slice(0, 4);
                    let month = tagalong.startingTime.toString().slice(5, 7);
                    let date = tagalong.startingTime.toString().slice(8, 10);
                    let hour;
                    let ampm;
                    if (tagalong.startingTime.toString().slice(11, 13) === 12) {
                        hour = 12;
                        ampm = 'PM';
                    } else if (tagalong.startingTime.toString().slice(11, 13) === 24) {
                        hour = 12;
                        ampm = 'AM';
                    } else if (tagalong.startingTime.toString().slice(11, 13) > 12) {
                        hour = tagalong.startingTime.toString().slice(11, 13) - 12;
                        ampm = 'PM';
                    } else {
                        hour = tagalong.startingTime.toString().slice(11, 13);
                        ampm = 'AM';
                    }
                    let minutes = tagalong.startingTime.toString().slice(14, 16)
                    return (
                    <li key={`tagalong-${i}`}
                    className="tagalong-index-item">
                            
                            <Link to={`/map/${tagalong._id}`}>
                                <h1>{tagalong.title}</h1>
                                <span><p>Category: &nbsp;</p><h3>{tagalong.category}</h3></span>
                                <span><p>Starting Point: &nbsp; </p><h3>{tagalong.startLocation}</h3></span>
                                <span><p>End Point: &nbsp;</p> <h3>{tagalong.endLocation}</h3></span>
                                <span><p>Start Time: &nbsp;</p> <h3>{month} / {date} / {year}, {hour}:{minutes} {ampm}</h3></span>
                                <span><p>Duration: &nbsp;</p> <h3>{tagalong.duration}</h3></span>
                            </Link>
                    </li> )
                })}
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
                                    onClick={() => this.filter('chores')}>Others</button>
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