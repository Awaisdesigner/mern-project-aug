import {getProductsReducer} from './ProductReducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
    getproductsdata:getProductsReducer 
});



export default RootReducer;
