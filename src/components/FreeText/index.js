import React from "react";
import PropTypes from "prop-types";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import { Col } from "reactstrap";

export default class FreeText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Col>
        <Text field={this.props.fields.freeText} />
      </Col>
    );
  }
}
