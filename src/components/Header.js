import React from "react";

function Header(props) {
    const { search , onInputChange , onSearchClick } = props; //destructuring in props
    return (
        <>
            <div className="jumbotron text-center">
                <h1><span className="material-icons" id="icon">local_dining</span>  FOOD RECIPE APP  <span className="material-icons" id="icon">local_dining</span></h1>
                <p>Get your favourite food recipe here!</p>
                <div className="input-group mb-3  w-50 mx-auto">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search your favourite recipe here!!" 
                    value = {search} 
                    onChange = {onInputChange}
                    /> 
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="button" onClick={onSearchClick}>Search</button>
                    </div>
                </div>
                </div>
        </>
    );
}

export default Header; 