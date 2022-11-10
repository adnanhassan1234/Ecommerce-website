import React from 'react';
import Slider from "react-slick";
import client1 from './clients/client1.svg';
import client2 from './clients/client2.svg';
import client3 from './clients/client3.svg';
import client4 from './clients/client4.svg';
import client5 from './clients/client5.svg';
import client8 from './clients/client8.svg';
import client9 from './clients/client9.svg';
import client10 from './clients/client10.svg';
import client11 from './clients/client11.svg';
import client12 from './clients/client12.svg';


const Trusted = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        className: "center",
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <div className="brand_section my-5">
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <h3><img src={client1} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client2} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client3} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client4} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client5} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client8} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client9} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client10} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client11} alt="" /></h3>
                        </div>
                        <div>
                            <h3><img src={client12} alt="" /></h3>
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Trusted;
