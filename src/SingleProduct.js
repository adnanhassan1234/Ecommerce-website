import React, { useEffect, useState } from 'react';
import { useProductContext } from "./Context/ContextProduct";
import { useParams } from "react-router-dom";
import PageNavigation from "./components/PageNavigation";
import FormatPrice from "./Helper/FormatPrice";
import { GrDeliver } from 'react-icons/gr';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import SingleProductImage from "./components/SingleProductImage";
import Stars from "./components/Stars";
import AddToCart from "./components/AddToCart";


const SingleProduct = () => {
  const { id } = useParams();

/* Destructuring the `useProductContext` hook. */
  const { getSingleProduct, singleProduct } = useProductContext();
  const [isLoader, setIsLoader] = useState(false); //spinner

  console.log("🚀 ~ file: SingleProduct.js ~ line 20 ~ SingleProduct ~ singleProduct", singleProduct);


  const { name, company, price, description, category, stock, reviews, stars, image } = singleProduct;


  useEffect(() => {
    getSingleProduct(`${process.env.REACT_APP_BASEURL}?id=${id}`);
    setIsLoader(true);
  }, [])


  if (!isLoader) {
    return <div className='loader'>
      <div className="spinner">
      </div>
    </div>
  };


  return (
    <>
      {/* <Wrapper /> */}
      <div className="pageNavigation">
        <div className="container ">
          <div className="full text-white">
            <PageNavigation title={name} />
          </div>
        </div>
      </div>
      {/* ======= single product data  ======= */}
      <div className="single_product_data my-5">
        <div className="container">
          <div className="row">
          {/* ======= col-md-6 col-12 ========= */}
             <SingleProductImage imgs={image} />
            <div className="col-md-6 col-12">
              <div className="full">
                <div className="product_data">
                  <div className="product_title">
                    <h4>{name}</h4>
                  </div>
                  <div className="stars">
                    <Stars stars={stars} reviews={reviews}  />
                  </div>
                  <div className="product_data_price">
                    MRP: &nbsp; <del>
                      <FormatPrice price={price + 250000} />
                    </del>
                  </div>
                  <div className="product_data_real_price">
                    <b>  Deal of the day : &nbsp;
                      <FormatPrice price={price} />
                    </b>
                  </div>
                  <div className="product_description">
                    <p>{description}</p>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <div className="product-data-warranty">
                        <div className="service-1 mb-3 text-center">
                          <div className="icon my-2">
                            <GrDeliver />
                          </div>
                          <div className="title">
                            <h5>Free Delivery</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="product-data-warranty">
                        <div className="service-2 text-center">
                          <div className="icon my-2">
                            <MdSecurity />
                          </div>
                          <div className="title">
                            <h5>30 Days Replacement</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="product-data-warranty">
                        <div className="service-2 my-3 text-center">
                          <div className="icon my-2">
                            <GiReceiveMoney />
                          </div>
                          <div className="title">
                            <h5>Hassan Delivered</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="product-data-warranty">
                        <div className="service-4 mb-3 text-center">
                          <div className="icon my-2">
                            <RiSecurePaymentLine />
                          </div>
                          <div className="title">
                            <h5>1 Year Warranty</h5>
                          </div>
                        </div>
                      </div>
                    </div> <hr className="hr" />
                  </div>
                  <div className="stock_available mt-3">
                    <p> Available :  <b className="bolds"> {stock > 0 ? "In Stock" : "Not Available"} </b></p>
                  </div>
                  <div className="product_id">
                    <p> ID :  <b className="bolds"> {id} </b></p>
                  </div>
                  <div className="product_brand">
                    <p> Brand :  <b className="bolds"> {company} </b></p>
                  </div>
                  <hr className="hr" />
                  <div className="color_scheme">
                    {
                       stock > 0 && <AddToCart product={singleProduct} />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default SingleProduct;
