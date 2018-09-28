import Welcome from "../app/components/Welcome";
import Hero from "../app/components/Hero";

const components = new Map();
components.set("Welcome", Welcome);
components.set("Hero", Hero);

const componentFactory = componentName => components.get(componentName);

export default componentFactory;
