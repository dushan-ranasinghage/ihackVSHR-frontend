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
    Checkbox,
    Dimmer,
    Loader
} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";
import { withRouter } from 'react-router'
import { getVeicleHistory, approveVehicleHistory } from '../actions/index'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Footer from './Footer'

class ReviewTable extends Component {
    componentDidMount() {
        this.props.getVeicleHistory()
    }
    render() {
        console.log("View Table", this.props)
        return (
            <div>

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
                            Pending Services
                <Header.Subheader></Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Divider clearing />
                    <Segment>
                        <Table singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>User Name</Table.HeaderCell>
                                    <Table.HeaderCell>Vehicle Number</Table.HeaderCell>
                                    <Table.HeaderCell>Service Details</Table.HeaderCell>
                                    <Table.HeaderCell>Action</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>

                                {this.props && this.props.vehiclehistory && this.props.vehiclehistory && this.props.vehiclehistory.historyData && this.props.vehiclehistory.historyData.map((item, i) =>
                                    <Table.Row key={i}>
                                        <Table.Cell>{item.customer_name}</Table.Cell>
                                        <Table.Cell>{item.vehicle_reg_no}</Table.Cell>
                                        <Table.Cell>{item.service_description}</Table.Cell>
                                        <Table.Cell>
                                            <Button negative>Reject</Button>
                                            <Button positive onClick={() => this.props.approveVehicleHistory()}>Approve</Button>
                                        </Table.Cell>
                                    </Table.Row>)}

                            </Table.Body>
                        </Table></Segment>
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
        getVeicleHistory,
        approveVehicleHistory
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewTable))


