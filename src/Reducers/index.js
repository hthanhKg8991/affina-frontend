import { combineReducers } from '@reduxjs/toolkit';
import categoriesRedux from './Categories/CategoriesRedux';
import insuranceRedux from './Insurance/StepRedux';
import insurancePackagesRedux from './Insurance/PackagesRedux';

const rootReducer = combineReducers({
    categoriesRedux,
    insuranceRedux,
    insurancePackagesRedux,
});
export default rootReducer;