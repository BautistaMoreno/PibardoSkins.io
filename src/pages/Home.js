import React, { useState } from "react";
import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import Details from "../components/Details";
import Footer from "../components/Footer";
import "../styles/style.css";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowDetails = (item) => {
    console.log("Item seleccionado:", item);
    setSelectedItem(item);
  };

    return (
      <div>
        <Header />
        <VideoSection />
        <Carousel />
        <ProductList onItemSelect={handleShowDetails} />
        {selectedItem && (
          <Details item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
        <Footer />
      </div>
    );
  };

export default Home;