import React from "react";
import '../App.css';

function Recipes(props) {

    const { recipes } = props; // destructuring to props

    return (
        <div className="row">
            {
                recipes.map(recipe => (
                    <div className="col-md-12">
                        <div className="card py-2 text-center mt-5">
                            <img src={recipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle" alt="recipe_img" />
                            <div className="card-body">
                                <h5>{recipe.recipe.label}</h5>
                            </div>
                            <ul className="list-group ul-group-flush text-dark">
                                {recipe.recipe.ingredientLines.map(ingredient => (
                                    <li className="list-group-item">{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Recipes;