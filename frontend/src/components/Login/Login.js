import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

import styles from "css/Login/Login.module.css";

function Login(props) {
  const [userId, setUserId] = useState("");   // 아이디
  const [userPwd, setUserPwd] = useState(""); // 비밀번호
  
  const onLogin = () => {
    console.log(userId);
    console.log(userPwd);
  };
  const getUserId = (e) => {
    setUserId(e.target.value);
  };
  const getUserPwd = (e) => {
    setUserPwd(e.target.value);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div className={"container " + styles.box_gray}>
        <Form>
          <Form.Group className="mb-3" controlId="userId">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디"
              value={userId}
              onChange={getUserId}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="userPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={userPwd}
              onChange={getUserPwd}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 pe-auto" controlId="loginChk">
            <Form.Check type="checkbox" label="로그인상태유지"></Form.Check>
          </Form.Group>
          <Form.Group className="mb-3 w-auto">
            <Button variant="primary" type="button" onClick={onLogin}>
              로그인
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div>
       <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="">비밀번호찾기</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" className="fs_15">
              아이디찾기
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signUp" className="fs_15">
              회원가입
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Login;
