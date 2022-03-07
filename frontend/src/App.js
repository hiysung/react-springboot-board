import Login from 'components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    // fetch("/login").then(response => response.json()).then(response => {
    //   setIsLogin(response.isLogin);
    // });
  }, []);
  return (
    <div>
      {isLogin ? null : <div><Login /></div>}
    </div>
  );
}

export default App;
