import React from "react";
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import imageBackground from '../images/235.jpg';
import ToDoList from "./ToDoList";



const myStyle = {
  backgroundImage: "url("+imageBackground+")",
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  alignContent: 'spaceBetween',
  justifyContent: 'center',
  flexDirection: 'column',


}

class Welcome extends React.Component {
  state = {
    name: '',
    band: '',
  }

  handleChange = stateName => event => {
    console.log(event);
    this.setState({
      [stateName]: event.target.value,
    })
  }

  render() {
    return (
      <div style={myStyle}>
        <h2 style={{flexGrow: 1, textAlign: 'center', marginTop: 120}}>Hello {this.state.name}</h2>
        <form style={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
          <FormGroup
            controlId="formBasicText"
            // validationState={this.getValidationState()}
          >
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Your Name"
              onChange={this.handleChange('name')}
            />
            <FormControl.Feedback />
            <FormControl
              type="text"
              value={this.state.band}
              placeholder="Your Favourite Band"
              onChange={this.handleChange('band')}
            />
          </FormGroup>
        </form>
        <Button bsStyle="info" style={{width: 200, marginBottom: 20, textAlign: 'center'}}><Link to="/list">Next</Link></Button>
      </div>
    )
  }
}

export default Welcome;