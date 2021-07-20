import {createStore , applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import AuthReducer from './reducers/AuthReducer';
import UploadReducer from './reducers/UploadReducer';
import ContactReducer from './reducers/ContactReducer'


const rootReducers = combineReducers({
    AuthReducer,
    UploadReducer,
    ContactReducer
    
});

const middlewares = [thunkMiddleware]
const Store = createStore(rootReducers,composeWithDevTools(applyMiddleware(...middlewares)));
export default Store;
