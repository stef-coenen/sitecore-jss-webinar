import { addComponent, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default manifest => {
    addComponent(manifest, {
        name: 'JssImage',
        displayName: 'JssImage',
        // totally optional, but fun
        icon: SitecoreIcon.PhotoLandscape,
        fields: [{ name: 'image', type: CommonFieldTypes.Image }]
    });
};
