import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="content-footer">
                <div className="bloc footer-contact">
                    <h3>À PROPOS</h3>
                    <p>Qui sommes nous ?</p>
                    <p>8 rue d'Alger 44000 Nantes</p>
                </div>
                <div className="blocfooter-services">
                    <h3>SERVICES</h3>
                    <ul className="services-list">
                        <li><a>Suivre ma commande</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>CGV</a></li>
                        <li><a>Mentions légales</a></li>
                        <li><a>Politique de remboursement</a></li>
                        <li><a>Politique de confidentialité</a></li>
                    </ul>
                    <div className='droits'>
                      <hr />
                    <p className="services-text">© 2023 Manga Senpai- Tous droits réservés</p> {/* Nouveau paragraphe */}
                    </div>
                </div>
                <div className="bloc footer-contact">
                    <h3>NEWSLETTER</h3>
                    <p>Okaz'Anime@contact.com</p>
                    <button className='inscription'>S'INSCRIRE</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
