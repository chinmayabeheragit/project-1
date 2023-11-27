/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './src/auth/Reducer';
// import auth from './src/auth/Reducer';
import alert from './src/common/alert/Reducers';
import loader from './src/common/loader/Reducers';
import profile from './src/Pages/Profile/Reducer';
import network from './src/Pages/Network/Reducer'
// import Home from './src/Pages/Home/Reducer'
import events from './src/Pages/Events/Reducer';
import team from './src/Pages/Team/Reducer';
import home from './src/Pages/Home/Reducer';
import post from './src/Pages/Post/Reducer';
import Setting from './src/common/reducer';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers({

  auth,
  alert,
  loader,
  profile,
  network,
  team,
  events,
  home,
  post,
  Setting

});

const configureStore = initialState =>
  createStoreWithMiddleware(reducer, initialState);

export default configureStore;
