import React from 'react';
import { GrDeliver } from 'react-icons/gr';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';


const Service = () => {

    return (
        <>
            <div className="service_section my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="service-1 mb-3 text-center">
                                <div className="icon my-2">
                                    <GrDeliver />
                                </div>
                                <div className="title">
                                    <h5>Super fast and delivery</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="service-2 text-center">
                                <div className="icon my-2">
                                    <MdSecurity />
                                </div>
                                <div className="title">
                                    <h5>Non-Contact Shipping</h5>
                                </div>
                            </div>
                            <div className="service-2 my-3 text-center">
                                <div className="icon my-2">
                                    <GiReceiveMoney />
                                </div>
                                <div className="title">
                                    <h5>Money Back Guarantee</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="service-3 mb-3 text-center">
                                <div className="icon my-2">
                                    <RiSecurePaymentLine />
                                </div>
                                <div className="title">
                                    <h5>Super Secure Payment System</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;