import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import YoutubeFrame from './YoutubeFrame';
import { ErrorHandler } from './errorHandler';



// widok na komory
// proptypes dodac

const CancelToken = axios.CancelToken;
let cancel;

class Congratulations extends React.Component {
  state = {
    video: '',
  }

  componentDidMount = () => {
    this.getSong();
  }

  componentWillUnmount = () => {
    cancel();
  }

  getSong = () => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.props.userBand}&type=video&part=snippet,contentDetails,statistics,statu&key=AIzaSyDCaZeK9ihaPCkzDDtKaAkGwVl_Pq5LktA`;
    // let url = 'https://httpstat.us/500';

    axios.get(url, {
      cancelToken: new CancelToken(c => cancel = c)
        // An executor function receives a cancel function as a parameter
    })
    .then(response => {
      const randomNmb1to4 = Math.floor(Math.random() * 4) + 1;
      this.setState({
        video: response.data.items[randomNmb1to4].id.videoId,
      });
    })
    .catch(error => {
      console.dir(error);
      ErrorHandler.handle(error);
    });
  };


  render() {
    const { userName } = this.props;
    const { video } = this.state;
    return (
      <YoutubeFrame video={video} userName={userName} />
    )
  }
}

function mapStateToProps(store) {
  return {
    userName: store.user.user.name,
    userBand: store.user.user.band,
  }
}

export default connect(mapStateToProps,
  null)(Congratulations);