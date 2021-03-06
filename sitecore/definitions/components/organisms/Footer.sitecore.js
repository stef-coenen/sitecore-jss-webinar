import { addComponent, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default manifest => {
    addComponent(manifest, {
        name: 'Footer',
        displayName: 'Footer',
        // totally optional, but fun
        icon: SitecoreIcon.DocumentFooter,
        fields: [{ name: 'logo', type: CommonFieldTypes.Image }]
    });
};
