import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./auth.css"; // Importing CSS for consistency
import { Link } from "react-router-dom";
import { RegisterUser } from "../apiCalls/users";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Register() {
  const registerData = async (values) => {
    console.log(values);

    const response = await RegisterUser(values);
    console.log(response);
  };
  return (
    <div>
      <div className="auth-container">
        <div className="auth-box">
          <h1 className="title">Register for MovieBook</h1>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={registerData}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<span style={{ color: "white" }}>Name</span>}
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                type="text"
                placeholder="Enter your name"
                className="input-field"
              />
            </Form.Item>
            <Form.Item
              label={<span style={{ color: "white" }}>Email</span>}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email to proceed",
                },
              ]}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="input-field"
              />
            </Form.Item>
            <Form.Item
              label={<span style={{ color: "white" }}>Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                type="password"
                placeholder="Enter your password"
                className="input-field"
              />
            </Form.Item>

            <Button
              type="primary"
              block
              htmlType="submit"
              className="auth-button"
            >
              Register
            </Button>
          </Form>
          <p className="switch-text">
            Already a user? New User?
            <Link to="/login"> Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
