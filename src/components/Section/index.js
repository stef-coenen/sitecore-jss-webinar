import React from 'react';
import { Container, Row } from 'reactstrap';
import { Placeholder, Text } from '@sitecore-jss/sitecore-jss-react';

export default class Section extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <section className={this.props.params.classList}>
                <Container>
                    <Text tag="h2" className="section-title" field={this.props.fields.title} />
                    <Row>
                        <Placeholder name="jss-section" rendering={this.props.rendering} />
                    </Row>
                </Container>
            </section>
        );
    }
}
