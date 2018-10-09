import { addComponent, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default manifest => {
    addComponent(manifest, {
        name: 'Navigation',
        displayName: 'Navigation',
        // totally optional, but fun
        icon: SitecoreIcon.EmoticonSmile,
        fields: [{ name: 'logo', type: CommonFieldTypes.Image }]
    });
};
