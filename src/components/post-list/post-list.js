import React, {Component} from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    isEmpty(item) {
        for (let key in item) {
            return true;
        }
        return false;
    }
    render() {
        const {posts, onDelete, onToggleImportant, onToggleLike} = this.props;

        const element = posts.map(item => {
            if (typeof(item) === 'object' && this.isEmpty(item)) {;
                const {id, ...itemProps} = item;
                return (
                    <li key={id} className="list-group-item">
                        <PostListItem 
                            {...itemProps}
                            onDelete={() => onDelete(id)}
                            onToggleImportant={() => onToggleImportant(id)}
                            onToggleLike={() => onToggleLike(id)}
                        />
                    </li>
                )
            }
            return;
        })
        return (
            <ul className="app-list list-group">
                {element}
            </ul>
        )
    }
}