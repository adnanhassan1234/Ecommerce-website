import React from 'react';
import { useProductContext } from '../Context/ContextProduct';
import Product from './Product';

const FeatureProduct = () => {

  const { featureProducts } = useProductContext();
  console.log("🚀 ~ file: FeatureProduct.js ~ line 7 ~ FeatureProduct ~ featureProducts", featureProducts);

  return (
    <>
      <div className="feature_section">
        <div className="container">
          <div className="check_title">
            <h6 className='mb-0'>CHECK NOW!</h6>
          </div>
          <div className="title">
            <h2>Our feature Service</h2>
          </div>
          <div className="row my-4">
           {
            featureProducts.map((currData)=> {
              return(
                <Product 
                  {...currData}   // this is a short procedure by spread operator
                  key={currData.id}
                  // name={currData.id}
                  // image={currData.image}
                  // price={currData.price}
                  // category={currData.category}
                 />
              )
            })
           }
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureProduct;