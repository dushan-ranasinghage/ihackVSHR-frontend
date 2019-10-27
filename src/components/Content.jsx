import React, { PureComponent } from 'react'
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
    Card,
    Grid,
    Feed
} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import { withRouter } from 'react-router'
import { getTestData } from '../actions/index'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios'
import Footer from './Footer'

const options = [
    { key: 'a', text: 'Test 1', value: 'test1' },
    { key: 'b', text: 'Test 2', value: 'test2' },
    { key: 'c', text: 'Test 3', value: 'test3' },
]

const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const data = [
    {
      name: 'January', 2018: 4000, 2019: 2400, amt: 2400,
    },
    {
      name: 'February', 2018: 3000, 2019: 1398, amt: 2210,
    },
    {
      name: 'March', 2018: 2000, 2019: 9800, amt: 2290,
    },
    {
      name: 'April', 2018: 2780, 2019: 3908, amt: 2000,
    },
    {
      name: 'May', 2018: 1890, 2019: 4800, amt: 2181,
    },
    {
      name: 'June', 2018: 2390, 2019: 3800, amt: 2500,
    },
    {
      name: 'July', 2018: 3490, 2019: 4300, amt: 2100,
    },
    {
      name: 'August', 2018: 2000, 2019: 9800, amt: 2290,
    },
    {
      name: 'September', 2018: 2780, 2019: 3908, amt: 2000,
    },
    {
      name: 'October', 2018: 1890, 2019: 4800, amt: 2181,
    }
  ];

class Content extends PureComponent {
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


    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        const { value } = this.state
        console.log("Props", this.props)
        console.log("State", this.state)
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
                                fontSize:'small'
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
                <Container text style={{ marginTop: '0em', minHeight: '100vh', minWidth: '1100px', paddingTop: '120px' ,paddingBottom: '80px' }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header as='h3'>Recent Activity</Card.Header>
                                    </Card.Content>
                                    <Card.Content>
                                        <Feed>
                                            <Feed.Event>
                                                <Feed.Label>
                                                <Icon name='user' size='small' />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Date content='1 day ago' />
                                                    <Feed.Summary>
                                                        Mr.Dushan serviced <a>Toyota Prius</a>.
                                            </Feed.Summary>
                                                </Feed.Content>
                                            </Feed.Event>

                                            <Feed.Event>
                                            <Feed.Label>
                                                <Icon name='user' size='small' />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Date content='1 day ago' />
                                                    <Feed.Summary>
                                                    Mrs.Jane serviced <a>Mitsubishi Evo X</a>.
                                            </Feed.Summary>
                                                </Feed.Content>
                                            </Feed.Event>

                                            <Feed.Event>
                                            <Feed.Label>
                                                <Icon name='user' size='small' />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Date content='2 days ago' />
                                                    <Feed.Summary>
                                                    Mrs.Kavinda serviced <a>BMW i8</a>.
                                                </Feed.Summary>
                                                </Feed.Content>
                                            </Feed.Event>
                                            <Feed.Event>
                                            <Feed.Label>
                                                <Icon name='user' size='small' />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Date content='2 days ago' />
                                                    <Feed.Summary>
                                                    Mr.Indunil serviced <a>Honda civic</a>.
                                            </Feed.Summary>
                                                </Feed.Content>
                                            </Feed.Event>

                                            <Feed.Event>
                                            <Feed.Label>
                                                <Icon name='user' size='small' />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Date content='2 days ago' />
                                                    <Feed.Summary>
                                                    Mr.Ruvin serviced <a>Toyota Prius</a>.
                                                </Feed.Summary>
                                                </Feed.Content>
                                            </Feed.Event>
                                        </Feed>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column width={11}>
                                <div class="cardx">
                                <Header as='h3'>2018 and 2019 profit comparison</Header>
                                <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="2018" fill="#8884d8" />
        <Bar dataKey="2019" fill="#82ca9d" />
      </BarChart>
                                </div>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={8}>
                                {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

                <div>
          <div class="float-btn" style={{ position: 'fixed', margin: '2em', bottom: '0px', left: '0px', zIndex: '6' }}>
          <Link to="/servicepage"> <a aria-current="page" class="ui teal button active" role="button" href="/layouts">
              <i aria-hidden="true" class="right arrow icon" style={{paddingRight: '30px'}}></i>Service History</a></Link></div>
        </div>
                <Footer />

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



// import React, { PureComponent } from 'react';
// import {
//   BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

//   render() {
//     return (
//       <BarChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       </BarChart>
//     );
//   }
// }
