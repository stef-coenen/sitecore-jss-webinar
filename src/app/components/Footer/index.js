import React from "react";
import PropTypes from "prop-types";
import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";
import { Container, Row, Col, Button } from "reactstrap";

const Footer = ({ fields, copyright }) => (
  <footer className="footer">
    <Container className="footer-container">
      <img className="footer-image" src="//placehold.it/200x500/FF0000" />
      <h1>Test</h1>
    </Container>
  </footer>
);

Footer.propTypes = {
  fields: PropTypes.shape({})
};

export default Footer;
