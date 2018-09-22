import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import imageBackground from '../images/congratulation.jpg';



const styles = theme => ({
  container: {
    backgroundImage: 'url(' + imageBackground + ')',
    backgroundSize: 'cover',
    height: '100vh',
  },
  header: {
    color: '#fff',
    padding: 40,
  },
});


class YoutubeFrame extends React.Component {

  static defaultProps = {
    userName: 'Winner',
  }

  render() {
    const { classes, userName } = this.props;
    return (
      <Grid container direction="column" alignItems="center" className={classes.container}>
        <Grid item>
          <h2 className={classes.header}>
            Congratulations {userName}
          </h2>
        </Grid>
        <Grid item>
          <h3 className={classes.header}>
            Good job! You have completed very difficult task!
          </h3>
        </Grid>
        <Grid item>
          <iframe width="611" height="344" src={`https://www.youtube.com/embed/${this.props.video}`} frameBorder="0" allowFullScreen={true}></iframe>
        </Grid>
        <Grid item className={classes.header}>
          <Button variant="raised" color="primary">
            <Link to="/list" style={{color: '#fff', fontWeight: 'bold'}}>Back to Tasks To Do</Link>
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(YoutubeFrame);
