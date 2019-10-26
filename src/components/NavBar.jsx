// import React, { Component } from 'react'
// import {
//     Container,
//     Menu,
// } from 'semantic-ui-react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     HashRouter
// } from "react-router-dom";

// export default class NavBar extends Component {
//     render() {
//         return (
//             <HashRouter>
//                 <Menu fixed='top' inverted>
//                     <Container>
//                         <Link to="/content"><Menu.Item as='a' header>
//                             VHR
//                     </Menu.Item></Link>
//                     <Link to="/content"> <Menu.Item as='a'>Home</Menu.Item></Link>
//                         <Link to="/servicepage"><Menu.Item as='a'>Service History Entry</Menu.Item></Link>
//                         <Link to="/reviewpage"><Menu.Item as='a'>Review</Menu.Item></Link>
//                     <Menu.Menu position='right'>
//                         <Menu.Item as='a' onClick={() => {
//                             window.history.replaceState(null, null, "/");
//                             window.location.href = '/';
//                         }}>Logout</Menu.Item>
//                     </Menu.Menu>
//                 </Container>
//             </Menu>
//             </HashRouter >
//         )
//     }
// }
