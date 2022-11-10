import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';


const Product = (currData) => {
    const { id, name, image, price, category } = currData;  // destructring 
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <NavLink to={`/singleproduct/${id}`} className=" nav-link" exact >
                    <div className="full my-2">
                        <figure className="feature_products mb-0">
                            <img src={image} alt="no-image-display" />
                            <figcaption>
                                <div className="category">
                                    <h3>{category}</h3>
                                </div>
                            </figcaption>
                        </figure>
                        <div className="card mb-0">
                            <div className="card-head">
                                <div className="title p-2">
                                    <h5> {name} <span className='price'> <strong> { <FormatPrice price={price} />}</strong> </span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default Product;