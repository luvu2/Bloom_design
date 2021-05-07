import React from 'react';
import './Login.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <Form>
            <Form.Item style={{ backgroundColor: "white",
                                borderRadius: "10%",
                                marginTop: "60px",
                                paddingTop: "60px",
                                paddingBottom: "80px",
                                paddingLeft: "90px",
                                paddingRight: "90px" }}>
                                
                <Form.Item className="login_title">로그인</Form.Item>

                <Form.Item
                    label="Username"
                    name="username"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button className="ant-btn-primary" type="primary" block shape ="round" htmlType="submit">로그인</Button>
                </Form.Item>

                <Form.Item style={{ textAlign: "center" }}>
                    계정이 없으신가요? <Link style={{ color: "#D5C6E3" }} to="/signup">회원가입</Link>
                </Form.Item>
            </Form.Item>
        </Form>


        // <div className="bg-color">
        //     <div className="form_container">
        //         <div className="login_title">로그인</div>
        //         <div className="input_form">
                    
        //             <div className="id">아이디</div>
        //             <div className="id_form">아이디를 입력하세요.</div>
                    
        //             <div className="pw">비밀번호</div>
        //             <div className="pw_form">비밀번호를 입력하세요.</div>
                    
        //             <div className="forgot_pw">비밀번호를 잊어버리셨나요?</div>
        //         </div>
        //         <div className="login_button">로그인</div>
        //         <div className="signup_button">회원가입</div>
        //     </div>
        // </div>
    );
};

export default Login;