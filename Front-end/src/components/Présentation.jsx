import React from 'react';

const Présentation = () => {
  return (
    <div>
      <section id="slider">
  <input type="radio" name="slider" id="s1" checked />
  <input type="radio" name="slider" id="s2"/>
  <input type="radio" name="slider" id="s5"/>
  <label for="s1" id="slide1">
  <div className="productCaroussel">
                <div className="image2Caroussel namePriceCaroussel">
                    <h3>Manga One piece</h3>
                    <img src="/media/mangas/Naruto.jpg" />
                </div>
                <div className="namePriceCaroussel">
                    <span>6,99 €</span>
                </div>
                <p>Manga de l'animé/manga One Piece</p>
                <div className="bayCaroussel">
                    <button>voir le produit</button>
                </div>
            </div>
        </label>
  <label for="s2" id="slide2"><div className="productCaroussel">
                <div className="image2Caroussel namePriceCaroussel" >
                    <h3>Manga One piece</h3>
                    <img src="/media/mangas/Naruto.jpg" />
                </div>
                <div className="namePriceCaroussel">
                    <span>6,99 €</span>
                </div>
                <p>Manga de l'animé/manga One Piece</p>
                <div className="bayCaroussel">
                    <button>voir le produit</button>
                </div>
            </div>
            </label>
  <label for="s5" id="slide3">
  <div className="productCaroussel">
                <div className="image2Caroussel namePriceCaroussel">
                    <h3>Manga One piece</h3>
                    <img src="/media/mangas/Naruto.jpg" />
                </div>
                <div className="namePriceCaroussel">
                    <span>6,99 €</span>
                </div>
                <p>Manga de l'animé/manga One Piece</p>
                <div className="bayCaroussel">
                    <button>voir le produit</button>
                </div>
            </div>
            
  </label>
  
    </section>
    </div>
  );
};

export default Présentation;