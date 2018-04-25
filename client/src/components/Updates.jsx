import React from 'react';
import UpdateListItem from './UpdateListItem.jsx';
import moment from 'moment';

const Updates = (props) => (
    <div id="update-feed">
        {(()=>{
            let currentColor = 0;
            //alternates title highlight colors for each update rendered
            const changeColor = () => {
                if (currentColor === 3) {
                    currentColor = 1;
                } else {
                    currentColor++;
                }
            }
            //dynamically render updates
            return props.updates.map((update, i) => {
                changeColor()
                return (<UpdateListItem update={update} key={"u" + i} 
                    handleClick={props.handleClick} render={i % 2 === 0} color={currentColor}/>)})
        })()}
        <div id="project-launched-box">
            <h5 id="created-at">{moment(props.createdAt).format('MMMM D, YYYY')}</h5>
            <h3 id="project-launched">Project Launched</h3>
        </div>
    </div>
)

export default Updates;