import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  state = {
    recipe: recipe
  };

  async componentDidMount() {
    const id = this.props.id;
    const Api_Key = "4eeab6cc650c992fc681f54eaf5bc276";
    const url = `https://www.food2fork.com/api/get?key=${Api_Key}&rId=${id}`;

    try {
      const data = await fetch(url);
      const jsonData = await data.json();

      this.setState({ recipe: jsonData.recipe });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    const { handleIndex } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {/* Start of Button and Image */}
            <div className="col-10 mx-auto col-md-6 my-4">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={() => handleIndex(0)}
              >
                back to recipe list
              </button>
              <img src={image_url} alt={title} className="d-block w-100" />
            </div>
            {/* End of Button and Image */}

            {/* Start of Ingredients */}

            <div className="col-10 mx-auto col-md-6 my-4">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-slanted text-capitalize mb-4 ">
                <span className="text-warning">provided by {publisher}</span>
              </h6>
              <a
                href={publisher_url}
                className="btn btn-primary mt-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                publisher's webpage
              </a>
              <a
                href={source_url}
                className="text-capitalize btn mx-3 mt-2 btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe url
              </a>

              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((ingredient, index) => {
                  return (
                    <li className="list-group-item text-slanted" key={index}>
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* End of Ingredients */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
