import { Form, Col, Row, Card, Typography, Input, Checkbox, Button } from 'antd';

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const { Title } = Typography;

const Login = () => {

    return (
        
        <Row>
            <Card className='login-card'>
                <Title level={2} className='logo'> ERGO </Title>
                <Form className='login-form'>
                    <Title level={2} className='title'>
                        login <br/> 
                        <span className="span">
                        Lorem ipsum dolor sit amet</span>
                    </Title>
                    
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <p>Benutzername*</p>
                        <Input size="large"  />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <p>Password*</p>
                        <Input.Password size="large"  />
                        {/* <Link to='/'> Password vergessen? </Link> */}
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{span: 16 }}>
                        <Checkbox>Zugangsdaten speichern</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" size="large" htmlType="submit">Login</Button>
                    </Form.Item>

                </Form>
            </Card>
            <Col span={12} className='bg-blue'></Col>
            <Col span={12} className='bg-light'></Col>
        </Row>

    )

}

export default Login;