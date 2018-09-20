import React from 'react';
import Counter from '@/components/counter.js';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
let timer = null;
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            urls: [require('../../images/lol1.png'), require('../../images/lol3.png')],
            tabIndex: 0
        }
    }
    render() {

        var tabIndex = this.state.tabIndex;
        var urls = this.state.urls;
        var url = urls[tabIndex];

        return (
            <div> 
                <Row>
                  <Col span={12}>
                    <img src={url}/>
                  </Col>
                  <Col span={12}>
                    <Counter value={this.props.value} increment={this.props.increment} decrement={this.props.decrement}/>
                  </Col>
                </Row> 
            </div>
        );

    }
    componentWillUnMount() {
        if (timer) {
            window.clearInterval(timer);
        }
    }
    componentDidMount() {
        // var tabIndex = this.state.tabIndex;
        // var urls = this.state.urls;
        // var url=urls[tabIndex];
        // var curKey=this.state.curKey;
        // timer=window.setInterval(()=>{
        //   var len=urls.length;
        //   if(tabIndex>=len-1){
        //     tabIndex=0;
        //   }else{
        //     tabIndex=tabIndex+1;
        //   }
        //   this.setState({
        //     tabIndex:tabIndex
        //   })
        //   if(timer){
        //     window.clearInterval(timer);
        //   }
        // },2000)
        // window.https.post(window.ApiName.getCaptcha, {
        //     username: 18723352681,
        //     channel: 2
        // }).then(res => {
        //     console.log('res',res);
        // }).catch(err => {
        // })
    }
}
function mapStateToProps(state) {
    const props = {
        value: state.finalValue
    };
    return props;
}
function mapDispatchToProps(dispatch) {
    return {
        increment: () => {
            dispatch({
                type: 'increment',
            });
        },
        decrement: () => {
            dispatch({
                type: 'decrement'
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);