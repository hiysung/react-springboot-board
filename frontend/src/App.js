import Login from 'components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Image from "react-bootstrap/Image";
import logo from "css/images/react-logo.png";
import SignUp from 'components/Login/SignUp';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  useEffect(() => {
    // fetch("/home").then(response => response.text()).then(response => {
    //   console.log(response);
    // });
  }, []);
  return (
    <div className="mb-5">
      {isLogin ? null : (
        <div>
          <div
          className="container"
          style={{ textAlign: "center", paddingTop: "50px" }}
        >
          <Image className="img-logo" src={logo}></Image>
        </div>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            {/* <Route path="/" element={<NotFound />}></Route> */}
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
