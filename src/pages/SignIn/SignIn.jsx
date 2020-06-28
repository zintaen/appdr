import React from 'react';
import { Card, Col, Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Wrapper, LogoWrapper, Title, FormTitle, Action, FormItem } from './SignIn.styled';
import logo from 'assets/images/logo.png';

const SignIn = () => {
  const history = useHistory();
  const onFinish = async (values) => history.push('/dashboard');

  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logo} alt="Logo" />
        <Title>Doctor App</Title>
      </LogoWrapper>
      <Card>
        <FormTitle>Authentication</FormTitle>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Action>
            <Col></Col>
            <Col>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </FormItem>
            </Col>
          </Action>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default SignIn;
