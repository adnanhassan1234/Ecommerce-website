import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroSection = ({ getData }) => {

    const { title, description, image } = getData;

    return (
        <>
            <div className="hero_section bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="full p-3 text-white">
                                <div className="title">
                                    <h6>Welcome to</h6>
                                    <h2>{title}</h2>
                                </div>
                                <div className="para">
                                    <p>{description}</p>
                                </div>
                                <div className="btn_sec">
                                    <NavLink>
                                        <button type='button' className='btn btn-light'>shop now</button>
                                    </NavLink>
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