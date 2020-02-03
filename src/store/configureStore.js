import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import truthReducer from './reducers/truths';

const rootReducer = combineReducers({truths: truthReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(reduxThunk));
};

export default configureStore;
