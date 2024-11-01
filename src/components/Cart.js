import React from 'react';
import './Cart.css'; // Asegúrate de crear un archivo CSS para estilos

const Cart = ({ items, onRemove, isOpen, toggleCart, onPurchase }) => {
  const handlePurchase = () => {
    if (items.length > 0) {
      onPurchase(); // Llama a la función de compra
    } else {
      alert("El carrito está vacío. Agrega elementos antes de comprar.");
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', '')); // Convierte el precio a número
      return total + (isNaN(price) ? 0 : price); // Suma el precio al total
    }, 0).toFixed(2); // Devuelve el total con dos decimales
  };

  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <span className="remove-icon" onClick={() => onRemove(item.id)}>✖</span> {/* Cruz para eliminar */}
          </div>
        ))
      )}
      {items.length > 0 && (
        <>
          <p>Total: ${calculateTotal()}</p> {/* Muestra el total */}
          <button onClick={handlePurchase} className="purchase-button">Confirmar compra</button>
        </>
      )}
      <button onClick={toggleCart}>Cerrar</button>
    </div>
  );
};

export default Cart;
