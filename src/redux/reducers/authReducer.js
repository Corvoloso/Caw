import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './modules/rootReducer';

const sagaMonitor = process.env.NODE_ENV == 'development' && null;

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
