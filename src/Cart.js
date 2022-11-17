import React, { useEffect } from 'react';
import styled from "styled-components";
import CartItem from "./components/CartItem";
import { useCartContext } from "./Context/Cart_context";
import { useNavigate, NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import FormatPrice from './Helper/FormatPrice';

const Cart = () => {

  const navigate = useNavigate();

  const { cart, clearCart , total_price , shipping_fee } = useCartContext();
  console.log("🚀 ~ file: Cart.js ~ line 7 ~ Cart ~ cart", cart); // particular data add on cart page when user click "add to cart" button.


  useEffect(() => {
    if (!localStorage.getItem("cartItems")) {
      navigate("/products");
    }
  }, [])

/* This is a conditional rendering. If the cart is empty, it will render the div with the className
"empty_data" and the h3 tag. */
  if(cart.length == 0) {
    return (
        <div className="empty_data">
          <h3>No Cart in Item</h3>
        </div>
    )
  }

  return (
    <>
      <div className="cart_section my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart_data table-responsive">
                <table class="table text-center">
                  <thead>
                    <tr className="text-center">
                      <th className="col">ITEM</th>
                      <th className="col">PRICE</th>
                      <th className="col mobile_hide_view">QUANTITY</th>
                      <th className="col">SUBTOTAL</th>
                      <th className="col">REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {cart.map((Currtem, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.image}</td>
                      </tr>
                    ))} */}
                    {
                      cart.map((CurrItem) => {
                        return <CartItem key={CurrItem.id} {...CurrItem} />
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
            {/* div.two_button */}
            <div className="col-lg-12">
              <div className="full">
                <div className="cart_two_button my-2">
                  <NavLink to="/products">
                    <Button type="button" variant="contained" color="primary">CONTINUE SHOPPING</Button>
                  </NavLink>
                  <Button type="button" variant="contained" color="secondary" onClick={clearCart}>CLEAR CART
                  </Button>
                </div>
              </div>
            </div>
            {/*sub total all cart amount */}
            <div className="col-lg-12">
              <div className="full">
                <div className="cart_total_amount my-4">
                  <h6 className='my-2'>Subtotal : <span className='sub_total'> <b> <FormatPrice price={total_price} /> </b> </span></h6>

                  <h6 className='my-2'>Shipping Fee : <span className='sub_total'> <b> <FormatPrice price={shipping_fee} /> </b></span></h6>  <hr />

                  <h6 className='my-2'>Order Total : <span className='sub_total'> <b> <FormatPrice price={shipping_fee + total_price} />  </b> </span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Cart;
