import axios from "axios";

// const API_URL = "http://localhost:5001/api/products";
const API_URL = "https://ecommerce-mern-3xht.onrender.com/api/products";

export const getProducts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProducts = async (productData) => {
  try {
    // productData should be FormData object with file
    const res = await axios.post(API_URL, productData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
