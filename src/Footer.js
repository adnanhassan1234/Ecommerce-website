import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
                   {/* started_section */}
            <div className="started_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="full mt-4 d-flex box">
                                <div className="title">
                                    <p className='mb-0'>Ready to get started?</p>
                                    <p className='mb-0'>Talk to us today</p>
                                </div>
                                <div className="btn_get">
                                <NavLink to="/contact" >  <button type='button' className='btn btn-primary'>Get started</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer-bottom-section */}
            <div className="footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className="full p-2">
                                <h5>Tech Ecommerec</h5>
                                <p>Ecommerce, also known as electronic commerce or internet commerce.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="full p-2">
                                <p>Ecommerce, also known as electronic commerce</p>
                                <form>
                                    <input type="text" className='form-control' required />
                                    <button type='submit' className='btn btn-primary my-1'>Subscibe</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="full p-2">
                                <h5>Follow us</h5>
                                <div className="social_icon">
                                   <span> <NavLink to="#"><BsFacebook /></NavLink></span>
                                   <span><NavLink to="#"><RiInstagramFill /></NavLink></span>
                                  <span> <NavLink to="#"><BsYoutube /></NavLink></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="full p-2">
                                <h5>Call us</h5>
                                <div className="call">
                                 <p>+923476275532</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='hr' />
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="full p-2 text-center">
                                    <p>@20222 E-commerce Store. All Right Reserved!</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="full p-2 text-center">
                                    <p className='mb-0'>Terms & Conditions</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="full p-2 text-center">
                                    <p className='mb-0'>Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;