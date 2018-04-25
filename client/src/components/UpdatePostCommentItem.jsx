import React from 'react';
import moment from 'moment';

const UpdatePostCommentItem = (props) => (
    <div className="update-post-comment-item">
        <img className="comment-avatar" src={props.comment.avatar} alt="Smiley face"/>
        <div className="username-date-bar">
            <span className="comment-username">&nbsp;{props.comment.username}</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span className="comment-date">{moment(props.comment.date).fromNow()}</span>
        </div>
        <p className="comment-body">{props.comment.body}</p>
    </div>
)



export default UpdatePostCommentItem;