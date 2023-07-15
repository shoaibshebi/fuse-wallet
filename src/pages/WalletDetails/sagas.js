import { takeLatest, call, put } from "redux-saga/effects";
import {
  getWalletProfile,
  getWalletProfileSuccess,
  getWalletProfileFailed,
  getTokenProfile,
  getTokenProfileSuccess,
  getTokenProfileFailed,
} from "./reducers";

import request from "../../utils/apisauce";

function* getWalletProfileSaga({ payload }) {
  let action;
  let url = `api?module=account&action=tokenlist&address=${payload.addressHash}`;

  try {
    const response = yield call(request, "GET", url);
    action = getWalletProfileSuccess(response);
  } catch (e) {
    action = getWalletProfileFailed(e);
  }
  yield put(action);
}
function* getTokenProfileSaga({ payload }) {
  let action;
  let url = `api?module=stats&action=tokensupply&contractaddress=${payload.addressHash}`;

  try {
    const response = yield call(request, "GET", url);
    action = getTokenProfileSuccess({
      ...response,
      addressHash: payload.addressHash,
    });
  } catch (e) {
    action = getTokenProfileFailed(e);
  }
  yield put(action);
}

export default function* saga() {
  yield takeLatest(getWalletProfile, getWalletProfileSaga);
  yield takeLatest(getTokenProfile, getTokenProfileSaga);
}
