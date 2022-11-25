import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCartContext } from '../Context/Cart_context';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';

const Nav = () => {

    const { total_item } = useCartContext();
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const deleteItem = () => {
        localStorage.removeItem("auth");
        // <Redirect  to="/" />
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to="/" className="logo">
                        <img src="./images/logo.jpg" width="70%" alt="my logo" />
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav menus navbar-collapse mx-4">
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

                            {
                                isAuthenticated ?
                                    <Button variant="contained" color="primary" className="mx-3 my-1" onClick={() => logout({ returnTo: window.location.origin })}>LOG OUT</Button> :
                                    <Button variant="contained" color="primary" className="btn btn-primary my-1" onClick={() => loginWithRedirect()}>LOG IN</Button>
                            }

                            <NavLink to="/cart" className="btn btn-light total_item mx-1"><FiShoppingCart /><span className='total-cart-item'>{total_item} </span></NavLink>
                          {/* Laptop view user profile */}
                          <NavLink className="btn btn-light name_none total_item mx-1">
                                {

                                    isAuthenticated && (<h4 className='my-1'>{user.name.slice(0, 5)}..</h4>)

                                }
                            </NavLink>
                            <NavLink className="btn btn-light total_item">
                                {
                                    isAuthenticated && (
                                        <div className='login_profile'>
                                            <img src={user.picture} alt={user.name} />
                                        </div>)
                                }
                            </NavLink>

                        </div>
                    </div>

                </div>
                {/* mobile_view_user_profile */}
                    <NavLink className="btn btn-light  total_items mx-1">
                        {

                            isAuthenticated && (<h4 className='my-1'>{user.name}</h4>)

                        }
                    </NavLink>
                    <NavLink className="btn btn-light total_items">
                        {
                            isAuthenticated && (
                                <div className='login_profile'>
                                    <img src={user.picture} alt={user.name} />
                                </div>)
                        }
                    </NavLink>
            </nav>
        </>
    )
}

export default Nav;