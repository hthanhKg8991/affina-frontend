import { combineReducers } from '@reduxjs/toolkit';
import categoriesRedux from './Categories/CategoriesRedux';
import insuranceRedux from './Insurance/StepRedux';
import insurancePackagesRedux from './Insurance/PackagesRedux';
import sendRequestRedux from './SentRequest/SendRequestRedux';

const rootReducer = combineReducers({
    categoriesRedux,
    insuranceRedux,
    insurancePackagesRedux,
    sendRequestRedux,
});
export default rootReducer;