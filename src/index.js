import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router}  from 'react-router-dom'
import App from './components/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import { RestoServiceProvider } from './components/resto-service-context';
import RestoService from './services/resto-service';
import './index.scss';


const restoService = new RestoService()

ReactDOM.render(
    <ErrorBoundry>
        <Provider store = {store}>
            <RestoServiceProvider value = {restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceProvider>
        </Provider>
    </ErrorBoundry>
    , document.getElementById('root'));

