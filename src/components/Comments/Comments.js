import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => {
    {reduxState}
};

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: '',
        }
    }


    handleCommentChange = event => {
        this.setState({
            comments: event.target.value,
        })
    }

    sendCommentInfo = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_COMMENT',
            payload: this.state
        }
        this.props.dispatch(action);
    }

    submitFeedbackForm = () => {
        const feedback = {
            feeling: this.props.reduxState.addInput.feeling,
            support: this.props.reduxState.addInput.support,
            understanding: this.reduxState.addInput.understanding,
            comment: this.reduxState.addInput.comment,
        };
        axios.post('/api/newComment', feedback)
        .then(response => {
            alert('Thank you for your feedback!');
            const action = {
                type: 'SUBMIT_ALL_FEEDBACK',
                payload: feedback,
            }
            this.props.dispatch(action)
        })
        .catch(error => {
            alert('Feedback submission failed:', error);
        })
    }

    render() {
        return (
            <div>
                <h3>Would you like to leave a comment?</h3>
                <form onSubmit={this.sendCommentInfo}>
                <input onChange={this.handleCommentChange} value={this.state.comment} />
                <input type="submit" value="Submit Comment" />
                </form>
                <Link to="/5" onClick={this.submitFeedbackForm}>Next</Link>
            </div>
        );
    }

}





export default connect(mapReduxStateToProps)(Comments);