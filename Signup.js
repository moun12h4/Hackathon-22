import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const passwordChange = (p) => {
    console.log(p.target.value);
    setPassword(p.target.value);
  };
  return (
    <div>
      <div className="form">
        <div className="ui cards">
          <form className="ui form">
            <div className="sixteen wide field">
              <label htmlFor="">Signup :</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={mailChange}
              />
            </div>
            <div className="sixteen wide field">
              <label htmlFor="">Password :</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={passwordChange}
              />
            </div>

            <br />
            <br />
            <button className="ui primary button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
