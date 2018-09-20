import React from 'react';
import { Form, Icon, Input, Button, Checkbox,Row,Col} from 'antd';

import './index.scss';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Row>
              <Col span={12}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                      {getFieldDecorator('userName', {
                            rules: [{
                                required: true,
                                message: '请输入用户名！'
                            }],
                        })(
                            <Input prefix={<Icon type="user" style={{
                                color: 'rgba(0,0,0,.25)'
                            }} />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                            rules: [{
                                required: true,
                                message: '请输入密码！'
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{
                                color: 'rgba(0,0,0,.25)'
                            }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                      </Button>
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                      <a className="login-form-forgot" href="">忘记密码</a>

                    </FormItem>
                </Form>
              </Col>
            </Row>
        );
    }
}

const WrappedLogin = Form.create()(Login);
export default WrappedLogin;


