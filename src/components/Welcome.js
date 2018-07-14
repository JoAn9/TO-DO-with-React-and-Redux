import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import imageBackground from '../images/235.jpg';
import {createUser} from '../actions/user';


const myStyle = {
  backgroundImage: "url("+imageBackground+")",
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  // alignContent: 'spaceBetween',
  justifyContent: 'flexEnd',
  flexDirection: 'column',
}

class Welcome extends React.Component {
  state = {
    user: {
      name: '',
      band: '',
    }

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
      <div style={myStyle}>
        <h2 style={{flexGrow: 1, textAlign: 'center', marginTop: 120}}>Hello {this.state.name}</h2>
        <form onSubmit={this.submitUser} style={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
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
          <Button bsStyle="info" type="submit" style={{width: 200, marginBottom: 20, textAlign: 'center', }}><Link to="/list">Next</Link></Button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userFromRedux: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
