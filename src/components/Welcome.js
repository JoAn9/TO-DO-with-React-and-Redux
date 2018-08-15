import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import imageBackground from '../images/235.jpg';
import { createUser } from '../actions/user';
import Header from './Header';


const styles = theme => ({
  container: {
    backgroundImage: 'url(' + imageBackground + ')',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
  },
  textFieldStyle: {
    marginLeft: 70,
    marginRight: 70,
    width: 200,
  },
  buttonStyle: {
    marginLeft: 70,
    marginRight: 70,
    marginTop: 50,
    width: 150,
  },
});


class Welcome extends React.Component {
  state = {
    user: {
      name: '',
      band: '',
    },
    buttonDisabled: true,
  };

  handleChange = stateName => event => {
    const { user } = this.state;
    const newUser = {
      ...user,
      [stateName]: event.target.value,
    };
    this.setState({
      user: newUser,
    });
  };

  submitUser = event => {
    event.preventDefault();
    this.props.createUser(this.state.user.name, this.state.user.band);
    this.props.history.push('/list');
  };

  render() {
    console.log(this.props.tasksToDo);
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item style={{margin: 50}}>
            <h2>Hello {this.state.user.name}</h2>
          </Grid>
          <Grid item>
            <form noValidate autoComplete="off" onSubmit={this.submitUser}>
              <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="name"
                    label="Your Name"
                    value={this.state.user.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    className={classes.textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="band"
                    label="Your Favourite Band"
                    value={this.state.user.band}
                    onChange={this.handleChange('band')}
                    margin="normal"
                    className={classes.textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="raised" type="submit" className={classes.buttonStyle} color="primary">
                    Create User
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid container direction="column" justify="flex-end" alignItems="center">
          <Grid item style={{marginBottom: 60}}>
            <Header />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(store) {
  return {
    userFromRedux: store.user,
    tasksToDo: store.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createUser,
      push,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Welcome));
