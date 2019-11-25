import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import configureStore from './redux/store'

import './index.css';
import * as serviceWorker from './serviceWorker';

// import './scripts/css/backgroundVideo.css';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import './scripts/css/stylesheet.css';
// import './scripts/css/sideNav.css';
// import './scripts/css/sideNav2.css';
// import './scripts/css/simple-sidebar.css'
// import 'select2/dist/css/select2.min.css'
// import 'select2/dist/js/select2'
import './scripts/css/hoverSidebar.css'
import 'font-awesome/css/font-awesome.css'



// ReactDOM.render(
//     <Provider store = {configureStore() }>
//         <HoverSideMenu />
//     </Provider>
//     , document.getElementById('side-panel-wrap')
// );

ReactDOM.render(
    <Provider store={ configureStore() }>
        <App />
    </Provider>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
