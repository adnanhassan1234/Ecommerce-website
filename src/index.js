// import React from "react";
// import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css";
// import App from "./App";
// import AppProvider from "./Context/ContextProduct";
// import ContextProduct from "./Context/ContextProduct";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <ContextProduct>
//         <App />
//     </ContextProduct>


// );

import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from "./App";
import ContextProduct from "./Context/ContextProduct";
import FilterContext from "./Context/FilterContext";
import Cart_context from "./Context/Cart_context";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

/* A way to pass the context to the app. */
    <ContextProduct>
        <FilterContext>
            <Cart_context>
                <App />
            </Cart_context>
        </FilterContext>
    </ContextProduct>

);

