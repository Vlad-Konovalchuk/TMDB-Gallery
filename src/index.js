import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter,} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {history} from "./store";
// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>,
//     </Provider>,
//     document.getElementById("root")
// );

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
);
