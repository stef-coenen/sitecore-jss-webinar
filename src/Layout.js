import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';

import './assets/scss/jss-headless.scss';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

const Layout = ({ route }) => (
    <React.Fragment>
        {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
        <Helmet>
            <title>
                {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
            </title>
        </Helmet>

        {/* <Navigation /> */}

        {/* root placeholder for the app, which we add components to using route data */}

        <Placeholder name="jss-main" rendering={route} />
    </React.Fragment>
);

export default Layout;
