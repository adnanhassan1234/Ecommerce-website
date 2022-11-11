
const CartReducer = (state, action) => {

   if (action.type === "ADD_TO_CART") {
      /* Destructuring the action.payload object. */
      let { id, color, amount, product } = action.payload;
      console.log("🚀 ~ file: CartReducer.js ~ line 7 ~ CartReducer ~ product => ALL DATA ", product);


      /* Creating a new object with the properties of the product object and adding the color and amount
      properties. */
      let cartProduct;

      cartProduct = {      //object
         id: id + color,
         name: product.name,
         color,
         amount,
         image: product.image[0].url,
         price: product.price,
         max: product.stock,
      };

      /* Returning a new object with the properties of the state object and adding the cart property. */
      return {
         ...state,
         cart: [...state.cart, cartProduct],
      };
   }

   if (action.type === "REMOVE_ITEM") {
      /* Filtering the cart array and returning a new array with the item that has the same id as the
      action.payload removed. */
      let updatedCart = state.cart.filter((currItem) => {
         return currItem.id !== action.payload
      })
      
      return {
         ...state,
         cart: updatedCart,
      };
   };

   return state;

};

export default CartReducer;