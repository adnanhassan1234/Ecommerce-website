import React , { createContext , useContext , useReducer } from 'react';
import reducer from '../Reducer/CartReducer';

/* Creating a context object. */
 const cartProvider =  createContext();

const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
};

const Cart_context = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);


  const addToCart = (id, color, amount , product) => {
   /* Dispatching an action to the reducer. */
    dispatch({type:"ADD_TO_CART" , payload: {id, color, amount , product} });
  };

  return (
    <>
     <cartProvider.Provider value={{...state , addToCart}}>
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
export {cartProvider , useCartContext};