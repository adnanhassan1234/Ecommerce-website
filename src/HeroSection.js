import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Typical from 'react-typical';

const HeroSection = ({ getData }) => {

    /* Destructuring the object. */
    const { title, description, image } = getData;

    let time = new Date().toLocaleTimeString();

    const [currTime, setCurrTime] = useState(time);

    /* A hook that is used to update the state of the component. */
    useEffect(() => {
        setInterval(() => {
            time = new Date().toLocaleTimeString();
            setCurrTime(time);
        }, 1000)
    },)


    return (
        <>
            <div className="hero_section bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="full p-3 text-white">
                                <div className="title">
                                    <h6>Welcome to</h6>
                                    {/* <h2>{title}</h2> */}
                                   <h2><Typical
                                        steps={[`${title}`, 3000, `${title}`, 3000]}
                                        loop={Infinity}
                                        wrapper="p"
                                    /></h2> 
                                </div>
                                <div className="para">
                                    <p>{description}</p>
                                </div>
                                <div className="btn_sec">
                                    <NavLink to="/products">
                                        <button type='button' className='btn btn-light'>shop now</button>
                                    </NavLink>
                                </div>
                                <div className="time text-center">
                                    <h1> {currTime} </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="full p-3 m-auto">
                                <figure>
                                    <img src={image} width="100%" className='mx-auto d-block' alt="hero-img" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;