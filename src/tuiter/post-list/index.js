import React from "react";
import PostItem from "./post-item";
import postsArray from './posts-details.json';

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;