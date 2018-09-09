import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import imageBackground from '../images/congratulation.jpg';
import YoutubeFrame from './YoutubeFrame';


// dodac cancel axios
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

  componentDidMount() {
    this.getSong();
  }

  getSong = () => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.props.userFromRedux.user.band}&type=video&part=snippet,contentDetails,statistics,statu&key=AIzaSyDCaZeK9ihaPCkzDDtKaAkGwVl_Pq5LktA`;
      
    axios.get(url)
      .then(response => console.log(response))


    //             this.setState({
    //                 video: data.items[0].id.videoId,
    //             })
    //         });
  }

  render() {
    const { classes, userFromRedux } = this.props;

    return (
      <div className={classes.container}>
        <h2 className={classes.header}>
          Congratulations {userFromRedux.user.name}
        </h2>
        <YoutubeFrame />
        <Button variant="raised" color="primary">
          <Link to="/list" style={{color: '#fff', fontWeight: 'bold'}}>Back to Tasks To Do</Link>
        </Button>
      </div>
    )
  }

}


function mapStateToProps(store) {
  return {
    userFromRedux: store.user,
  }
}

export default connect(mapStateToProps,
  null)(withStyles(styles)(Congratulations));

//   

// render() {
//     return (
//         <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10vh'}}>
//             <iframe width="611" height="344" src={`https://www.youtube.com/embed/${this.state.video}`} frameBorder="0" allowFullScreen={true}></iframe>
//         </div>
//     );
// }
// }