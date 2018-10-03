import React from "react";
import PropTypes from "prop-types";
import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";
import { Container, Navbar } from "reactstrap";

const Navigation = ({ fields }) => (
  <Navbar>
    <Container>
      <h1>Navbar</h1>
    </Container>
  </Navbar>
);

Navigation.propTypes = {
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

export default Navigation;
