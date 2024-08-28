import { call, put, takeLatest } from 'redux-saga/effects'
import { globalAPI } from '../../../utils/axios'
import { GET_TASKS_SUCCESS } from './actions'

function* getTasks() {
  try {
    
    const tasks = yield call(globalAPI.get)

    yield put(GET_TASKS_SUCCESS(tasks.data))
  } catch (err) {

    console.log(err)
  }
}

function* mySaga() {
  yield takeLatest('@tasks/GET_TASKS_REQUEST', getTasks)
}

export default mySaga