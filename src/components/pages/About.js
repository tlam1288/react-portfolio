import React from "react";

function About() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <img
            src={require("../../assets/images/Tim.jpg")}
            class="img-fluid mt-5 picture"
            alt="Profile picture of Timothy Lam"
          />
        </div>
        <div class="col-sm mt-5">
          <h2>Who Am I?</h2>
          <p>
            Hi! My name is Timothy and I'm lucky enough to have been born and
            raised right here in sunny San Diego. I grew up in Mira Mesa and
            Scripps Ranch but I currently call North Park my home. Some of my
            passions in life are weight lifting, cooking (I'm a pretty good cook
            if you ask me), and most recently growing indoor house plants.
          </p>
        </div>
        <div class="col-sm mt-5">
          <h2>Why am I coding?</h2>
          About 6 months ago I decided enough was enough. I was growing tired of
          being in Real Estate and so I began my coding journey for a career
          change. I have several friends in the tech industry and after
          discussing with them and researching different career paths I found
          that front-end development was something really interested me. So far
          I have learned HTML, CSS, JavaScript, and React and I just want to
          keep going and learn as much as I can!
        </div>
      </div>
    </div>
  );
}

export default About;
