import React, { useState } from "react";
import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Cart from "../components/Cart"; // Importa el componente del carrito
import "../styles/style.css";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleShowDetails = (item) => {
    console.log("Item seleccionado:", item);
    setSelectedItem(item);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const purchaseItems = () => {
    if (cartItems.length > 0) {
      alert("Su compra se ha realizado con éxito. A continuación, le enviaremos un correo con los pasos a seguir para recibir la skin en su cuenta de Steam.");
      setCartItems([]); // Vacía el carrito después de la compra
    } else {
      alert("El carrito está vacío. Agrega elementos antes de comprar.");
    }
  };

  return (
    <div>
      <Header toggleCart={toggleCart} />
      <VideoSection />
      <Carousel />
      <ProductList onItemSelect={handleShowDetails} addToCart={addToCart} />
      {selectedItem && (
        <Details item={selectedItem} onClose={() => setSelectedItem(null)} addToCart={addToCart} />
      )}
      <Cart 
        items={cartItems} 
        onRemove={removeFromCart} 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        onPurchase={purchaseItems} 
      />
      <Footer />
    </div>
  );
}

export default Home;
