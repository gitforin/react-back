import React, { Component } from 'react';
import { Breadcrumb} from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
//具体导航的名称
const breadcrumbNameMap = {
    '/index': '首页',
    '/staff':'人员管理',
    '/staff/register': '注册',
    '/staff/login': '登录',
};
class BreadcrumbCustom extends Component {
    //利用PropTypes记住所跳转每个页面的位置 
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            pathSnippets: [],
            extraBreadcrumbItems: null
        }
    }
    getPath() {
	//对路径进行切分，存放到this.state.pathSnippets中
        this.state.pathSnippets = this.context.router.history.location.pathname.split('/').filter(i => i);
	//将切分的路径读出来，形成面包屑，存放到this.state.extraBreadcrumbItems
        if(this.state.pathSnippets.length>1){
            this.state.extraBreadcrumbItems = this.state.pathSnippets.map((_, index) => {
                const url = `/${this.state.pathSnippets.slice(0, index + 1).join('/')}`;
                var urlArr=url.slice(1,url.length).split('/');
                if(urlArr.length>1){
                    localStorage.setItem('openKey',urlArr[0]);
                    localStorage.setItem('selectKey',urlArr[1]);
                    return (
                        <Breadcrumb.Item key={url}>
                            <Link to={url}>
                                {breadcrumbNameMap[url]}
                            </Link>
                        </Breadcrumb.Item>
                    );
                }else{
                    localStorage.clear();
                    return (
                        <Breadcrumb.Item key={url}>
                            {breadcrumbNameMap[url]}
                        </Breadcrumb.Item>
                    );
                } 
            });
        }else{
             localStorage.clear();
        }
    }
 
    componentWillMount() {
	//首次加载的时候调用，形成面包屑
        this.getPath();
    }
    componentWillReceiveProps(){
	//任何子页面发生改变，均可调用，完成路径切分以及形成面包屑
        this.getPath();
    }
    render() {
        return (
            <span>
            <Breadcrumb>
                {this.state.extraBreadcrumbItems}
            </Breadcrumb>
            </span>
        )
    }
}
export default BreadcrumbCustom;