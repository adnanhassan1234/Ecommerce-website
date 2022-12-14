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
  total_item: "",    // CART_TOTAL_AMOUNT
  total_price: "",   // CART_TOTAL_PRICE_OVERALL
  shipping_fee: 50000, // SHIPPING_TEXT_FEE
};   

const Cart_context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);


  const addToCart = (id, color, amount, product) => {
    /* Dispatching an action to the reducer. */
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };


//  * When the removeItem function is called, it will dispatch an action to the reducer with the type of REMOVE_ITEM and the payload of the id of the item that was clicked.
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // when click on clear cart button all add cart are deleted!
  const clearCart = () => {
    dispatch({ type: "REMOVE_CART_ALL_ITEM"});
  };


//  * When the user clicks the increment button, dispatch an action to the reducer to increment the
//  * quantity of the product with the id that was passed in.

    const setIncrement = (id) => {
      dispatch({ type: "INCREMENT_PRODUCT_QUANTITY" , payload: id});
    };

    const setDecrement = (id) => {
      dispatch({ type: "DECREMENT_PRODUCT_QUANTITY" , payload: id});
    };  // close INCREMENT_ and DECREMENT quantity
   

  /* Saving the state of the cart to local storage. */
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_AMOUNT"});
    dispatch({ type: "CART_TOTAL_PRICE_OVERALL"});
    localStorage.setItem('cartItems', JSON.stringify(state.cart));
  }, [state.cart]);



  return (
    <>
      <cartProvider.Provider value={{ ...state, addToCart, removeItem , clearCart , setIncrement ,setDecrement }}>
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
