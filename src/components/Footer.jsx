import React, { Component } from 'react'
import {
    Container,
    Divider,
    Header,
    List,
    Menu,
    Segment,
    Form,
    Table,
    Icon,
    Button,
    Image
} from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (
            <Segment inverted vertical style={{
                margin: '1em 0em 0em',
                padding: '1em 0em',
                width: '100%',
                // position: 'fixed',
                // bottom: '0px'
            }}>
                <Container textAlign='center'>
                    <Divider inverted section style={{
                        marginTop: '1rem',
                        marginBottom: '1rem'
                    }} />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            About Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                        <List.Item as='a' href='#'>
                            <small>&copy; Copyright 2019, Team White Walkers</small>
                        </List.Item>

                    </List>
                </Container>
            </Segment>
        )
    }
}
