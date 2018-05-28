import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class SubmissionSuccess extends Component {
    render() {
        return (
            <div>
                <h2>Thank you for your feedback!</h2>
                <Link to="/">Leave New Feedback</Link>
            </div>
        );
    }
}











export default connect()(SubmissionSuccess);