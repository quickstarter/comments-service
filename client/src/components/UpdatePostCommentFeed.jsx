import React from 'react';
import UpdatePostCommentItem from './UpdatePostCommentItem.jsx'

const UpdatePostCommentFeed = (props) => (
    <div>
        <h4 id="update-post-comments">Comments</h4>
        <div className="login-box">
            <h6 id="comments-login">Only backers can post comments. <button className="log-in-button">Log In</button></h6>
        </div>
        {props.comments.map((comment, i)=> <UpdatePostCommentItem comment={comment} key={"uc"+i}/>)}
    </div>
)

export default UpdatePostCommentFeed;