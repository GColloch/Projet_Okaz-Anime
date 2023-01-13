import React from 'react';
import Navigation from '../components/Navigation';

const Figurines = () => {
    return (
        <div>
        <Navigation />
        <br></br>
        <div className='products'>
            

            <div className="product">
                <div className="image">
                    <img src="/media/figurines/Gojo.png" />
                </div>
                <div className="namePrice">
                    <h3>Gojo</h3>
                    <span>29,99 €</span>
                </div>
                <p>Figurine de Gojo de l'animé/manga jujutsu kaisen</p>
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
    
            <div className="product">
                <div className="image2">
                    <img src="/media/figurines/broly.png" />
                </div>
                <div className="namePrice2">
                    <h3>Poster</h3>
                    <span>19,99 €</span>
                </div>
                <p>Poster de l'animé/manga My Hero Academia</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="bay">
                    <button>voir le produit</button>
                </div>
            </div>
    
            <div className="product">
                <div className="image2">
                    <img src="/media/figurines/zoro.png" />
                </div>
                <div className="namePrice2">
                    <h3>Manga</h3>
                    <span>6,99 €</span>
                </div>
                <p>One Piece - Édition originale - Tome 100</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="bay">
                    <button>voir le produit</button>
                </div>
            </div>

            <div className="product">
                <div className="image2">
                    <img src="/media/figurines/zoro.png" />
                </div>
                <div className="namePrice2">
                    <h3>Manga</h3>
                    <span>6,99 €</span>
                </div>
                <p>One Piece - Édition originale - Tome 100</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="bay">
                    <button>voir le produit</button>
                </div>
            </div>

            </div>
         </div>
    );
};

export default Figurines;