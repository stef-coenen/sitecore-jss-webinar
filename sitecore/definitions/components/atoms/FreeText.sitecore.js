import {
  addComponent,
  CommonFieldTypes,
  SitecoreIcon
} from "@sitecore-jss/sitecore-jss-manifest";

export default manifest => {
  addComponent(manifest, {
    name: "FreeText",
    displayName: "FreeText",
    // totally optional, but fun
    icon: SitecoreIcon.EmoticonSmile,
    fields: [{ name: "freeText", type: CommonFieldTypes.RichText }]
  });
};
