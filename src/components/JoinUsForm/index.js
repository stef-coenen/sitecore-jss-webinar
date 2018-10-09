import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class JoinUsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
    }

    handleSubmit = e => {
        console.log(this.state);

        e.preventDefault();
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Col>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="firstName">First name</Label>
                                <Input
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    placeholder="Jane"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="lastName">First name</Label>
                                <Input
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    name="lastName"
                                    placeholder="Doe"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="jane.doe@example.com"
                        />
                    </FormGroup>
                    <Button className="">Send</Button>
                </Form>
            </Col>
        );
    }
}
