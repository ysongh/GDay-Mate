import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("state", this.state);
    // const userData = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto text-center space-top">
              <br /> <br />
              <div className="loginContainer space-top">
                <div className="col-md-10 m-auto">
                  <h4 className="text-center">Login with Email</h4>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <input
                      type="checkbox"
                      value="lsRememberMe"
                      id="rememberMe"
                    />{" "}
                    <label htmlFor="rememberMe">Remember me</label>
                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
                    <li>
                      <Link to="/register">
                        <i className="fa fa-angle-double-right"></i>Signup
                        instead
                      </Link>
                    </li>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
