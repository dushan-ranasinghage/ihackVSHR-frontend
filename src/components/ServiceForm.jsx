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
    Image,
    Message
} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";
import { withRouter } from 'react-router'
import { postVehicleHistory } from '../actions/index'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios'
import Footer from './Footer'

const options = [
    { key: 'a', text: 'Toyota (Pvt) Ltd', value: 'toyota' },
    { key: 'b', text: 'Service Center X', value: 'center1' },
    { key: 'c', text: 'Service Center Y', value: 'center2' },
]

class Content extends Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
        this.handleChange5 = this.handleChange5.bind(this)
        this.handleChange6 = this.handleChange6.bind(this)
        this.handleChange7 = this.handleChange7.bind(this)
        this.handleChange8 = this.handleChange8.bind(this)
        this.handleChange9 = this.handleChange9.bind(this)
        this.handleChange10 = this.handleChange10.bind(this)
        this.handleChange11 = this.handleChange11.bind(this)
        this.myRef = React.createRef()
    }

    state = {
        showMsg: false
    }

    componentDidMount() {

    }

    handleChange1(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue1: e.target.value
        });
    }
    handleChange2(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue2: e.target.value
        });
    }
    handleChange3(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue3: e.target.value
        });
    }
    handleChange4(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue4: e.target.value
        });
    }
    handleChange5(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue5: e.target.value
        });
    }
    handleChange6(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue6: e.target.value
        });
    }
    handleChange7(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue7: e.target.value
        });
    }
    handleChange8(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue8: e.target.value
        });
    }
    handleChange9(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue9: e.target.value
        });
    }
    handleChange10(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue10: e.target.value
        });
    }
    handleChange11(e) {
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue11: e.target.textContent
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { inputValue1,
            inputValue2,
            inputValue3,
            inputValue4,
            inputValue5,
            inputValue6,
            inputValue7,
            inputValue8,
            inputValue9,
            inputValue10,
            inputValue11
        } = this.state
        console.log("Onsubmit", this.state)
        this.myRef.current.scrollTo(0, 0);
        this.props.postVehicleHistory(inputValue1,
            inputValue2,
            inputValue3,
            inputValue4,
            inputValue5,
            inputValue6,
            inputValue7,
            inputValue8,
            inputValue9,
            inputValue10,
            inputValue11)
        // window.location.reload()
        this.setState({ showMsg: true })
    }

    render() {
        const { value } = this.state
        console.log("Props", this.props)
        console.log("State", this.state)
        return (
            <div ref={this.myRef}>
                <Menu fixed='top' inverted style={{ minHeight: '50px', boxShadow: '0 3px 2px -2px grey' }}>
                    <Container class="navbar">
                        <Link to="/content"><Menu.Item as='a' header>
                            VHR Wallet
                    </Menu.Item></Link>
                        <Link to="/content"> <Menu.Item as='a'>Home</Menu.Item></Link>
                        <Link to="/servicepage"><Menu.Item as='a'>Service History Entry</Menu.Item></Link>
                        <Link to="/reviewpage"><Menu.Item as='a'>Review</Menu.Item></Link>
                        <Menu.Menu position='right'>
                            {/* <Image src='https://www.aidu.mod.uk/Milflip/img/civ-user.svg' style={{ height: '60px', width: '60px', marginTop: '10px', marginRight: '10px' }} circular /> */}
                            <Menu.Item style={{
                                fontSize: 'small'
                            }}>
                                {/* Kavinda Senarathne */}
                            </Menu.Item>
                            <Menu.Item as='a' onClick={() => {
                                window.history.replaceState(null, null, "/");
                                window.location.href = '/';
                            }}>Logout</Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>
                <Container text style={{ marginTop: '0em', minHeight: '100vh', minWidth: '1100px', paddingTop: '80px', paddingBottom: '80px' }}>

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
                            <Form.Input fluid label='Vehicle Register Number' placeholder='XX-XXXX' onChange={this.handleChange1} />
                            <Form.Input fluid label='Brand' placeholder='Brand' onChange={this.handleChange2} />
                            <Form.Input fluid label='Model Number' placeholder='Model Number' onChange={this.handleChange3} />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.TextArea fluid label='Service Description' style={{ fontSize: 'large' }} placeholder='Tell us more about the services...' onChange={this.handleChange4} />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Parts Added' placeholder='Parts Added' onChange={this.handleChange5} />
                            {/* <Button positive style={{    marginTop: '30px'}}>Add</Button> */}
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Customer Name' placeholder='Customer Name' onChange={this.handleChange6} />
                            <Form.Input fluid type="date" label='Repair Date' placeholder='Repair Date' onChange={this.handleChange7} />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Cost' placeholder='Cost' onChange={this.handleChange8} />
                            <Form.Input fluid label='Mileage' placeholder='Mileage' onChange={this.handleChange9} />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.TextArea fluid label='Existing Condition of the Vehicle' style={{ fontSize: 'large' }} placeholder='Tell us more about the services...' onChange={this.handleChange10} />

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Select
                                fluid
                                label='Service Center Name'
                                options={options}
                                placeholder='Service Center Name'
                                onChange={this.handleChange11}
                            />
                        </Form.Group>
                        {/* <Form.Button secondary >Reset</Form.Button> */}
                        <Form.Button floated="right" primary onClick={this.onSubmit}>Submit</Form.Button>
                        <br />
                        {this.state.showMsg==true?<Message positive class="msg">
                            <Message.Header>Successfully Submitted the Service History!</Message.Header>
                        </Message>:''}
                    </Form>

                </Container>
                <div>
                    <div class="float-btn" style={{ position: 'fixed', margin: '2em', bottom: '0px', left: '0px', zIndex: '6' }}>
                        <Link to="/content"><a aria-current="page" class="ui teal button active" role="button" href="/layouts">
                            <i aria-hidden="true" class="left arrow icon"></i>Dashboard</a></Link></div>
                </div>
                <Footer />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        vehiclehistory: state.vehiclehistory
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postVehicleHistory
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content))

