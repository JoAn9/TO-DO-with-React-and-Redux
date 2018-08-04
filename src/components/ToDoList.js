import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { saveTasks, taskInProgress } from '../actions/tasks';


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class ToDoList extends React.Component {
  state = {
    open: false,
    todosArray: [],
    taskId: 0,
    task: '',
  }

  // componentDidMount = () => {
  //   console.log(this.props.tasksToDo);
  // }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      task: '',
    });
  };

  handleAdding = () => {
    this.props.saveTasks(this.state.task);
    this.setState({
      open: false,
      task: '',
    });
  }

  handleChangeTask = event => {
    this.setState({ 
      task: event.target.value
    });
  }

  handleInprogress = id => {
    console.log('in progress' + id);
    this.props.taskInProgress(id);
  }

  handleDone = id => {
    console.log('Done' + id);
  }

  render() {

    const { classes, userFromRedux, tasksToDo } = this.props;
    const { todosArray } = this.state;

    const tasksArray = tasksToDo ? tasksToDo.tasks.map(item => (
      <Paper className={classes.paper} key={item.id}>
        {item.task}
        <br />
        <Button variant="raised" onClick={() => this.handleInprogress(item.id)} size="small">In Progress</Button>
        <Button variant="raised" onClick={() => this.handleDone(item.id)} size="small">Done</Button>
      </Paper>
    )) : '';

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Typography variant="display2" gutterBottom style={{marginTop: '0.9em'}}>
            {userFromRedux.user.name}'s list TO DO
            </Typography>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              Things to do
            </Paper>
            {tasksArray}
            <Button
              variant="contained"
              onClick={this.handleClickOpen}
              className={classes.paper}
              style={{width: '100'}}
            >
              Add new task
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Add new task To Do</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  value={this.state.task}
                  onChange={this.handleChangeTask}
                  margin="dense"
                  id="newTask"
                  label="New Task"
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose}>
                  Cancel
                </Button>
                <Button onClick={this.handleAdding} color="primary" variant="contained">
                  Add
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>In progress</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Done</Paper>
          </Grid>
        </Grid>
      </div>
    );
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
    saveTasks,
    taskInProgress,
  }, dispatch);
}

export default connect(mapStateToProps,
  mapDispatchToProps)(withStyles(styles)(ToDoList));
