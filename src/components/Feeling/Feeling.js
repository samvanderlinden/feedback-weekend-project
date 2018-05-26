import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Feeling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: '',
        }
    }

    handleFeelingChange = event => {
        this.setState({
            feeling: event.target.value,
        })
        console.log('event.target.value', event.target.value)
    }

    sendFeelingInfo = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_FEELING',
            payload: this.state
        };
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <h3>How are you feeling?</h3>
                <form onSubmit={this.sendFeelingInfo}>
                <input onChange={this.handleFeelingChange} value={this.state.feeling} />
                <input type="submit" value="Submit" />
                </form>
                <Link to="/2">Next</Link>
            </div>
        );
    }


}

export default connect()(Feeling);