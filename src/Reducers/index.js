import { combineReducers } from '@reduxjs/toolkit';
import categoriesRedux from './Categories/CategoriesRedux';
import insuranceRedux from './Insurance/StepRedux';
import insurancePackagesRedux from './Insurance/PackagesRedux';
import sendRequestRedux from './SentRequest/SendRequestRedux';
import AuthenticationRedux from './Auth/AuthenticationRedux';
import AuthRedux from './Auth/AuthRedux';

const rootReducer = combineReducers({
    categoriesRedux,
    insuranceRedux,
    insurancePackagesRedux,
    sendRequestRedux,
    AuthenticationRedux,
    AuthRedux,
});
export default rootReducer;