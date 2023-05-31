import React from 'react';
import '../styles/components/_cookies.scss';

const Cookies = () => {
  return (
    <div className="containerCookies">
        <img src='/media/cookies/cookie.png' alt="Cookie" className="cookieImage" />
      <div className="textCookies">
        CE SITE WEB UTILISE DES COOKIES POUR VOUS GARANTIR LA MEILLEURE EXPÉRIENCE POSSIBLE.
      </div>
      <div className="buttonContainer">
        <button className="acceptButton">D’ACCORD</button>
        <button className="rejectButton">JE REFUSE</button>
      </div>
    </div>
  );
};

export default Cookies;
