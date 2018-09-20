import './index.scss';
import registerServiceWorker from './registerServiceWorker';
// 引入所有基础配置
import './config/globalConfig';
import App from './App';
//引入路由
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './redux/store';
import 'antd/dist/antd.css';
render( 
	<Provider store = { Store }>
	 	<BrowserRouter>
    		<App/>
    	</BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();