import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// React DI is handlled by provider
import { Provider } from 'react-redux';
import store from './store';

import Album from './components/album.component';
import Photo from './components/photo.component';
// The main component is used from reduxConfig, which gives
// MainComponent along with props, i.e. actions and store.
// import MainComponent from './components/main.component';
import MainComponent from './redux/mainComponentReduxConfig';

import ErrorComponent from './components/error.component';

// router is managing/maintaining it's own history 
var router =
    <Provider store={store}>
        <Router history={browserHistory}>
            {/* Create a base route, i.e. main container */}
            <Route path="/" component={MainComponent}>
                {/* Define default component to be loaded  */}
                <IndexRoute component={Album}> </IndexRoute>

                {/* define other routes */}
                <Route path="/photo/:code" component={Photo}>
                </Route>

                <Route path="/album" component={Album}>
                </Route>

                <Route path="/*" component={ErrorComponent}>
                </Route>
            </Route>
        </Router>
    </Provider>

ReactDOM.render(router, document.querySelector('#content'));