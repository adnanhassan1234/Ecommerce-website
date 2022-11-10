import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <>
            <div className='error_page'>
                <h1>4<span><i className="fa fa-exclamation-triangle text-white" aria-hidden="true"></i></span>4</h1>
                <h2>Error: 404 page not found!</h2>
                <p>Sorry, the page you're looking for cannot be accessed!</p>
                <div className="back">
                    <NavLink to="/" className="text-dark"><strong>BACK TO HOME </strong> </NavLink>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;