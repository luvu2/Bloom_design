import React from 'react';
import './Signup.css';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

function Signup(props) {
    return (
        <Form>
            <Form.Item style={{ backgroundColor: "white",
                                borderRadius: "10%",
                                marginTop: "60px",
                                paddingTop: "60px",
                                paddingBottom: "80px",
                                paddingLeft: "90px",
                                paddingRight: "90px" }}>

                <Form.Item className="signup_title">회원가입</Form.Item>

                <Form.Item
                    label="Name"
                >
                    <Input
                        name="name"
                        placeholder="이름을 입력하세요." />
                </Form.Item>

                <Form.Item
                    label="Username"
                >
                    <Input
                        name="username" 
                        placeholder="닉네임을 입력하세요." />
                </Form.Item>

                <Form.Item
                    label="Email"
                >
                    <Input
                        name="email" 
                        placeholder="이메일을 입력하세요." />
                </Form.Item>

                <Form.Item
                    label="Password"
                >
                    <Input
                        name="password"
                        placeholder="6~20자 사이로 입력해주세요." />
                </Form.Item>

                <Form.Item >
                    <Button className="ant-btn-primary" type="primary" block shape ="round" htmlType="submit">회원가입</Button>
                </Form.Item>

                <Form.Item style={{ textAlign: "center" }}>
                    계정이 있으신가요? <Link style={{ color: "#D5C6E3" }} to="/login">로그인</Link>
                </Form.Item>

            </Form.Item>
        </Form>


        // <div className="bg-color">
        //     <div className="form_container">
        //         <div className="signup_title">회원가입</div>
        //         <div className="input_form">
                    
        //             <div className="id">아이디</div>
        //             <div className="id_form">아이디를 입력하세요.</div>
                    
        //             <div className="pw">비밀번호</div>
        //             <div className="pw_form">비밀번호를 입력하세요.</div>
            
        //             <div className="pw_check">비밀번호 확인</div>
        //             <div className="pw_check_form">비밀번호를 다시 입력하세요.</div>

        //             <div className="forgot_pw">비밀번호를 잊어버리셨나요?</div>
        //         </div>
        //         <div className="login_button">로그인</div>
        //         <div className="signup_button">회원가입</div>
        //     </div>
        // </div>
    );
}

export default Signup;