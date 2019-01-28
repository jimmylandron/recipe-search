import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const {      
      recipe_id,
      image_url,
      title,
      publisher,
      source_url
    } = this.props.recipe;

    const { handleDetails } = this.props;
    return (
      <React.Fragment>
        <div className="col-xs-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              alt={title}
              className="img-card-top"
              style={{ height: "14rem" }}
            />
            <div className="card-body text-capitalize">
              <h6>
                {title.length < 30
                  ? `${title}`
                  : `${title.substring(0, 35)}...`}
              </h6>
              {/* <h6>{title}</h6> */}
              <h6 className="text-warning text-slanted">
                Provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-primary text-capitalize"
                onClick={() => handleDetails(1, recipe_id)}
              >
                details
              </button>
              <a
                href={source_url}
                className="btn btn-success text-capitalize mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
