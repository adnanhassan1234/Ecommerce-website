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
                      <th className="col">QUANTITY</th>
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

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
