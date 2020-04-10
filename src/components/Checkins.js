import React, { Component } from "react";

class Checkins extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      rating: "",
      description: "",
      errors: {},
      questions: [
        "I’ve been feeling optimistic about the future",
        "I’ve been feeling useful",
        "I’ve been feeling relaxed",
        " I’ve been dealing with problems well",
        "I’ve been thinking clearly",
        "I’ve been feeling close to other people",
        "I’ve been able to make up my own mind about things",
      ],
      responses: [],
      counter: 0,
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
    this.setState({
      rating: "",
    });

    e.preventDefault();
    this.state.counter++;
    let coverted = Number(this.state.rating);
    this.state.responses.push(coverted);

    // console.log("state", this.state);
    // if (this.state.counter === 6) {
    //   if finished it will post to db
    //   redirect to thank you

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
            id: 7,
            firstName: "Rober",
            lastName: "Smith",
            birthdate: "1996-04-10",
            location: "2028",
            phoneNumber: "565 788 9090",
            interests: ["Chess", "Soccer", "Painting", "reading"],
            needs: ["1,3,4,5,5,2,5"],
          }),
        }
      );
      const res = await req.json();
      console.log("res", res);
      // this.props.history.push("/resources");
    } catch (err) {
      console.error(`ERROR: err`);
    }
    // }
  }

  render() {
    let { questions, counter } = this.state;
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

              <p>{questions[counter]}</p>

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
                  checked={this.state.rating == "1"}
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
                  checked={this.state.rating == "2"}
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
                  checked={this.state.rating == "3"}
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
                  checked={this.state.rating == "4"}
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
                  checked={this.state.rating == "5"}
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
