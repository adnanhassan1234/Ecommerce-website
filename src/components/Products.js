import React from 'react';
import FilterSection from './FilterSection';
import Product from './Product';
import ProductList from './ProductList';
import Sort from './Sort';

const Products = () => {

    return (
        <>
            <div className="grid_all_products my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className="full">
                                {/* FilterSection */}
                                <FilterSection />
                            </div>
                        </div>
                        <div className="col-md-9 col-12">
                            <div className="full my-2">
                                <section className="product_view_sort">
                                    <div className="sort_filter">
                                        {/* Sort */}
                                        <Sort />
                                    </div>
                                </section>
                            </div>
                            <div className="row mt-5">
                                <ProductList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;