import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      value,
      handleChange,
      handleSubmit,
      error
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5 ">
          {/* Start of title */}
          <div className="row">
            <div className="col">
              <div className="col-xs-10 mx-auto col-md-6 text-center text-uppercase mb-4">
                <h1 className="text-slanted">Recipe List</h1>
              </div>
            </div>
          </div>
          {/* End of title */}

          {/* Start of List loopping */}
          <div className="row">
            {error ? (
              <div className="col">
                <div className="text-center">
                  <h1 className="text-danger">{error}</h1>
                </div>
              </div>
            ) : (
              recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={handleDetails}
                  />
                );
              })
            )}
          </div>
          {/* End of List looping */}
        </div>
      </React.Fragment>
    );
  }
}
