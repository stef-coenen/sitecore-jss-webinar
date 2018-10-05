import React from "react";
import PropTypes from "prop-types";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../assets/css/default.css";
import "../../assets/scss/jss-headless.scss";

const App = ({ route }) => <Placeholder name="jss-main" rendering={route} />;

App.propTypes = {
  route: PropTypes.object
};

export default App;
