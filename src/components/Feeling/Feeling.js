import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


class Feeling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: '', 
        }
    }

    handleFeelingChange = event =>  {
        this.setState({
            feeling: event.target.value
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
        this.props.history.push('/2');
    }

    render() {
        return (
            <div>
                <h3>How are you feeling?</h3>
                <form onSubmit={this.sendFeelingInfo}>
                <TextField onChange={this.handleFeelingChange} value={this.state.feeling} />
                </form>
                <div>
                    <Button onClick={this.sendFeelingInfo} variant="raised" color="primary">Submit</Button>
                </div>
            </div>
        );
    }


}

export default connect()(Feeling);