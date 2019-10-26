import React, { Component } from 'react'
import { userLogin } from '../actions/index'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Button, Form, Grid, Header, Message, Segment, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  state = { value1: '', value2: '', err: false }

  handleChange1 = (e, { value }) => {
    this.setState({ value1: value })
  }

  handleChange2 = (e, { value }) => {
    this.setState({ value2: value })
  }

  onSubmit = () => {
    const { value1, value2 } = this.state
    this.props.userLogin(value1,value2)
    if(value1=="kavinda", value2=="kavinda2019"){
      this.props.history.push('/content')
    } else{
      this.setState({err:'Username or Password Incorrect'})
    }
  }

  render(props) {
    console.log("PROPS",this.props)
    return (
      <Grid textAlign='center'
        style={{
          height: '100vh',
          marginTop: '0rem',
          backgroundImage: "url(" + "https://www.planetautobodyparts.com/wp-content/uploads/2018/04/About-Choosing-an-Auto-Service-Centre-1.jpg" + ")"
        }}
        verticalAlign='middle'>

        <Grid.Column style={{ maxWidth: 450, marginTop: '90px', }}>

          <Header as='h1' color='teal' textAlign='center' style={{ fontSize: '55px', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white' }}>
            Log-in
              </Header>
          <Card
            centered
            style={{
              width: '100%'
            }}
            color="red"
            header='Vehicle History Report v1.0'
            description={[
              'Username: kavinda ,',
              'Password: kavinda2019',
            ].join('')}
          />
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='Username'
                value={this.state.value1}
                style={{
                  backgroundColor: '#fff'
                }}
                onChange={this.handleChange1}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                value={this.state.value2}
                onChange={this.handleChange2}
                type='password'
              />
              <Button color='teal' fluid size='large'
                onClick={this.onSubmit}
              >
                Login
                  </Button>
              <Message warning visible={this.state.err}>
                <Message.Header>Login Failed!</Message.Header>
                <p>The user name or password is incorrect. Try again.</p>
              </Message>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
          <footer class="logo-sfdc">
            <a href="#" title="Team White Walkers">Team <span></span> White Walkers</a>
            <ul class="legal">
              <li><a href="https://heroku.com/policy/tos">Terms of Service</a></li>
              <li><a href="https://www.salesforce.com/company/privacy">Privacy</a></li>
              <li><a href="https://www.salesforce.com/company/privacy/full_privacy.jsp#nav_info">Cookies</a></li>
              <li>© 2019</li>
            </ul>
          </footer>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
      user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      userLogin
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
