import React, { useEffect } from "react";
import '../styles/style.css';

const Details = ({ item, onClose, addToCart }) => {
  const handleBuyClick = () => {
    if (typeof item.price === "string" && item.price.includes("$")) {
      addToCart(item); // Llama a la función para agregar al carrito
      alert(`${item.title} agregado al carrito.`);
      onClose();
    } else {
      window.open(item.link, "_blank"); 
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="details">
      <h2>{item.title}</h2>
      <img src={item.img} alt={item.title} className="details-image" />
      
      {item.originalPrice && item.discount ? (
        <p className="details-discounted-price">
          <span style={{ textDecoration: 'line-through' }}>Precio original: {item.originalPrice}</span>
          <br />
          Precio con descuento: {item.price}
        </p>
      ) : (
        <p className="details-price">
          {item.price && item.price.includes("$") ? item.price : ""}
        </p>
      )}

      <div id="buttons">
        <button id="close-details" onClick={onClose}>
          Cerrar
        </button>
        <button id="buy" onClick={handleBuyClick}>
          {item.price && item.price.includes("$") ? "Agregar al carrito" : "Ver en Steam"}
        </button>
      </div>
    </div>
  );
};

export default Details;
