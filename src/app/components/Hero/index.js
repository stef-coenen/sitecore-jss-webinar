import React from "react";
import PropTypes from "prop-types";
import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";

const Hero = ({ fields, copyright }) => (
  <header>
    <img src="//placehold.it/1600/FF0000" />
  </header>
);

Hero.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    logoImage: PropTypes.shape({
      value: PropTypes.shape({
        src: PropTypes.string
      }),
      editable: PropTypes.string
    })
  })
};

Hero.defaultProps = {
  copyright: "Copyright Sitecore A/S"
};

export default Hero;
