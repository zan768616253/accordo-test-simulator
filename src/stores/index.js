import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';

const StoreFactory = () =>
  applyMiddleware(thunkMiddleware)(createStore)(reducer)

export default StoreFactory
