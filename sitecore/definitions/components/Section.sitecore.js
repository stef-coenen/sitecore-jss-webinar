import {
  addComponent,
  CommonFieldTypes,
  SitecoreIcon
} from "@sitecore-jss/sitecore-jss-manifest";

export default manifest => {
  addComponent(manifest, {
    name: "Section",
    displayName: "Section",
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile,
    fields: [],
    placeholders: ["jss-section"],
    params: ["classList"]
  });
};
