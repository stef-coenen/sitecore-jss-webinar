import { addComponent, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default manifest => {
    addComponent(manifest, {
        name: 'Hero',
        displayName: 'Hero',
        // totally optional, but fun
        icon: SitecoreIcon.Ambulance,
        fields: [
            { name: 'title', type: CommonFieldTypes.SingleLineText },
            { name: 'backgroundImage', type: CommonFieldTypes.Image }
        ]
    });
};
