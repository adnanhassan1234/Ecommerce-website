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
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    /* A wrapper for the entire application. It is a component that is provided by the auth0 library.
    It is used to wrap the entire application. */
    <Auth0Provider
        domain="dev-4q6l4f5tgumr22sz.us.auth0.com"
        clientId="uXKbSFbHIMv6xUmXm8sOQQWhXympmeD2"
        redirectUri={window.location.origin}
    >
     {/* A way to pass the context to the app.  */}
        <ContextProduct>
            <FilterContext>
                <Cart_context>
                    <App />
                </Cart_context>
            </FilterContext>
        </ContextProduct>

    </Auth0Provider>,


);

