import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
)

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackList: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        axios.get('/api/newComment')
            .then((response) => {
                console.log('GET response.data', response.data);
                
                this.setState({
                    feedbackList: response.data
                });
            })
            .catch((error) => {
                alert('error with GET request', error);
            })
    }


    removeFeedback = id => {
        axios.delete(`/api/newComment/:${this.state.feedbackList[0].id}`)
        .then(response => {
            console.log('this is delete response:', response);
            console.log('delete response.data', response.data)
        })
        .catch((error) => {
            alert('error with DELETE request', error)
        })
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackList.map((feedback) => <tr key={feedback.id}>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                        <td><button onClick={this.removeFeedback}>Remove</button></td></tr>)}
                    </tbody>
                </table>
                {JSON.stringify(this.state.feedbackList)}
            </div>
        );
    }

}


export default connect(mapReduxStateToProps)(Admin);