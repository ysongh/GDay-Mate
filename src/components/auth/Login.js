import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    const userInfo = {
      email,
      password
    }

    console.log(userInfo);
  };

  return (
    <div className="container">
      <form className="my-5 p-4 bg-light">
        <h1 className="mb-4">Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="btn btn-info btn-block"
          value="Login"
          onClick={(e) => onSubmit(e)}
        />
    </form>
    </div>
  );
};

export default Login;