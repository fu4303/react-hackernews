import React, { Component } from "react";
import { NewsConsumer } from "../../Context";

import "./Hero.scss";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="hero container">
              {value.all.length > 0 ? (
                <h1 className="display-1 fade-in">all</h1>
              ) : value.hot.length > 0 ? (
                <h1 className="display-1 fade-in">hot</h1>
              ) : value.ask.length > 0 ? (
                <h1 className="display-1 fade-in">ask</h1>
              ) : value.show.length > 0 ? (
                <h1 className="display-1 fade-in">show</h1>
              ) : value.jobs.length > 0 ? (
                <h1 className="display-1 fade-in">jobs</h1>
              ) : (
                <h1></h1>
              )}
              <div className="hero__social d-flex flex-column">
                <h1><a href="https://twitter.com/urlDev"><i className="fab fa-twitter"></i></a></h1>
                <h1><a href="https://github.com/urlDev"><i className="fab fa-github"></i></a></h1>
                <h3 className="hero__social-follow">follow us</h3>
              </div>
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default Hero;
