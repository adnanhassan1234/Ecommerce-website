
const CartReducer = (state , action) => {

    if(action.type === "ADD_TO_CART") {
       let {id, color, amount , product} = action.payload;
       console.log("🚀 ~ file: CartReducer.js ~ line 7 ~ CartReducer ~ product", product);
    }
     return state;
  
};

export default CartReducer;