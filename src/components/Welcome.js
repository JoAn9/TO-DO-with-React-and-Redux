import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
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
    this.props.createUser(this.state.user);
  }

  render() {
    console.log(this.state.user);
    console.log(this.props.userFromRedux);
    return (
      <div style={container}>
        <h2 style={styleHeader}>Hello {this.state.user.name}</h2>
        <form onSubmit={this.submitUser} style={styleForm}>
          <FormGroup
            controlId="formBasicText"
            // validationState={this.getValidationState()}
          >
            <FormControl
              type="text"
              value={this.state.user.name}
              placeholder="Your Name"
              onChange={this.handleChange('name')}
              style={{marginBottom: 20}}
            />
            <FormControl.Feedback />
            <FormControl
              type="text"
              value={this.state.user.band}
              placeholder="Your Favourite Band"
              onChange={this.handleChange('band')}
            />
          </FormGroup>
          <Button bsStyle="info" type="submit" style={styleButton}>
            <Link to="/list">Next</Link>
          </Button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    userFromRedux: store.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
