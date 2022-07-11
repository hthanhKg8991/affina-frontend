import { combineReducers } from '@reduxjs/toolkit';
import categoriesRedux from './Categories/CategoriesRedux';
import insuranceRedux from './Insurance/StepRedux';
import insuranceGroup from './Insurance/GroupStepRedux';
import insurancePackagesRedux from './Insurance/PackagesRedux';
import PaymentRedux from './Insurance/PaymentRedux';
import sendRequestRedux from './SentRequest/SendRequestRedux';
import AuthenticationRedux from './Auth/AuthenticationRedux';
import AuthRedux from './Auth/AuthRedux';
import UploadFileRedux from './Upload/UploadFileRedux';

const rootReducer = combineReducers({
    categoriesRedux,
    insuranceRedux,
    insuranceGroup,
    insurancePackagesRedux,
    sendRequestRedux,
    AuthenticationRedux,
    AuthRedux,
    PaymentRedux,
    UploadFileRedux,
});
export default rootReducer;