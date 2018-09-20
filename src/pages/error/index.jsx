import React from 'react';
import './index.scss';
import { Button} from 'antd';
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    goBack(){
       window.history.go(-1);
    }
    render() {
        return (
            <div className="error">
              404
              <div>
                <Button type="primary" size="large" onClick={this.goBack.bind(this)}>返回上一页</Button>
              </div>   
            </div>
           
        );

    }
    componentWillUnMount() {}
    componentDidMount() {}
}
