import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

import WalletDetailsReducer from "../pages/WalletDetails/reducers";
import WalletDetailsSaga from "../pages/WalletDetails/sagas";

const forkAll = (...sagas) => all(sagas.map((saga) => fork(saga)));

const rootSaga = function* saga() {
  yield forkAll(WalletDetailsSaga);
};

const rootReducer = {
  walletDetails: WalletDetailsReducer,
};

const redux = combineReducers(rootReducer);
const saga = createSagaMiddleware();
const middleware = [saga];

const store = configureStore({
  reducer: redux,
  devTools: true,
  middleware,
});

saga.run(rootSaga);
export default store;
