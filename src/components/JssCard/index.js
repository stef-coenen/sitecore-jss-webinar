import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';
import { Col, Card, CardBody } from 'reactstrap';

export default class JssCard extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <Col>
                <Card>
                    <Link field={this.props.fields.link} className="card-link">
                        <div className="card-img-top">
                            <Image media={this.props.fields.backgroundImage} />
                        </div>

                        <CardBody className="card-body-overlap">
                            <Text tag="h3" className="card-title" field={this.props.fields.title} />
                            <Text
                                tag="h4"
                                className="card-subtitle"
                                field={this.props.fields.subtitle}
                            />
                            <Text tag="p" className="card-text" field={this.props.fields.text} />
                        </CardBody>
                    </Link>
                </Card>
            </Col>
        );
    }
}

JssCard.propTypes = {
    fields: PropTypes.shape({
        title: PropTypes.shape({
            value: PropTypes.string,
            editable: PropTypes.string
        }),
        backgroundImage: PropTypes.shape({
            value: PropTypes.shape({
                src: PropTypes.string
            }),
            editable: PropTypes.string
        })
    })
};
