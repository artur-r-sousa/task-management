import { call, put, takeLatest } from 'redux-saga/effects'
import { globalAPI } from '../../../utils/axios'
import { GET_TASKS_SUCCESS } from './actions'

function* getTasks() {
  try {
    
    const tasks = yield call(globalAPI.get)
    console.log(tasks)
    yield put(GET_TASKS_SUCCESS(tasks.data))
  } catch (err) {
    console.log(err)
  }
}

function* addTask() {
  try {
    const tasks = yield call(globalAPI.post, '/add_task')
    console.log(tasks)
  } catch (err) {
    console.log(err)
  }
}

function* tasksSaga() {
  yield takeLatest('@tasks/GET_TASKS_REQUEST', getTasks)
  yield takeLatest('@tasks/ADD_TASKS_REQUEST', addTask)
}

export default tasksSaga;