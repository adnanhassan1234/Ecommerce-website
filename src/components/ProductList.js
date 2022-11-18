import React from 'react';
import Product from './Product';
import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';


const ProductList = () => {

    const { filter_products, grid_view } = useFilterContext();
    
    console.log("🚀 ~ file: ProductList.js ~ line 10 ~ ProductList ~ filter_products", filter_products);

    if (grid_view === true) {
        return <GridView products={filter_products} />
    }

    if (grid_view === false) {
        return <ListView products={filter_products} />
    }

}

export default ProductList