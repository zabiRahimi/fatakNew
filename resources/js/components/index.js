import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';

import App from './App';
import { createBrowserHistory } from 'history';
import ScrollToTop from './scrollToTop';
if (document.getElementById('app')) {
    ReactDOM.render(
        <Router >
                <ScrollToTop/>

                <LastLocationProvider>
            <App />
            </LastLocationProvider>
        </Router>
        , document.getElementById('app'));
}