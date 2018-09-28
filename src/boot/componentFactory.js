import Welcome from "../app/components/Welcome";
import Hero from "../app/components/Hero";
import Footer from "../app/components/Footer";

const components = new Map();
components.set("Welcome", Welcome);
components.set("Hero", Hero);
components.set("Footer", Footer);

const componentFactory = componentName => components.get(componentName);

export default componentFactory;
