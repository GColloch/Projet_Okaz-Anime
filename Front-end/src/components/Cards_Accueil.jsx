import React from 'react';

const Cards_Accueil = () => {
    return (
        <div>
            <h2>PRODUITS PHARES</h2>
        
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
                <img src="/media/posters/poster.png" />
            </div>
            <div className="namePrice">
                <h3>Poster de MHA</h3>
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
                <img src="/media/mangas/manga one piece.png" />
            </div>
            <div className="namePrice">
                <h3>Manga One piece</h3>
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

export default Cards_Accueil;