import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import imageBackground from '../images/congratulation.jpg';


//dodac cancel axios
// dodac toastr i errors handling

const styles = theme => ({
  container: {
    backgroundImage: 'url(' + imageBackground + ')',
    backgroundSize: 'cover',
    height: '100vh',
  },
  header: {
    color: '#fff',
    padding: 50,
  },
});

class Congratulations extends React.Component {
  render() {
    const { classes, userFromRedux } = this.props;
    console.log(userFromRedux.user.name);
    return (
      <div className={classes.container}>
        <h2 className={classes.header}>
          Congratulations {userFromRedux.user.name}
        </h2>
        <Button variant="raised" color="primary">
          <Link to="/list" style={{color: '#fff', fontWeight: 'bold'}}>Back to Tasks To Do</Link>
        </Button>
      </div>
    );
  }
};


function mapStateToProps(store) {
  return {
    userFromRedux: store.user,
  }
}

export default connect(mapStateToProps,
  null)(withStyles(styles)(Congratulations));