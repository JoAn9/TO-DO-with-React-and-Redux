import React from "react";
import imageBackground from '../images/235.jpg';

const myStyle = {
  backgroundImage: "url("+imageBackground+")",
  backgroundSize: 'cover',
  height: '100vh'
}

const Welcome = () => (
  <div style={myStyle}>
    <h2>Welcome</h2>
  </div>
);

export default Welcome;