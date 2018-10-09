import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';
import { Col } from 'reactstrap';

export default class FreeText extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <Col>
                <RichText field={this.props.fields.freeText} className="rich-text" />
            </Col>
        );
    }
}
