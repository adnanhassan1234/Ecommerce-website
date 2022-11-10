
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

   return state;

};

export default CartReducer;