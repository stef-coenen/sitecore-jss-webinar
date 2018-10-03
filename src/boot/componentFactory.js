import Welcome from "../app/components/Welcome";
import Hero from "../app/components/Hero";
import Navigation from "../app/components/Navigation";
import Footer from "../app/components/Footer";
import Section from "../app/components/Section";
import JssCard from "../app/components/Card";

const components = new Map();
components.set("Welcome", Welcome);
components.set("Hero", Hero);
components.set("Navigation", Navigation);
components.set("Section", Section);
components.set("Footer", Footer);
components.set("JssCard", JssCard);

const componentFactory = componentName => components.get(componentName);

export default componentFactory;
