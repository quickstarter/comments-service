import React from 'react';
import CommentItem from './CommentItem.jsx'

const CommentsFeed = (props) => (
    <div className="comments-feed">
        <div className="login-comments-box">
            <div className="comments-login-box">
                <h6 id="comments-login">Only backers can post comments. <button className="log-in-button">Log In</button></h6>
            </div>
            <div className="right-side-comments-box">
                <h6 className="box-text">Use this space to cheer the creator along, and talk to your fellow backers.</h6>
                <h6 className="box-text">Have a question? <button className="faq-button">Check out the FAQ</button></h6>
            </div>
        </div>
        {props.comments.map((comment, i) => <CommentItem comment={comment} key={"c" + i}/>)}
    </div>
)

export default CommentsFeed;