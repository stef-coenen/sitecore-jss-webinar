import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Image } from '@sitecore-jss/sitecore-jss-react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container className="footer-container">
                    <Row>
                        <Col sm="2">
                            <div className="footer-image">
                                <Image media={this.props.fields.logo} />
                            </div>
                        </Col>

                        <Col sm="3" className="ml-auto">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Why we do</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">What we do</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">How we do it</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm="3">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink href="/">About us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Careers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Legal</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm="3">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink href="/">About us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Careers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Legal</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    fields: PropTypes.shape({
        logo: PropTypes.shape({
            value: PropTypes.shape({
                src: PropTypes.string
            }),
            editable: PropTypes.string
        })
    })
};
