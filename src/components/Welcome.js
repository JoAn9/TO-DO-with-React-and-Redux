import React from "react";


const imageWelcome = '../images/235.jpg';

const styleWelcome = {
  backgroundImage: `url(${imageWelcome})`,
}

const Welcome = () => (
  <div style={styleWelcome}>
    <h2>Welcome</h2>
  </div>
);

export default Welcome;