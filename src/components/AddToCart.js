import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/Cart_context';


const AddToCart = ({ product }) => {
   /* Destructuring the `addToCart` function from the `useCartContext` hook. */
    const {addToCart} = useCartContext();

    const { id, colors, stock } = product;  /* Destructuring the product object. */

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    console.log("🚀 ~ file: addToCart.js ~ line 6 ~ AddToCart ~ colors", colors);

  /**
   * If the amount is less than the stock, then set the amount to the amount plus one, otherwise set
   * the amount to the stock.
   */
    const setIncrement = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

 /**
  * If the amount is greater than 1, then set the amount to the amount minus 1, otherwise set the
  * amount to 1.
  */
    const setDecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    return (
        <>
            <div className="colors">
                <p> Colors:
                    {
                        colors.map((currColor, index) => {
                            return (
                                <button key={index} style={{ backgroundColor: currColor }}
                                    className={color === currColor ? " btn btn-primary my-1 mx-1 active" : " btn btn-primary my-1 mx-1 btnStyle "}
                                    onClick={() => setColor(currColor)}
                                >
                                    {color === currColor ? <FaCheck className='icon_check' /> : null}
                                </button>
                            )
                        })
                    }
                </p>
            </div>
            {/* add to card with amount */}
            <div className="amount_section">
                <CartAmountToggle amount={amount} setIncrement={setIncrement} setDecrement={setDecrement} />
            </div>

            <div className="add_to_cart_button float-right">
                <NavLink to="/cart" onClick={() => addToCart(id, color, amount , product)}>
                    <Button className="btn btn-primary my-3 mx-1"> Add To Cart </Button>
                </NavLink>
            </div>
        </>
    )
}

export default AddToCart;