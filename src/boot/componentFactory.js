// Atoms
import JssImage from "../app/components/atoms/Image";
import FreeText from "../app/components/atoms/Freetext";

// Molecules
import Hero from "../app/components/molecules/Hero";
import Section from "../app/components/molecules/Section";
import JssCard from "../app/components/molecules/Card";

// Organisms
import Welcome from "../app/components/organisms/Welcome";
import Navigation from "../app/components/organisms/Navigation";
import Footer from "../app/components/organisms/Footer";

const components = new Map();

// Organsism
components.set("Welcome", Welcome);
components.set("Navigation", Navigation);
components.set("Footer", Footer);

// Molecules
components.set("Hero", Hero);
components.set("Section", Section);
components.set("JssCard", JssCard);

// Atoms
components.set("JssImage", JssImage);
components.set("FreeText", FreeText);

const componentFactory = componentName => components.get(componentName);

export default componentFactory;
