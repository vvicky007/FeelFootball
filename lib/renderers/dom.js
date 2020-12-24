import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../assets/css/styles.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import ConfigureStore from '../redux/configureStore'
import InitialState from '../components/common/InitialState'
const store = ConfigureStore(InitialState)
const Index = ()=> (
   
   <ReduxProvider store={store}>
   
   <BrowserRouter>
   <App/>
   </BrowserRouter>
   </ReduxProvider>
);

ReactDom.hydrate(<Index/>,document.getElementById('root'));
