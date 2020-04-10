import React, { Component } from "react";

class Checkins extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      rating: null,
      description: "",
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
    console.log("state", this.state);
  }

  onSubmit(e) {
    console.log("state", this.state);
    e.preventDefault();
    const reviewData = {
      name: this.state.author,
      rating: this.state.rating,
      text: this.state.description,
    };
    // this.props.postReview(
    //   reviewData,
    //   this.props.match.params.id,
    //   this.props.history
    // );
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-8 m-auto">
            <br />
            <h1>Daily Survey</h1>
            <br />
            <form onSubmit={this.onSubmit}>
              <br />
              <h2>Hey you,</h2>
              <h1> G'Day mate! </h1>
              <h3>How are ya?</h3>
              <br />
              <br />
              <p> I’ve been feeling optimistic about the future </p>
              <br />
              <label htmlFor="star1">
                1<br />
                <input
                  onChange={this.onChange}
                  value="1"
                  id="star1"
                  name="rating"
                  type="radio"
                  className=""
                />
                <div></div>
              </label>

              <label htmlFor="star2">
                2 <br />
                <input
                  onChange={this.onChange}
                  value="2"
                  id="star2"
                  name="rating"
                  type="radio"
                  className="radio-btn hide"
                />
                <div></div>
              </label>

              <label htmlFor="star3">
                3<br />
                <input
                  onChange={this.onChange}
                  value="3"
                  id="star3"
                  name="rating"
                  type="radio"
                  className="radio-btn hide"
                />
                <div></div>
              </label>
              <label htmlFor="star4">
                4<br />
                <input
                  onChange={this.onChange}
                  value="4"
                  id="star4"
                  name="rating"
                  type="radio"
                  className="radio-btn hide"
                />
                <div></div>
              </label>
              <label htmlFor="star5">
                5<br />
                <input
                  onChange={this.onChange}
                  value="5"
                  id="star5"
                  name="rating"
                  type="radio"
                  className="radio-btn hide"
                />
                <div></div>
              </label>
              <br />
              <br />

              <input
                type="submit"
                className="btn btn-info btn-block mt-4"
                value="Next"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkins;
