import React from 'react';
import '../styles/components/_banner.scss'
const Banner = () => {
  return (
    <div className="background-image-block">
      <div className="background-image">
      <img className="overlay-image-left" src="./media/header/dbz.png" alt="Left Image" />
      <img className="overlay-image-right" src="./media/header/dbz.png" alt="right Image" />
      <img className="background-overlay2" src="./media/header/étoiles.png" alt="Overlay Image" />
      <img className="background-overlay" src="./media/header/figurines.png" alt="Overlay Image" />
      <h1 className='background-overlay-text'>Figurines Mangas - Le Japon à Portée de Main !</h1>
      </div>
      <img className="overlay-image" src="./media/header/forme1.png" alt="Overlay Image" />
    </div>
  );
};

export default Banner;