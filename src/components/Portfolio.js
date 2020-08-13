import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio(props) {
  return (
    <div class="col mb-4">
      <div class="card border border-dark">
        <img
          src={require("../assets/images/" + props.name + ".png")}
          className="card-img-top"
          alt="Screenshot of the cookbook application homepage"
        />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.heroku}>See it on Heroku!</a>
          <br />
          <a href={props.github}>GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
