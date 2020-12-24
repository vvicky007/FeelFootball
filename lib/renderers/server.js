import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from 'components/App';
import { StaticRouter } from 'react-router-dom';

const server = (req)=>{
    const context = {};
    return ReactDOMServer.renderToString( 
    <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>);
}
export default server