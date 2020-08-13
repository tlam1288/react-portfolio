import React from "react";
import PDF from "../../assets/images/ResumeTim.pdf";

function Contact() {
  return (
    <div class="card text-center">
      <div class="card-header">
        <h2>Contact Me</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <a href="https://linkedin.com/in/timothy-lam-8551b315">LinkedIn</a>
        </h5>
        <h5 class="card-title">
          <a href="https://github.com/tlam1288">GitHub</a>
        </h5>
        <h5 class="card-title">
          <a href={PDF}>Resume</a>
        </h5>
        <h5 class="card-title">Email: Tlam1288@gmail.com</h5>
      </div>
    </div>
  );
}

export default Contact;
