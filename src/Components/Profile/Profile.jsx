import React, { Component } from "react";
import image from "../../image.jpg";
export default class Profile extends Component {
  state = {
    FullName: "Akrem Wahebi",
    Bio: "Hello Everyone",
    imgSrc: image,
    Profession: "Full Stack Developer",
    counter: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="card">
          <img
            src={this.state.imgSrc}
            alt="Profile_img"
            style={{ width: "100%", height: 250 }}
          />
          <div className="container">
            <p>Name: </p>
            <h4>
              <b>{this.state.FullName}</b>
            </h4>
            <p>Bio: </p>
            <h4>
              <b>{this.state.Bio}</b>
            </h4>
            <p>Profession: </p>
            <h4>
              <b>{this.state.Profession}</b>
            </h4>
            <h6>
              Counter :{" "}
              <span style={{ color: "#8ca6db" }}>{this.state.counter}</span>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
