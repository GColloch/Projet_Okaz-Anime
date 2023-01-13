import React from 'react';

const Cards = () => {
    return (
        <div>
            <h2>PRODUITS PHARES</h2>
        
        <div className='products'>
            <div className="product">
            <div className="image">
                <img src="/media/zoro.png"/>
            </div>
            <div className="namePrice">
                <h3>Zoro</h3>
                <span>79,99 €</span>
            </div>
            <p>Figurine de roronoa zoro de l'animé/manga One piece</p>
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
            <div className="image">
                <img src="media/Broly.png" />
            </div>
            <div className="namePrice">
                <h3>Broly</h3>
                <span>59,99 €</span>
            </div>
            <p>Figurine de Broly super sayan de l'animé/manga Dragon ball z </p>
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
            <div className="image">
                <img src="/media/Gojo.png" />
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
                <img src="/media/poster.png" />
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
                <img src="/media/poster naruto.png" />
            </div>
            <div className="namePrice2">
                <h3>Poster</h3>
                <span>19,99 €</span>
            </div>
            <p>Poster de l'animé/manga Naruto</p>
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
                <img src="/media/manga one piece.png" />
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

export default Cards;