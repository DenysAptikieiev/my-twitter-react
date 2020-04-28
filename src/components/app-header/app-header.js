import React, {Component} from 'react';
import './app-header.css';

export default class AppHeader extends Component {
    render() {
    const {liked, allPosts} = this.props;

        return (
            <div className="app-header d-flex">
                <h1>Denys Aptikieiev</h1>
            <h2>{allPosts} Записей, из них понравилось {liked}</h2>
            </div>
        )
    }
}

