import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCartContext } from '../Context/Cart_context';

const Nav = () => {

    const { total_item } = useCartContext();

    const deleteItem = () => {
        localStorage.removeItem("auth");
        // <Redirect  to="/" />
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg " >
                <div className="container-fluid">
                    <NavLink to="/" className="logo">
                        <img src="./images/logo.png" width="70%" alt="my logo" />
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav menus navbar-collapse ">
                            <NavLink to="/" className=" nav-link" exact activeClassName="active">HOME</NavLink>
                            <NavLink to="/about" className=" nav-link" exact activeClassName="active">ABOUT</NavLink>
                            <NavLink to="/products" className=" nav-link" exact activeClassName="active">PRODUCT</NavLink>
                            <NavLink to="/contact" className=" nav-link" exact activeClassName="active">CONTACT</NavLink>
                        </div>

                        {/* {
                            (!localStorage.getItem('auth')) ? <p>
                                <NavLink to="login"><span>Login</span></NavLink></p> :

                                <p><i className="fa fa-sign-out" aria-hidden="true"></i><NavLink to="/login" onClick={deleteItem}><span>Logout</span></NavLink>
                                </p>
                        } */}

                        <div className="navbar-navs mx-auto">
                            <NavLink to="/login" type='button' className="btn btn-primary mx-4">LOG IN</NavLink>
                            <NavLink to="/cart" className="btn btn-light total_item mx-1"><FiShoppingCart /><span className='total-cart-item'>{total_item} </span></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;