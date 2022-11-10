import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';


const ListViewCards = (currListViewData) => {
    const { id, name, image, price, category, description } = currListViewData;  // destructring 
    return (
        <>
                <div className="card list_cards  my-2">
                    <div className="row g-0">
                        <div className="col-sm-5">
                            <img src={image} className="card-img-top h-100" alt="no-display" />
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text"> {description.slice(0, 140)}... </p>
                                <div className="title p-2">
                                    <h5><NavLink to={`/singleproduct/${id}`} className=" nav-link" exact > <button type='button' className='btn btn-outline-primary'>More Details</button>   </NavLink> <span className='price'> <strong> {<FormatPrice price={price} />}</strong> </span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ListViewCards;