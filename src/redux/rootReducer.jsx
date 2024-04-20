import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import contentSlice from './slices/contentSlice';
import customizationSlice from './slices/customizationSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};
const rootReducer = combineReducers({
  //   loginReducer: loginSliceReducer,
  contentReducer: contentSlice,
  customizationReducer: customizationSlice
});

export { rootReducer, rootPersistConfig };
