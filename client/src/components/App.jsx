import React from 'react';
import axios from 'axios';
import Updates from './Updates.jsx';
import UpdatePostView from './UpdatePostView.jsx';
import CommentsFeed from './CommentsFeed.jsx';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            view: 'comments',
            createdAt: null,
            updateView: {
                previous: null,
                current: null,
                next: null
            },
            updates: [],
            comments: []
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView(option) {
        const updates = this.state.updates;
        console.log("view changed!")

        let previous = null;
        let next = null;
        let current = null;
        if (option !== 'updates' && option !== 'comments') { //if an update post is clicked on 
            //find post by looping over array, starting from oldest posts first 
            for (var i = updates.length - 1; i >= 0; i--) {
                if (updates[i].title === option) { // if title matches
                    current = updates[i]; //save clicked on update to state
                    if (updates[i + 1]) { //if not the oldest post
                        previous = updates[i + 1].title; //save previous post title
                    }
                    if (i) { //if not the newest post
                        next = updates[i - 1].title; //save next post title
                    }
                }
            }
        }

        this.setState({
            view: option,
            updateView: {
                previous: previous,
                current: current,
                next: next
            }
        })
    }

    componentDidMount() {
        const context = this;
        axios.get('http://ec2-18-217-165-131.us-east-2.compute.amazonaws.com/api/updates/33')
            .then((response) => {
                console.log(response.data[0])
                context.setState({
                    createdAt: response.data[0].createdAt,
                    updates: response.data[0].updates,
                    comments: response.data[0].comments
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderView() {
        const { view, updateView } = this.state;
        if (view === 'updates') {
            return <Updates createdAt={this.state.createdAt} updates={this.state.updates} comments={this.state.comments} handleClick={(e) => this.changeView(e)} />
        } else if (view === 'comments') {
            return <CommentsFeed comments={this.state.comments} />
        } else {
            return <UpdatePostView updateView={updateView} update={updateView.current} handleClick={(e) => this.changeView(e)} />
        }
    }

    render() {
        return (
            <div className="app">
                {/* <div className="nav">
                    <span className="updates" onClick={() => this.changeView('updates')}>Updates </span>
                    <span className="comments" onClick={() => this.changeView('comments')}> Comments</span>
                </div> */}
                <div className="main">
                    {this.renderView()}
                </div>
            </div>
        )
    }
}

export default App;
