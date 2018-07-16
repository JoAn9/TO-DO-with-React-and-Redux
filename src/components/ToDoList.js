import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class ToDoList extends React.Component {
  render() {

    // const {classes} = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} md={4}>
            <Paper>xs=6 sm=3</Paper>
          </Grid>
        <Grid item xs={12} md={4}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
  </Grid>
</div>
    );
  }
}

export default ToDoList;