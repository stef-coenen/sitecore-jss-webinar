import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { Container } from 'reactstrap';

export default class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };

        setTimeout(() => {
            console.log('timeout');
            this.setState({ loaded: true });
        }, 1000);
    }

    isActive = function(value) {
        return 'hero dark-bg' + (this.state.loaded ? ' loaded' : '');
    };

    render() {
        return (
            <header className={this.isActive()}>
                <Image className="hero-image" media={this.props.fields.backgroundImage} />
                <Container className="hero-container">
                    <Text tag="h1" className="hero-title" field={this.props.fields.title} />
                </Container>
            </header>
        );
    }
}
