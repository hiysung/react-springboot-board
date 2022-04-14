import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

import styles from "css/Login/Login.module.css";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

function SignUp(props) {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwd2, setUserPwd2] = useState("");
  const [userName, setUserName] = useState("");
  const [userBday, setUserBday] = useState("");
  const [userSex, setUserSex] = useState("");
  const [userTel, setUserTel] = useState("");

  const onConfirm = () => {
    if(userId === "") {
        alert("아이디를 입력해주세요.");
        return false;
    }

    if(userPwd !== userPwd2) {
        alert("비밀번호와 비밀번호확인이 다릅니다.");
        return false;
    }

    if(userName === "") {
        alert("이름을 입력해주세요.");
        return false;
    }

    registerUser();
  }

  const registerUser = async () => {
    let response, data;

    try {
      response = await axios.post("http://localhost:3000/user/register", {
          id : userId
        , name : userName
        , pw : userPwd
        , bday : userBday
        , sex : userSex
        , tel : userTel
      });

      data = await response.data;
    }
    catch(error) {
      console.log(error);
    }
    
  }

  const onBack = () => {

  }

  const getUserId = (e) => {
    setUserId(e.target.value);
  };
  const getUserPwd = (e) => {
    setUserPwd(e.target.value);
  };
  const getUserPwd2 = (e) => {
    setUserPwd2(e.target.value);
  };
  const getUserName = (e) => {
    setUserName(e.target.value);
  }
  const getUserBday = (e) => {
    setUserBday(e.target.value);
  }
  const getUserSex = (e) => {
      setUserSex(e.target.value);
  }
  const getUserTel = (e) => {
      setUserTel(e.target.value);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <div className={"container " + styles.box_gray}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="userId">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={userId}
                onChange={getUserId}
              ></Form.Control>
            </Form.Group>
            {/* <Form.Group as={Col} xs="auto">
              <Button variant="secondary">중복확인</Button>
            </Form.Group> */}
          </Row>

          <Form.Group className="mb-3" controlId="userPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              value={userPwd}
              onChange={getUserPwd}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="userPasswordConfirm">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              value={userPwd2}
              onChange={getUserPwd2}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>이름</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={userName}
              onChange={getUserName}
            ></Form.Control>
          </Form.Group>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="userBday">
              <Form.Label>생년월일</Form.Label>
              <Form.Control
                type="text"
                placeholder="예시) 20220412"
                value={userBday}
                onChange={getUserBday}
              ></Form.Control>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="userSex">
            <Form.Label>성별</Form.Label>
            <Form.Select aria-label="성별" value={userSex} onChange={getUserSex}>
              <option value="">성별</option>
              <option value="M">남</option>
              <option value="F">여</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="userTel">
            <Form.Label>전화번호</Form.Label>
            <Form.Control
              type="text"
              placeholder="숫자만 입력해주세요."
              value={userTel}
              onChange={getUserTel}
            ></Form.Control>
          </Form.Group>
          <Row className="mb-3 mx-auto">
            <Form.Group as={Col} className="d-grid">
              <Button variant="primary" type="button" onClick={onConfirm}>
                확인
              </Button>
            </Form.Group>
            <Form.Group as={Col} className="d-grid">
              <Button variant="secondary" type="button" onClick={onBack}>
                취소
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
