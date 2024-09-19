import React, { useEffect } from "react";
import axios from "axios";
import { useCart } from "./CartContext";
import CartComponent from "./CartComponent";

function App() {
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://66d5ba37f5859a7042673bac.mockapi.io/products');
        dispatch({ type: "SET_PRODUCTS", payload: response.data });
      } catch (error) {
        console.error("Error fetching products:", error);
        // Optionally, dispatch an error action here
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <CartComponent />
    </div>
  );
}

export default App;