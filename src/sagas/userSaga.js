import { put, call, takeLatest } from 'redux-saga/effects';
import { ATTEMPT_SIGN_IN } from '../actions/constants';
import { signIn } from '../api/post';

// async function* attemptSignInAsync() {
//   yield console.log("HI");
//   //const resp = call(signIn);
//   // yield console.log(resp);
// }

// export function* watchAttemptSignIn() {
//   yield takeLatest(ATTEMPT_SIGN_IN, attemptSignInAsync);
// }

function* attemptSignInAsync(action) {
  const resp = yield call(signIn, action.payload);
  
}
export function* watchAttemptSignIn() {
  yield takeLatest(ATTEMPT_SIGN_IN, attemptSignInAsync);
}