import {createStore, applyMiddleware} from 'redux';
import RootReducer from './Reducer/RootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, RootReducer);

export const Store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(Store);
