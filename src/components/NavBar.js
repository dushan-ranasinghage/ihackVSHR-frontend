import React, { Component } from 'react'
import {
    Container,
    Menu,
} from 'semantic-ui-react'

export default class NavBar extends Component {
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        VHR
                </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Menu.Item as='a'>Service History Entry</Menu.Item>
                    <Menu.Item as='a'>Review</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as='a' onClick={() => {
                            window.history.replaceState(null, null, "/");
                            window.location.href = '/';
                        }}>Logout</Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}
