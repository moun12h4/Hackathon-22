import { useState } from 'react';
 
function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
 
  const Login = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedin(true);
    setName('');
    setEmail('');
    setPassword('');
  };
 
  const Logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };
 
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Hosel Allotment for Freshers</h1>
        {!isLoggedin ? (
          <>
            <form action="">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
              <button type="submit" onClick={Login}>
                GO
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>User is logged in</h1>
            <button onClickCapture={Logout}>logout user</button>
          </>
        )}
      </div>
    </>
  );
}
 
export default Login;