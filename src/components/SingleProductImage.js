import React, { useState , useEffect} from 'react';

const SingleProductImage = ({ imgs = [{ url: "" }] }) => {
console.log("🚀 ~ file: SingleProductImage.js ~ line 4 ~ SingleProductImage ~ imgs", imgs)

  const [mainImage, setMainImage] = useState(imgs[0]);
  // const [isLoader, setIsLoader] = useState(false); //spinner


//   useEffect(() => {
//     mainImage();
//     setIsLoader(true);
//   }, [imgs])

  
//   if (!isLoader) {
//     return <div className='loader'>
//         <div className="spinner">
//         </div>
//     </div>
// };
  

  return (
    <>
      <div className="col-md-6 col-12 mt-5">
        <div className="row">
          <div className="col-3 large_image">
            <div className="full">
              <div className="product_image">
                {
                  imgs.map((curElm, index) => {
                    return (
                      <figure>
                        <img
                          src={curElm.url}
                          alt={curElm.filename}
                          key={index}
                          width="100%"
                          onClick={() => setMainImage(curElm)}
                        />
                      </figure>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-9 large_image">
            <div className="full">
              <div className="product_image2">
                <img src={mainImage.url}  width="100%"  alt="no-display" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductImage;