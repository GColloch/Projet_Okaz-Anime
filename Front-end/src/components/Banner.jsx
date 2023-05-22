import React from 'react';
import '../styles/components/_banner.scss'
const Banner = () => {
  return (
    <div className="background-image-block">
      <div className="background-image"></div>
      <img className="overlay-image" src="./media/header/forme1.png" alt="Overlay Image" />
    </div>
  );
};

export default Banner;