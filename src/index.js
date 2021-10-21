import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
// import {CometChat} from '@cometchat-pro/chat'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import './index.css';
import App from './App';
import reducers from './reducers';
import {API_REGION, APPID} from './constant/constant'



// var appID = APPID;
// var region = API_REGION;


// var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
// CometChat.init(appID, appSetting).then(
//   () => {
//     console.log("Initialization completed successfully");
//   },
//   error => {
//     console.log("Initialization failed with error:", error);
//   }
// );


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

