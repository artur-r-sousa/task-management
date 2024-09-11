import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './modules/rootReducer'

import rootSaga from './modules/rootSagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'login',
    'tasks'
  ] // aqui você coloca os reducers que deseja persistir
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ 
      thunk: false,
      serializableCheck: false      
     }).concat([sagaMiddleware]),
   
  
})

// then run the saga
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };