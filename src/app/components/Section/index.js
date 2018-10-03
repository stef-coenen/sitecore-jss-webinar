import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "reactstrap";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <section className={this.props.params.classList}>
        <Container>
          <h1>My own welcome section</h1>
          <Row>
            <Placeholder name="jss-section" rendering={this.props.rendering} />
          </Row>
        </Container>
      </section>
    );
  }
}
