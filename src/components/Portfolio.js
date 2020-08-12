import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio(props) {
  return (
    <div class="col mb-4">
      <div class="card border border-dark">
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.description}</p>
          <a href="https://still-sierra-23537.herokuapp.com/">
            See it on Heroku!
          </a>
          <br />
          <a href="https://github.com/mandisareed/cookbook">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
