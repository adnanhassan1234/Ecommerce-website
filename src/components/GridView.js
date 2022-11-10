import React from 'react'
import Product from './Product';

const GridView = ({ products }) => {
    return (
        <>

            {
                products.map((currElm, id) => {
                    return <Product key={currElm.id} {...currElm} />
                })
            }

        </>
    )
}

export default GridView;