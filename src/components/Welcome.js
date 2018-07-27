import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from "react-router-dom";
// import { FormGroup, FormControl } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import imageBackground from '../images/235.jpg';
import {createUser} from '../actions/user';


const container = {
  backgroundImage: "url("+imageBackground+")",
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  alignContent: 'spaceBetween',
  justifyContent: 'center',
  flexDirection: 'column',
};

const styleHeader = {
  flexGrow: 1,
  textAlign: 'center',
  marginTop: 120
};

const styleForm = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center'
};

const styleButton = {
  width: 200,
  // textAlign: 'center',
  position: 'fixed',
  bottom: 20,
};

class Welcome extends React.Component {
  state = {
    user: {
      name: '',
      band: '',
    },
    buttonDisabled: true,

  }

  handleChange = stateName => event => {
    const {user} = this.state;
    const newUser = {
      ...user,
      [stateName]: event.target.value,
    };
    this.setState({
      user: newUser,
    })
  }

  submitUser = event => {
    event.preventDefault();
    console.log('submit & createUser');
    this.props.createUser(this.state.user.name, this.state.user.band);
  }

  render() {
    // const { classes } = this.props;
    console.log(this.state.user);
    console.log(this.props.userFromRedux);
    console.log(this.props.tasksToDo);
    return (
      <div style={container}>
        <h2 style={styleHeader}>Hello {this.state.user.name}</h2>
        <form style={styleForm} noValidate autoComplete="off" onSubmit={this.submitUser} style={styleForm}>
          <TextField
            id="name"
            label="Name"
            value={this.state.user.name}
            onChange={this.handleChange('name')}
            margin="normal"
            style={{margin: 20}}
          />
          <TextField
            id="band"
            label="Band"
            value={this.state.user.band}
            onChange={this.handleChange('band')}
            margin="normal"
            style={{margin: 20}}
          />
          <Button type="submit">Create User</Button>
        </form>
        <Link to="/list">Add some tasks to do</Link>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    userFromRedux: store.user,
    tasksToDo: store.tasks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
