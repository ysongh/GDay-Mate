import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image: null,
      imageName: "Choose file",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  fileSelectedHandler = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
      this.setState({ imageName: e.target.files[0].name });
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = new FormData();
    newUser.append("name", this.state.name);
    newUser.append("image", this.state.image);
    newUser.append("email", this.state.email);
    newUser.append("password", this.state.password);
    newUser.append("confirmPassword", this.state.confirmPassword);

    console.log("newUser", this.state);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto text-center">
              <br />
              <br />
              <div className="loginContainer space-top">
                <div className="col-md-10 m-auto">
                  <h5 className="text-center">Sign Up</h5>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group heightForm">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="text">
                        Upload Image Profile{" "}
                        <span className="small">
                          (Optional but recommended)
                        </span>
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"></span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            onChange={this.fileSelectedHandler}
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="inputGroupFile01"
                          >
                            {this.state.imageName}
                          </label>
                        </div>
                      </div>
                    </div>

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

                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
                    <p className="agreement">
                      When you "Sign Up", you agree to{" "}
                      <Link to="/howItWorks" className="author-name">
                        {" "}
                        G'Day Mate's Terms of Service
                      </Link>
                      , Privacy and Cookie Policy.
                    </p>
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

export default Register;
