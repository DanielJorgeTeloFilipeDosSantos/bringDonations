import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";
// import FormControl from "react-bootstrap/FormControl";
import bringLogo from "../assets/bring2.svg";
// import { LinkContainer } from "react-router-bootstrap";

const BlogNavbar = props => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={bringLogo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      {(!props.user && (
        <Fragment>
          <Link className="btn" to="/sign-in">
            Sign In
          </Link>
          <Link className="btn" to="/">
            Sign Up
          </Link>
        </Fragment>
      )) || (
        <Fragment>
          <span className="btn">{props.user.name}</span>
          {/* <Link className="btn" to="/post/create">
            + Create a Post
          </Link> */}
          <Form onSubmit={props.signOut}>
            <Button type="submit">Sign Out</Button>
          </Form>
        </Fragment>
      )}
    </Navbar>
  );
};

export default withRouter(BlogNavbar);

//-----------------------------------------ATENTION!!---------------------------------------------------------------

// this version bellow is the version before that needs to be integrated into the one that has the login working

//-----------------------------------------ATENTION!!---------------------------------------------------------------

// import React, { Component } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
// import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import bringLogo from "../assets/bring2.svg";
// import { LinkContainer } from "react-router-bootstrap";

// export class NavigationBar extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar bg="light" fixed="top" expand="lg">
//           <Navbar.Brand href="#home">
//             <img
//               src={bringLogo}
//               width="40"
//               height="40"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <LinkContainer to="/">
//                 <Nav.Link href="#home">Home</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/foo/bar">
//                 <Nav.Link href="#link">Our Mission</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/foo/bar">
//                 <Nav.Link href="#link">Donate or Volunteer</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/foo/bar">
//                 <Nav.Link href="#link">Participate as an Organization</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/aaa">
//                 <Nav.Link>Logout</Nav.Link>
//               </LinkContainer>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default NavigationBar;

//-----------------------------------------ATENTION!!---------------------------------------------------------------
