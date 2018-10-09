import { addComponent, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default manifest => {
    addComponent(manifest, {
        name: 'JssCard',
        displayName: 'JssCard',
        // totally optional, but fun
        icon: SitecoreIcon.PlayingCard_hearts,
        fields: [
            { name: 'title', type: CommonFieldTypes.SingleLineText },
            { name: 'backgroundImage', type: CommonFieldTypes.Image },
            { name: 'subtitle', type: CommonFieldTypes.SingleLineText },
            { name: 'text', type: CommonFieldTypes.MultiLineText },
            { name: 'link', type: CommonFieldTypes.GeneralLink }
        ]
    });
};
