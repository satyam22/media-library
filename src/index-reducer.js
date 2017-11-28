import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import client from './components/Client/reducer';
import login from './components/Login/reducer'; 
var IndexReducer=combineReducers({
    client,
    login,
    form
});
export default IndexReducer;