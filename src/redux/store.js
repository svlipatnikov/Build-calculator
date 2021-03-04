import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancer(applyMiddleware(thunk));

const store = createStore(allReducers, middleware);

export default store;
