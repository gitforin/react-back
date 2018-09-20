import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
class menu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        var openKey='staff',selectKey='login';
        if(localStorage.getItem('openKey')){
            openKey=localStorage.getItem('openKey');
        }
        if(localStorage.getItem('selectKey')){
            selectKey=localStorage.getItem('selectKey');
        }
        return ( 
            <div className="layout-left">
                <div className="header">猎豹 v1.0
                </div> 
                <Menu
                    onClick={this.props.handleClick}
                    mode="inline"
                    className="layout-menu"
                    defaultSelectedKeys={[selectKey]}
                    defaultOpenKeys={[openKey]}>
                    <SubMenu key="staff" title={<span><Icon type="user"/><span>人员管理</span></span>}>
                      <Menu.Item key="login"><Link  to='/staff/login'>登录</Link></Menu.Item>
                      <Menu.Item key="register"><Link  to='/staff/register'>注册</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default menu;
