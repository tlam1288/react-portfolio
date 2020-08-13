import React from "react";
import NavBar from "./components/Navbar";
import PortfolioPage from "./components/pages/PortfolioPage";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/portfoliopage" component={PortfolioPage} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
