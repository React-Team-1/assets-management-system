import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from "redux"
import {Provider} from "react-redux"
import teamsReducer  from "./store/reducers/teams"
import  userReducer from "./store/reducers/user"

const rootReducer = combineReducers({
      team : teamsReducer,
      user :userReducer
})

 const store = createStore(rootReducer)


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
