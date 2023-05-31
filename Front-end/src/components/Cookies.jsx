import React, { useState } from 'react';
import { FaCookie, FaCookieBite } from 'react-icons/fa';
import '../styles/components/_cookies.scss';

const Cookies = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationIcon, setNotificationIcon] = useState(null);
  const [notificationIconColor, setNotificationIconColor] = useState(null);

  const handleAccept = () => {
    setShowBanner(false);
    setShowNotification(true);
    setNotificationMessage("Merci d'avoir accepté les cookies !");
    setNotificationIcon(<FaCookie />);
    setNotificationIconColor('#00ff00'); // Change la couleur de l'icône à vert
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Masque la notification après 3 secondes (3000 millisecondes)
  };

  const handleReject = () => {
    setShowBanner(false);
    setShowNotification(true);
    setNotificationMessage("Vous avez choisi de refuser les cookies.");
    setNotificationIcon(<FaCookieBite />);
    setNotificationIconColor('#ff0000'); // Change la couleur de l'icône à rouge
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Masque la notification après 3 secondes (3000 millisecondes)
  };

  return (
    <div>
      {showBanner && (
        <div className="containerCookies">
          <img src='/media/cookies/cookie.png' alt="Cookie" className="cookieImage" />
          <div className="textCookies">
            CE SITE WEB UTILISE DES COOKIES POUR VOUS GARANTIR LA MEILLEURE EXPÉRIENCE POSSIBLE.
          </div>
          <div className="buttonContainer">
            <button className="acceptButton" onClick={handleAccept}>D’ACCORD</button>
            <button className="rejectButton" onClick={handleReject}>JE REFUSE</button>
          </div>
        </div>
      )}
      {showNotification && (
        <div className="notificationContainer">
          <div className={`notification ${showNotification ? "fadeIn" : "fadeOut"}`}>
            <span className="notificationMessage">{notificationMessage}</span>
            {notificationIcon && (
              <span className="notificationIcon">
                {notificationIcon}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;
