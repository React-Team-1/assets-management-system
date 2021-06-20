import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {createStore,combineReducers, applyMiddleware,compose} from "redux"
import {Provider} from "react-redux"
import teamsReducer  from "./store/reducers/teams"
import  userReducer from "./store/reducers/user"
import locationReducer from "./store/reducers/location"
import  assetsReducer from "./store/reducers/assets"
import dashBoardReducer from "./store/reducers/dashboardData"
import reduxThunk from "redux-thunk"



const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
      team : teamsReducer,
      user :userReducer,
      assets : assetsReducer,
      dashboardData: dashBoardReducer,
      location:locationReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(rootReducer,composeEnhancers(applyMiddleware(reduxThunk)) )


ReactDOM.render(
  <Provider store={store}>
         <App />
  </Provider>
  ,
  document.getElementById('root')
);

export default store;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
