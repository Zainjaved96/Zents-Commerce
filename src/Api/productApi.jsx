// productApi.js

const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/all`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/product/${productId}/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
