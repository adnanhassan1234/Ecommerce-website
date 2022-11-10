import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Stars = ({ stars, reviews }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <FaStar className="icon" />
            ) : stars >= number ? (
              <FaStarHalfAlt className="icon" />
            ) : (
              <AiOutlineStar className="icon" />
            )}
          </span>
        );
      });
    

    return (
        <>
           <div className="icon_style">
             <p className='rating'> {ratingStar} <span> {reviews} customer reviews </span> </p>
        
           </div>
        </>
  );
};

export default Stars;