import React from "react";
import PropTypes from "prop-types";
import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";
import { Container, Row, Col, Button } from "reactstrap";

const Hero = ({ fields, copyright }) => (
  <header className="hero dark-bg">
    <Image className="hero-image" media={fields.backgroundImage} />
    <Container className="hero-container">
      <Text tag="h1" className="hero-title" field={fields.title} />
    </Container>
  </header>
);

Hero.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    backgroundImage: PropTypes.shape({
      value: PropTypes.shape({
        src: PropTypes.string
      }),
      editable: PropTypes.string
    })
  })
};

export default Hero;
