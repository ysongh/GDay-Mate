import React, { Component } from "react";
import thanksImg from "./../img/ty.gif";

class Checkins extends Component {
  constructor() {
    super();
    this.state = {
      id: 6,
      author: "",
      rating: "",
      description: "",
      errors: {},
      questions: [
        "I’ve been feeling optimistic about the future",
        "I’ve been feeling useful",
        "I’ve been feeling relaxed",
        "I’ve been dealing with problems well",
        "I’ve been thinking clearly",
        "I’ve been feeling close to other people",
        "I’ve been able to make up my own mind about things",
      ],
      responses: [],
      counter: 0,
      satThanks: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log("state", this.state.questions);
    window.scrollTo(0, 0);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log("state", this.state);
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({
      rating: "",
    });
    this.state.counter++;
    let coverted = Number(this.state.rating);
    this.state.responses.push(coverted);

    console.log(this.state.counter, this.state.responses);

    if (this.state.counter === 5) {
      // show image
      this.setState({
        satThanks: true,
      });

      try {
        console.log("star");
        // Create request to api service
        const req = await fetch(
          `https://gdaymatebackend.azurewebsites.net/api/CheckIns`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // format the data
            body: JSON.stringify({
              userId: this.state.id,
              responses: this.state.responses,
            }),
          }
        );
        const res = await req.json();
        console.log("res", res);
        // this.props.history.push("/resources");
      } catch (err) {
        console.error(`ERROR: err`);
      }

      // const timer = setTimeout(() => {
      //   console.log("This will run after 1 second!");
      //   this.props.history.push("/");
      // }, 5000);
    }
  }

  render() {
    let { questions, counter } = this.state;
    let form = (
      <form onSubmit={this.onSubmit}>
        <br />
        <h2 className="p-color">Hey you,</h2>
        <h1 className="s-color">G'Day mate! </h1>
        <h3 className="p-color">How are ya?</h3>
        <br />
        <br />

        <p>{questions[counter]}</p>

        <br />
        <label htmlFor="star1" className="checkin-label">
          1<br />
          <input
            onChange={this.onChange}
            value="1"
            id="star1"
            name="rating"
            type="radio"
            className=""
            checked={this.state.rating === "1"}
          />
          <div></div>
        </label>

        <label htmlFor="star2" className="checkin-label">
          2 <br />
          <input
            onChange={this.onChange}
            value="2"
            id="star2"
            name="rating"
            type="radio"
            className="radio-btn hide"
            checked={this.state.rating === "2"}
          />
          <div></div>
        </label>

        <label htmlFor="star3" className="checkin-label">
          3<br />
          <input
            onChange={this.onChange}
            value="3"
            id="star3"
            name="rating"
            type="radio"
            className="radio-btn hide"
            checked={this.state.rating === "3"}
          />
          <div></div>
        </label>
        <label htmlFor="star4" className="checkin-label">
          4<br />
          <input
            onChange={this.onChange}
            value="4"
            id="star4"
            name="rating"
            type="radio"
            className="radio-btn hide"
            checked={this.state.rating === "4"}
          />
          <div></div>
        </label>
        <label htmlFor="star5" className="checkin-label">
          5<br />
          <input
            onChange={this.onChange}
            value="5"
            id="star5"
            name="rating"
            type="radio"
            className="radio-btn hide"
            checked={this.state.rating === "5"}
          />
          <div></div>
        </label>
        <br />
        <br />

        <input
          type="submit"
          className="btn btn-info btn-lg px-5 mt-3 mb-5"
          value="Next"
        />
      </form>
    );

    // let thanksImg = <img src={thanksImg} />;

    return (
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-md-8 m-auto">
            <br />
            <h1>Daily Survey</h1>
            <br />
            {this.state.satThanks ? (
              <img src={thanksImg} className="d-block w-100" alt="" />
            ) : (
              form
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Checkins;
