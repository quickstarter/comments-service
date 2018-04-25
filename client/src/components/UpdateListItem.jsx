import React from 'react';
import moment from 'moment';

const UpdateListItem = (props) => (
    <div className="update-list-item">
        <div className={props.render ? "update-date-right" : "update-date-left"}></div>
        <div className={props.render ? "update-list-item-right" : "update-list-item-left"} onClick={() => props.handleClick(props.update.title)}>
            <h5 className="update-date">{moment(props.update.date).format('MMMM D')}</h5>
            <h3 className="update-title"><span className={(()=>{
                if (props.color === 1) {
                    return "update-title-color-1"
                } else if (props.color === 2) {
                    return "update-title-color-2"
                } else {
                    return "update-title-color-3"
                }
            })()}>{props.update.title}</span></h3>
            <p className="update-body">{props.update.body.split(' ').length > 30 ? //only render first 30 words 
                props.update.body.split(' ').slice(0, 30).join(' ') : props.update.body}... <span className="read-more">Read more</span></p>
            <div className="likes-comments">
                <span className="update-comments">{(() => {
                    if (props.update.comments.length > 1) { return props.update.comments.length + ' Comments' }
                    else if (props.update.comments.length === 1) { return props.update.comments.length + ' Comment' }
                    else { return }
                })()} </span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span className="update-likes"> {(() => {
                    if (props.update.likes > 1) { return props.update.likes + ' Likes' }
                    else if (props.update.likes === 1) { return props.update.likes + ' Like' }
                    else { return }
                })()} </span>
            </div>
        </div>
    </div>
)

export default UpdateListItem;