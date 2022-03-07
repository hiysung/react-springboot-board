import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import styles from "css/Login/Login.module.css";
import logo from "css/images/react-logo.png";
import { useEffect, useState } from "react";

function Login() {
    const[userId, setUserId] = useState("");
    const[userPwd, setUserPwd] = useState("");
    const onLogin = () => {
        console.log(userId);
        console.log(userPwd);
    }
    const getUserId = (e) => {
        setUserId(e.target.value);
    }
    const getUserPwd = (e) => {
        setUserPwd(e.target.value);
    }
    useEffect(() => {
        
    }, [])
  return (
    <div>
      <div>
        <div className="container" style={{textAlign : "center", paddingTop:"50px"}}>
            <Image className="img-logo" src={logo}></Image>
        </div>
        <div className="container">
            <Form>
                <Form.Group className="mb-3" controlId="userId">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" placeholder="아이디" value={userId} onChange={getUserId}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="userPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호" value={userPwd} onChange={getUserPwd}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginChk">
                <Form.Check type="checkbox" label="로그인상태유지"></Form.Check>
                </Form.Group>
                <Button variant="primary" type="button" onClick={onLogin}>
                로그인
                </Button>
            </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
