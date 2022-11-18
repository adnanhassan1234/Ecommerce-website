import React, { useContext, createContext, useEffect, useReducer } from 'react';
import { useProductContext } from './ContextProduct';
import reducer from './FilterReducers';

const FilterContextsProvider = createContext();

// initialState data
const initialState = {
    filter_products: [],  // ALL PRODUCTS
    all_products: [],     // ALL PRODUCTS
    grid_view: true,
    sorting_value: "lowest",
    /* The initial state of the filter. */
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: 0,
        maxPrice: 0,
        minPrice: 0,
    }
};


const FilterContext = ({ children }) => {

    // custom useContext Hook 
    /* A custom hook that is returning the products from the ContextProduct.js file. */
    const { products } = useProductContext();
    console.log("🚀 ~ file: FilterContext.js ~ line 10 ~ FilterContext ~ products 2nd createContext all data", products);

    // useReducers hook
    const [state, dispatch] = useReducer(reducer, initialState);


    // Grid view data
    const setGridView = () => {
        dispatch({ type: "GRID_VIEW_DATA" });
    };

    // List view data
    const setListView = () => {
        dispatch({ type: "GRID_LIST_DATA" });
    };

    // sorting function

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };

    // sorting the products
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCT" });  // SEARCH FILTER PRODUCT
        dispatch({ type: "SORTING_PRODUCT" });   // SORTING PRODUCT
    }, [products, state.sorting_value, state.filters])

    // to load all the products for grid and list view
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    // update filter value

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    };

/**
 * When the clearFilters function is called, it will dispatch an action to the reducer with the type
 * CLEAR_FILTERS.
 */
    const clearFilters = () => {
        dispatch({ type: "CLEAR_ALL_FILTERS"})
    };

    return (
        <>
            <FilterContextsProvider.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue , clearFilters}}>
                {children}
            </FilterContextsProvider.Provider>
        </>
    )
}



//    custom Hook
const useFilterContext = () => {
    return useContext(FilterContextsProvider);
}

export default FilterContext;
export { useFilterContext, FilterContextsProvider };