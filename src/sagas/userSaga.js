import { put, call, takeLatest } from 'redux-saga/effects';
import { ATTEMPT_REGISTER, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from '../actions/constants';
import { registerUser } from '../api/post';

export function* watchRegisterUser() {
  yield takeLatest(ATTEMPT_REGISTER, registerUserAsync);
}

function* registerUserAsync(action) {
  const { email, name, password } = action.payload;
  try {
    const res = yield call(registerUser, { email, name, password });
    console.log("res", res);
    yield put({ type: REGISTRATION_SUCCESS, payload: { message: "Successfully Registered" }});
  } catch (err) {
    yield put({ type: REGISTRATION_ERROR, payload: { message: "Failed To Register" }});
  }
}