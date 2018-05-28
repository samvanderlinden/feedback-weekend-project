import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });

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


     removeFeedback (id) {
        console.log('I ve been clicked: ', id)
        axios.delete(`/api/newComment/${id}`)
        .then(response => {
            if (response.status === 200){
                this.fetchData();
            }
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
                <Table>
                    <TableHead>
                        <TableRow>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comment</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedbackList.map((feedback) => <TableRow key={feedback.id}>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                        <td><Button onClick={() => {this.removeFeedback(feedback.id)}} variant="raised" color="secondary">Remove</Button></td></TableRow>)}
                    </TableBody>
                </Table>
            </div>
        );
    }

}


export default connect(mapReduxStateToProps)(Admin);