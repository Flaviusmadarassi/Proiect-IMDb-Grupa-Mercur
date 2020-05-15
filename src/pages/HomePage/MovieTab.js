import React, { Component } from "react";

class MovieTab extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-6 col-sm-12 col-lg-6">
            <div className="custom-card">
              <div className="row">
                <div className="col-12 col-sm-4"></div>
                <div className="col-12 col-sm-8">
                  <div className="custom-card-content">
                    <h3 className="custom-card-title">
                      here is the movie title
                    </h3>
                    <span>Action, thriller, genre</span>
                    <div className="custom-card-wrap">
                      <span>
                        <i></i>rating here *****
                      </span>
                      <div className="custom-card-description">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieTab;
