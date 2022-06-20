import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CryptoJS from "crypto-js";

import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducers from "../Reducers/index";
import rootSaga from "../Saga/index";
const sagaMiddleware = createSagaMiddleware();
function noop() {}
// console.log = noop;
console.warn = noop;
console.error = noop;
const middleware = [sagaMiddleware];

// const middleware = [sagaMiddleware, logger];
// const middleware = [sagaMiddleware];

var secretKey = "Affina@123#-^+=";
const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // convert mySet to an Array.
    //   return { ...inboundState, mySet: [...inboundState.mySet] };
    if (!inboundState) return inboundState;
    const cryptedText = CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      secretKey
    );
    return cryptedText.toString();
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // convert mySet back to a Set.
    // return { ...outboundState, mySet: new Set(outboundState.mySet) };
    if (!outboundState) return outboundState;
    const bytes = CryptoJS.AES.decrypt(outboundState, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  }
);

const persistConfig = {
  key: "root",
  storage,
  // whitelist: []
  blacklist: ["AuthenticationRedux", "PaymentRedux"],
  transforms: [SetTransform],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default store;
