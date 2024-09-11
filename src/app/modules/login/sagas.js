import { call, put, takeLatest } from 'redux-saga/effects';
import { globalAPI } from '../../../utils/axios';
import { history } from '../../../utils/history';
import { USER_LOGIN_SUCCESS } from './actions';

function* loginCreateNewRequest({payload}) {
  try {
    yield call(globalAPI.post, '/login_create_new_request', payload)
    

  } catch (err) {
    console.log(err)
  }
}

function* loginRequest({payload}) {
  try {
    const response = yield call(globalAPI.post, '/login_request', payload)

    if (response.data.status) {
      yield put(USER_LOGIN_SUCCESS())
      history.push('/home')
    } else {

      window.alert('User or Password is incorrect')
    }
  } catch (err) {
    console.log(err)
  }
}

function* loginSaga() {
  yield takeLatest('@login/USER_CREATE_LOGIN_REQUEST', loginCreateNewRequest)
  yield takeLatest('@login/USER_LOGIN_REQUEST', loginRequest)
}

export default loginSaga