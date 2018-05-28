import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Understanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understanding: '',
           
        }
    }


    handleUnderstandingChange = event => {
        this.setState({
            understanding: event.target.value,
        })
    }

    sendUnderstandingInfo = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_UNDERSTANDING',
            payload: this.state
        }
        this.props.dispatch(action);
        this.props.history.push('/3');
    }

    render() {
        return (
            <div>
                <h3>How well are you understanding the material?</h3>
                <form>
                <TextField onChange={this.handleUnderstandingChange} value={this.state.understanding} />
                </form>
                <div>
                    <Button onClick={this.sendUnderstandingInfo} variant="raised" color="primary">Submit</Button>
                </div>
            </div>
        );
    }


}

export default connect()(Understanding);