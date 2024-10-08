import React, { useEffect } from 'react';
import arma1 from '../SKINS/arma1.png';
import arma2 from '../SKINS/arma2.png';
import arma3 from '../SKINS/arma3.png';
import arma4 from '../SKINS/arma4.png';
import arma5 from '../SKINS/arma5.png';
import arma6 from '../SKINS/arma6.png';
import arma7 from '../SKINS/arma7.png';
import arma8 from '../SKINS/arma8.png';
import arma9 from '../SKINS/arma9.png';
import arma10 from '../SKINS/arma10.png';
import arma11 from '../SKINS/arma11.png';
import arma12 from '../SKINS/arma12.png';
import arma13 from '../SKINS/arma13.png';
import arma14 from '../SKINS/arma14.png';
import arma15 from '../SKINS/arma15.png';
import arma16 from '../SKINS/arma16.png';
import arma17 from '../SKINS/arma17.png';
import skin18 from '../SKINS/skin18.png';
import skin19 from '../SKINS/skin19.png';
import skin20 from '../SKINS/skin20.png';

const products = [
  { id: 1, title: 'Karambit', price: '$1845', img: arma1 },
  { id: 2, title: 'M9 Bayoneta', price: '$1717', img: arma2, originalPrice: '$2146', discount: 0.25 },
  { id: 3, title: 'Black Lotus', price: 'Ver', img: arma3, link: "https://steamcommunity.com/market/search?q=m4+loto+negro" },
  { id: 4, title: 'Desert Eagle', price: 'Ver', img: arma4, link: "https://steamcommunity.com/market/search?q=coder+red+Desert+Eagle" },
  { id: 5, title: 'Emperatriz', price: 'Ver', img: arma5, link: "https://steamcommunity.com/market/search?q=ak-47+Emperatriz" },
  { id: 6, title: 'Nightmare', price: 'Ver', img: arma6, link: "https://steamcommunity.com/market/search?q=m4+Nightmare" },
  { id: 7, title: 'Print Stream', price: 'Ver', img: arma7, link: "https://steamcommunity.com/market/search?q=+USP-S+%7C+Printstream" },
  { id: 8, title: 'Nightwish', price: 'Ver', img: arma8, link: "https://steamcommunity.com/market/search?q=ak+Nightwish" },
  { id: 9, title: 'Blue Laminate', price: 'Ver', img: arma9, link: "https://steamcommunity.com/market/search?q=AK-47+%7C+Laminado+azul" },
  { id: 10, title: 'Decimator', price: 'Ver', img: arma10, link: "https://steamcommunity.com/market/search?q=+M4A1-S+%7C+Diezmador" },
  { id: 11, title: 'Fade', price: '$949', img: arma11, originalPrice: '$1186', discount: 0.25 },
  { id: 12, title: 'Mjölnir', price: '$800', img: arma12 },
  { id: 13, title: 'Bloodsport', price: 'Ver', img: arma13, link: "https://steamcommunity.com/market/search?q=AK-47+%7C+Contacto+sangriento" },
  { id: 14, title: 'Black Nile', price: 'Ver', img: arma14, link: "https://steamcommunity.com/market/search?q=AWP+%7C+Nilo+negro" },
  { id: 15, title: 'Dragon Lore', price: '$7000', img: arma15, originalPrice: '$8750', discount: 0.25 },
  { id: 16, title: 'Kukri Fade', price: '$850', img: arma16 },
  { id: 17, title: 'Skeleton Blue Gem', price: '$6500', img: arma17 },
  { id: 18, title: "Pandora's Box", price: '$4000', img: skin18, originalPrice: '$5000', discount: 0.25 },
  { id: 19, title: 'Sr. Bloody Darryl', price: 'Ver', img: skin19, link: "https://steamcommunity.com/market/search?q=Sr.+Bloody+Darryl" },
  { id: 20, title: 'Primeiro tenente', price: 'Ver', img: skin20, link: "https://steamcommunity.com/market/search?q=Primeiro+tenente" },
];

const ProductList = ({ onItemSelect }) => {
  useEffect(() => {
    const imgs = document.querySelectorAll(".item img");
    
    const handleMouseOver = (img) => {
      img.classList.add("enlarged");
    };

    const handleMouseOut = (img) => {
      img.classList.remove("enlarged");
    };

    imgs.forEach((img) => {
      img.addEventListener("mouseover", () => handleMouseOver(img));
      img.addEventListener("mouseout", () => handleMouseOut(img));
    });

    return () => {
      imgs.forEach((img) => {
        img.removeEventListener("mouseover", () => handleMouseOver(img));
        img.removeEventListener("mouseout", () => handleMouseOut(img));
      });
    };
  }, []);


  return (
    <div className="tienda">
      {products.map(product => (
        <div 
          className="item" 
          key={product.id} 
          onClick={() => onItemSelect(product)}
        >
          <img src={product.img} alt={product.title} className="item-image" />
          <p className="item-title">{product.title}</p>
          <p className="item-price">
            {product.price}
            {product.discount && (
              <span className="item-discounted-price" style={{ textDecoration: 'line-through', marginLeft: '5px' }}>
                {" " + product.originalPrice}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
