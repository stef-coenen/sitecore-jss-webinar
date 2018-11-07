import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class JoinUsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            sent: false
        };
    }

    handleSubmit = e => {
        console.log(this.state);

        let url = '/api/sitecore/form/execute';

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            if (response.ok) {
                this.setState({ sent: true });
            } else {
                console.log(response);
            }
        });

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
        if (this.state.sent) {
            return (
                <Col>
                    <p className="text-center">Thank you for joining the competition.</p>
                </Col>
            );
        } else {
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
                        <Button color="primary">Send</Button>
                    </Form>
                </Col>
            );
        }
    }
}
