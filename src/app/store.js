import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import TaskReducer from './modules/tasks/reducer'
import mySaga from './modules/tasks/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    tasks: TaskReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(mySaga)