import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

let isEmpty = (item) => {
    for (let key in item) {
        return true;
    }
    return false;
}

const PostList = ({posts}) => {
    const element = posts.map(item => {
        if (typeof(item) === 'object' && isEmpty(item)) {;
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem {...itemProps}/>
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

export default PostList;