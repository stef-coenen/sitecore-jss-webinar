import React from "react";
import PropTypes from "prop-types";
import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";

const Welcome = ({ fields, copyright }) => (
  <div>
    <div>
      <Image media={fields.logoImage} />
    </div>
    <div>
      <Text tag="h1" className="contentTitle" field={fields.title} />
      <RichText className="contentDescription" field={fields.text} />
    </div>
    <div>
      <hr className="divider" />
      {copyright}
    </div>
  </div>
);

Welcome.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    text: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    logoImage: PropTypes.shape({
      value: PropTypes.shape({
        src: PropTypes.string
      }),
      editable: PropTypes.string
    })
  }),
  copyright: PropTypes.string
};

Welcome.defaultProps = {
  copyright: "Copyright Sitecore A/S"
};

export default Welcome;
