import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './Home/reducer';
import authenticateReducer from './Authenticate/reducer';

const reducer = combineReducers({homeReducer, authenticateReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
