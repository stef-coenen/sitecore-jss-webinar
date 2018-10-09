import { addComponent, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default manifest => {
    addComponent(manifest, {
        name: 'JoinUsForm',
        displayName: 'JoinUsForm',
        // totally optional, but fun
        icon: SitecoreIcon.Bus
    });
};
