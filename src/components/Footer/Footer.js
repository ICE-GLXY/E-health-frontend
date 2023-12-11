import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { Link, Route, Routes } from "react-router-dom";
import Disclaimer from "views/Disclaimer.js";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
      <nav>
          <ul>
            <li>
        
        &copy; {1900 + new Date().getYear()} {" "}
              <Link 
              to={{
                pathname: `/admin/Disclaimer`}}
              >
              Disclaimer
            </Link>
          </li>
          </ul>
          </nav>
          <div className="copyright">
          <a>
            Coded by Taariq & Zaeem.
          </a>
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
