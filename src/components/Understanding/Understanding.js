import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
    }

    render() {
        return (
            <div>
                <h3>How well are you understanding the material?</h3>
                <form onSubmit={this.sendUnderstandingInfo}>
                <input onChange={this.handleUnderstandingChange} value={this.state.understanding} />
                <input type="submit" value="Submit" />
                </form>
                <Link to="/3">Next</Link>
            </div>
        );
    }


}

export default connect()(Understanding);