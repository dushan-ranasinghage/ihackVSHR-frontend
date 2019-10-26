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
    Button
} from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { getTestData } from '../actions/index'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios'
import NavBar from './NavBar'

const options = [
    { key: 'a', text: 'Test 1', value: 'test1' },
    { key: 'b', text: 'Test 2', value: 'test2' },
    { key: 'c', text: 'Test 3', value: 'test3' },
]

class Content extends Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this)
    }

    state = {

    }

    componentDidMount() {

    }

    handleChange1(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue1: e.target.textContent
        });
    }

    render() {
        const { value } = this.state
        console.log("Props", this.props)
        console.log("State", this.state)
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            VHR
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Menu.Item as='a'>Service History Entry</Menu.Item>
                        <Menu.Item as='a'>Review Entries</Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item as='a' onClick={() => {
                                window.history.replaceState(null, null, "/");
                                window.location.href = '/';
                            }}>Logout</Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>

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
                            <Form.Input fluid label='Vehicle Registration Number' placeholder='Full Name' />
                            <Form.Input fluid label='Brand' placeholder='Brand' />
                            <Form.Input fluid label='Model Number' placeholder='Model Number' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.TextArea fluid label='Service Description' style={{ fontSize: 'large' }} placeholder='Tell us more about the services...' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Added Parts' placeholder='Added Parts' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Customer Name' placeholder='Customer Name' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input type="date" fluid label='Repair Date' placeholder='Repair Date' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Cost' placeholder='Cost' />
                            <Form.Input fluid label='Milage' placeholder='Milage' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                        <Form.TextArea fluid label='Existing Condition of The Vehicle' style={{ fontSize: 'large' }} placeholder='Existing Condition of The Vehicle' />
                        </Form.Group>
                        <Form.Button floated="right" primary>Submit</Form.Button>
                    </Form>

                </Container>


                <Segment inverted vertical style={{
                    margin: '1em 0em 0em',
                    padding: '1em 0em',
                    width: '100%',
                    position: 'fixed',
                    bottom: '0px'
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
                        {/* <center>Designed By: dExTeR</center> */}
                    </Container>
                </Segment>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.test
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTestData
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content))

