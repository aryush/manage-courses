import 'babel-polyfill';        //for those ES6 features which babel cannot transpile to ES5.
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import routes from './routes';
import configureStore from './store/configureStore';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.querySelector('#app')
);
