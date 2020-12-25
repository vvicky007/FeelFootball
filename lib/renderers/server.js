import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../components/App';
import { StaticRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import ConfigureStore from '../redux/configureStore'
import InitialState from '../components/common/InitialState'
const store = ConfigureStore(InitialState)
const server = (req)=>{
    const context = {};
    return ReactDOMServer.renderToString( 
     <ReduxProvider store={store}>
    <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
     </ReduxProvider>
    );
}
export default server
