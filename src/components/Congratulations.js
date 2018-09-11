import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import YoutubeFrame from './YoutubeFrame';


// dodac cancel axios
// dodac toastr i errors handling


class Congratulations extends React.Component {
  state = {
    video: '',
  }

  componentDidMount() {
    this.getSong();
  }

  getSong = () => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.props.userFromRedux.user.band}&type=video&part=snippet,contentDetails,statistics,statu&key=AIzaSyDCaZeK9ihaPCkzDDtKaAkGwVl_Pq5LktA`;
      
    axios.get(url)
      .then(response => {
        console.log(response);
        const randomNmb1to4 = Math.floor(Math.random() * 4) + 1;
        this.setState({
          video: response.data.items[randomNmb1to4].id.videoId,
        });
      })
  }

  render() {
    const { userFromRedux } = this.props;
    const { video } = this.state;
    return (
      <YoutubeFrame video={video} user={userFromRedux} />
    )
  }
}

function mapStateToProps(store) {
  return {
    userFromRedux: store.user,
  }
}

export default connect(mapStateToProps,
  null)(Congratulations);