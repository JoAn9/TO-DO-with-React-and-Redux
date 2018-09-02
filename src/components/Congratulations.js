import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
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
});

class Congratulations extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <h2>Congratulations</h2>
        <Button variant="raised" color="primary">
          <Link to="/list" style={{color: '#fff', fontWeight: 'bold'}}>Back to Tasks To Do</Link>
        </Button>
      </div>
    );
  }
};


export default withStyles(styles)(Congratulations);