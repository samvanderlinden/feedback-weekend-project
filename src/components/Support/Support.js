import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    }

    render() {
        return (
            <div>
                <h3>Are you feeling supported?</h3>
                <form onSubmit={this.sendSupportInfo}>
                <input onChange={this.handleSupportChange} value={this.state.support} />
                <input type="submit" value="Submit" />
                </form>
                <Link to="/4">Next</Link>
            </div>
        );
    }

}

export default connect()(Support);