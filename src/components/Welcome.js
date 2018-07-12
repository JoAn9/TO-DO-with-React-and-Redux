import React from "react";
import imageBackground from '../images/235.jpg';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


const myStyle = {
  backgroundImage: "url("+imageBackground+")",
  backgroundSize: 'cover',
  height: '90vh',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const alignCenter = {
  textAlign: 'center'
}

class Welcome extends React.Component {
  state = {
    name: '',
  }

  handleChange = stateName => event => {
    this.setState({
      [stateName]: event.target.value,
    })
  }

  render() {
    return (
      <div style={myStyle}>
        <h2 style={alignCenter}>Hello {this.state.name}</h2>
        <form style={alignCenter}>
          <FormGroup
            controlId="formBasicText"
            style={{display: 'flex', justifyContent: 'center'}}
            // validationState={this.getValidationState()}
          >
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Your Name"
              onChange={this.handleChange('name')}
              style={alignCenter}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default Welcome;