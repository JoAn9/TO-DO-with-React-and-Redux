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
import { saveTasks, addInProgress, addToDo, addDone, addDoneTodo, addTodoDone, addInprogressFromDone } from '../actions/tasks';
import imageBackground from '../images/159.jpg';


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    backgroundImage: 'url(' + imageBackground + ')',
    backgroundSize: 'cover',
    height: '100vh',
  }
});


class ToDoList extends React.Component {
  state = {
    open: false,
    todosArray: [],
    taskId: 0,
    task: '',
  }

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
    const taskInProgress = this.props.tasksToDo.filter(item => item.id === id);
    if(this.props.tasksInProgress.some(el => el.id === taskInProgress[0].id)) {
      console.log('repeated');
    } else {
      this.props.addInProgress(taskInProgress[0]);
    }
  }

  handleDoneTodo = id => {
    const taskDone = this.props.tasksToDo.find(item => item.id === id);
    this.props.addDoneTodo(taskDone);
  }

  handleDoneProgress = id => {
    console.log('Done' + id);
    const taskDone = this.props.tasksInProgress.find(item => item.id === id);
    this.props.addDone(taskDone);
  }

  handleToDo = id => {
    console.log('to do ' + id);
    const taskToDo = this.props.tasksInProgress.find(item => item.id === id);
    this.props.addToDo(taskToDo);
  }

  handleTodoDone = id => {
    const task = this.props.tasksDone.find(item => item.id === id);
    this.props.addTodoDone(task);
  }

  handleInprogressFromDone = id => {
    const task = this.props.tasksDone.find(item => item.id === id);
    this.props.addInprogressFromDone(task);
  }

  handleDelete = id => {
    
  }

  render() {

    const { classes, userFromRedux, tasksToDo, tasksInProgress, tasksDone } = this.props;
    const { todosArray } = this.state;

    console.log(this.props.tasksInProgress);

    const tasksArray = tasksToDo ? tasksToDo.map(item => (
      <Paper className={classes.paper} key={item.id}>
        {item.task}
        <br />
        <Button variant="raised" onClick={() => this.handleInprogress(item.id)} size="small">In Progress</Button>
        <Button variant="raised" onClick={() => this.handleDoneTodo(item.id)} size="small">Done</Button>
      </Paper>
    )) : '';

    const tasksInProgressArray = tasksInProgress ? tasksInProgress.map(item => (
      <Paper className={classes.paper} key={item.id}>
        {item.task}
        <br />
        <Button variant="raised" onClick={() => this.handleToDo(item.id)} size="small">To do</Button>
        <Button variant="raised" onClick={() => this.handleDoneProgress(item.id)} size="small">Done</Button>
      </Paper>
    )) : '';

    const tasksDoneArray = tasksDone ? tasksDone.map(item => (
      <Paper className={classes.paper} key={item.id}>
        {item.task}
        <br />
        <Button variant="raised" onClick={() => this.handleTodoDone(item.id)} size="small">To do</Button>
        <Button variant="raised" onClick={() => this.handleInprogressFromDone(item.id)} size="small">In Progress</Button>
        <Button variant="raised" onClick={() => this.handleDelete(item.id)} size="small">Delete</Button>
      </Paper>
    )) : '';

    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          <Grid item xs={4} />
          <Grid item xs={6}>
            <Typography variant="display2" gutterBottom style={{marginTop: '0.9em'}}>
            {userFromRedux.user.name}'s list TO DO
            </Typography>
          </Grid>
          <Grid item xs={2} />
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
            {tasksInProgressArray}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Done</Paper>
            {tasksDoneArray}
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    userFromRedux: store.user,
    tasksToDo: store.tasks.tasks,
    tasksInProgress: store.tasks.tasksInProgress,
    tasksDone: store.tasks.tasksDone,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveTasks,
    addInProgress,
    addToDo,
    addDone,
    addDoneTodo,
    addTodoDone,
    addInprogressFromDone,
  }, dispatch);
}

export default connect(mapStateToProps,
  mapDispatchToProps)(withStyles(styles)(ToDoList));
