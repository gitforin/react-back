import React, { Component } from 'react';
import './App.css';
import BreadCrumbCustom from '@/layout/breadcrumb.jsx'
import RouterPage from './router/routerPage';
import Menu from '@/layout/menu.jsx';
class App extends Component {
     constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        return (
            <div className="layout">
            	<div className="layout-con">
                    <div className="layout-right">
                        <BreadCrumbCustom/>
                     	<RouterPage/> 
                    </div>
                    <Menu/>
                </div>
            </div>
        );
    }
}

export default App;