import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNavigation = ({ title }) => {
    console.log("🚀 ~ file: PageNavigation.js ~ line 4 ~ PageNavigation ~ name", title)
    return (
        <>
            <div className="d-flex">
                <div className="link">
                    <h5><NavLink to="/" className=" nav-link" exact> Home </NavLink></h5>
                </div> 
                <h5 className='title_name'><b>/ {title}</b> </h5>
            </div>

        </>
    )
}

export default PageNavigation;