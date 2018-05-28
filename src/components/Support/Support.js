import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Support extends Component {
     constructor(props) {
        super(props);
        this.state = {
            support: '',    
        }
    }


    handleSupportChange = event => {
        this.setState({
            support: event.target.value,
        })
    }

    sendSupportInfo = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_SUPPORT',
            payload: this.state
        }
        this.props.dispatch(action);
        this.props.history.push('/4');
    }

    render() {
        return (
            <div>
                <h3>Are you feeling supported?</h3>
                <form>
                <TextField onChange={this.handleSupportChange} value={this.state.support} />
                </form>
                <div>
                    <Button onClick={this.sendSupportInfo} variant="raised" color="primary">Submit</Button>
                </div>
            </div>
        );
    }

}

export default connect()(Support);