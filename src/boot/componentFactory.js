import Welcome from "../app/components/Welcome";
import Hero from "../app/components/Hero";
import Navigation from "../app/components/Navigation";
import Footer from "../app/components/Footer";
import Section from "../app/components/Section";
import JssCard from "../app/components/Card";
import JssImage from "../app/components/Image";

const components = new Map();
components.set("Welcome", Welcome);
components.set("Hero", Hero);
components.set("Navigation", Navigation);
components.set("Section", Section);
components.set("Footer", Footer);
components.set("JssCard", JssCard);
components.set("JssImage", JssImage);

const componentFactory = componentName => components.get(componentName);

export default componentFactory;
