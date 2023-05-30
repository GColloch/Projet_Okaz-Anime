import React from 'react';

const Présentation = () => {
  return (
    <div>
      <section id="slider">
  <input type="radio" name="slider" id="s1" checked />
  <input type="radio" name="slider" id="s2"/>
  <input type="radio" name="slider" id="s5"/>
  <label for="s1" id="slide1">
  <div className="product">
                <div className="image2">
                    <img src="/media/mangas/Naruto.jpg" />
                </div>
                <div className="namePrice">
                    <h3>Manga One piece</h3>
                    <span>6,99 €</span>
                </div>
                <p>Manga de l'animé/manga One Piece</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="bay">
                    <button>voir le produit</button>
                </div>
            </div>
        </label>
  <label for="s2" id="slide2"><div className="product">
                <div className="image2">
                    <img src="/media/mangas/Naruto.jpg" />
                </div>
                <div className="namePrice">
                    <h3>Manga One piece</h3>
                    <span>6,99 €</span>
                </div>
                <p>Manga de l'animé/manga One Piece</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="bay">
                    <button>voir le produit</button>
                </div>
            </div>
            </label>
  <label for="s5" id="slide3">
  <div className="product">
                <div className="image2">
                    <img src="/media/mangas/Naruto.jpg" />
                </div>
                <div className="namePrice">
                    <h3>Manga One piece</h3>
                    <span>6,99 €</span>
                </div>
                <p>Manga de l'animé/manga One Piece</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="bay">
                    <button>voir le produit</button>
                </div>
            </div>
            
  </label>
  
    </section>
    </div>
  );
};

export default Présentation;