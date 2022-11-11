import React, { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from '../Reducer/CartReducer';

/* Creating a context object. */
const cartProvider = createContext();

/**
 * If the local storage item 'cartItems' is an empty array, return an empty array, otherwise return 
 */
const getLocalCartData = () => {
  let localCartData = localStorage.getItem('cartItems');
  if (localCartData === []) {
    return [];
  } else {
    /* Parsing the stringified data from local storage and returning it as an array. */
    return JSON.parse(localCartData);
  }
}

const initialState = {
  // cart: [],
  /* Calling the function `getLOcalCartData()` and setting the return value to the `cart` property. */
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const Cart_context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);


  const addToCart = (id, color, amount, product) => {
    /* Dispatching an action to the reducer. */
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  /* Saving the state of the cart to local storage. */
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cart));
  }, [state.cart]);



  return (
    <>
      <cartProvider.Provider value={{ ...state, addToCart, removeItem }}>
        {children}
      </cartProvider.Provider>
    </>
  )
}

/**
 * It returns the value of the cartProvider context object.
 * @returns The useContext hook is being used to return the cartProvider context.
   global custom hook */
const useCartContext = () => {
  return useContext(cartProvider);
};

export default Cart_context;
export { cartProvider, useCartContext };