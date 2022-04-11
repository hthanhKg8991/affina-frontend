import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducers from '../Reducers/index';
import rootSaga from '../Saga/index';
const sagaMiddleware = createSagaMiddleware();
function noop() {}
console.log = noop;
console.warn = noop;
console.error = noop;
const middleware = [sagaMiddleware];
// const middleware = [sagaMiddleware, logger];
// const middleware = [sagaMiddleware];

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: []
}
const persistedReducer = persistReducer(persistConfig, rootReducers)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middleware),
});
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default store;

