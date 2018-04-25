import React from 'react';
import UpdatePostCommentFeed from './UpdatePostCommentFeed.jsx';
import moment from 'moment';

const UpdatePostView = (props) => (
     <div className="update-post-view">
        <h5 className="update-post-date">{moment(props.update.date).format('MMMM D, YYYY')}</h5>
        <h2 className="update-post-title">{props.update.title}</h2>
        <div className="comments-like-bar">
            <span className="update-post-comments">{props.update.comments.length === 1 ? props.update.comments.length + ' Comment ' : props.update.comments.length + ' Comments '}</span>
            <button className="like-button" type="button"><span className="heart">♥</span> Like</button>
            <span className="update-post-likes"> {props.update.likes === 1 ? props.update.likes + ' Like' : props.update.likes + ' Likes'}</span>
        </div>
        <p className="update-post-body">{props.update.body}</p>
        <div className="previous-next-update-bar">
            {(() => {if (props.updateView.previous) return <button id="previous" onClick={() => props.handleClick(props.updateView.previous)}>&lt; Previous Update</button>})()} 
            {(() => {if (props.updateView.next) return <button id="next" onClick={() => props.handleClick(props.updateView.next)}>Next Update &gt;</button>})()}
        </div>
        <div className="bottom-like-bar border">
            <button className="like-button bottom-like" type="button"><span className="heart">♥</span> Like</button>
        </div>
        <UpdatePostCommentFeed comments={props.update.comments}/>
    </div>
)

export default UpdatePostView;