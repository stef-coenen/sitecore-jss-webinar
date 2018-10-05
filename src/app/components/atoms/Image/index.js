import React from "react";
import PropTypes from "prop-types";
import { Image } from "@sitecore-jss/sitecore-jss-react";
import { Col } from "reactstrap";

export default class JssImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col>
        <Image media={this.props.fields.image} />
      </Col>
    );
  }
}

JssImage.propTypes = {
  fields: PropTypes.shape({
    image: PropTypes.shape({
      value: PropTypes.shape({
        src: PropTypes.string
      }),
      editable: PropTypes.string
    })
  })
};
