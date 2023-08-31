// appActions.js
import { setProducts } from './ProductSlice';
import { fetchProducts } from '/src/Api/productApi.jsx'; // Import the renamed API function

export const initializeApp = () => async (dispatch) => {
  try {
    const data = await fetchProducts();
    dispatch(setProducts(data));
  } catch (error) {
    console.error("🚀 ~ file: appActions.js:11 ~ initializeApp ~ error:", error)
  }
};
