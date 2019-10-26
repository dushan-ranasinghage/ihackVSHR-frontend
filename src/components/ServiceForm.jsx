import React, { Component } from 'react'
import {
    Container,
    Divider,
    Header,
    Form,
} from 'semantic-ui-react'

const options = [
    { key: 'a', text: 'Test 1', value: 'test1' },
    { key: 'b', text: 'Test 2', value: 'test2' },
    { key: 'c', text: 'Test 3', value: 'test3' },
]

export default class ServiceForm extends Component {
    render() {
        const { value } = this.state
        return (
            <Container text style={{ marginTop: '7em', minHeight: '100vh', minWidth: '1100px' }}>

            <Header as='h2'>
                {/* <Icon name='settings' /> */}
                <Header.Content>
                    Service Entry Details
                <Header.Subheader>Manage your preferences</Header.Subheader>
                </Header.Content>
            </Header>
            <Divider clearing />

            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Full Name' placeholder='Full Name' />
                    <Form.Input type="date" fluid label='Date' placeholder='Date' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Odometer' placeholder='Odometer' />
                    <Form.Input fluid label='Work Order' placeholder='Work Order' />
                </Form.Group>
               
                <Form.TextArea fluid label='Service Task' style={{fontSize:'large'}} placeholder='Tell us more about the services...' />
                <Form.TextArea fluid label='Issues' style={{fontSize:'large'}} placeholder='Tell us more about the issues...' />
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        label='Vendor'
                        options={options}
                        placeholder='Vendor'
                    />
                </Form.Group>
                <Form.Button floated="right" primary>Submit</Form.Button>
            </Form>

        </Container>
        )
    }
}
