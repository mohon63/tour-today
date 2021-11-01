import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div className="">
      <Navbar expand="lg " bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Tour Today
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {
                user?.email && <Nav.Link as={Link} to="/order">
                  My Order
                </Nav.Link>
              }
              {
                user?.email && <Nav.Link as={Link} to="/createNewEvent">
                  Create New Event
                </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link as={Link} to="/management">
                  Managment
                </Nav.Link>
              }
            </Nav>
            <div className="">
            </div>

            {
              (user?.email) ? <Link to="/login">
                <button className="btn btn-success" onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button className="btn btn-warning">Login</button>
              </Link>
            }
            <Nav.Link>
              <a className="nav-link d-none d-sm-inline-block" href="#">
                {user.email ? <img style={{ height: '50px', widows: '50px', borderRadius: '50px', overflow: 'hidden' }}
                  src={user?.photoURL}
                  className="avatar img-fluid rounded-circle me-1" alt="Chris Wood" /> :
                  <img style={{ height: '50px', widows: '50px', borderRadius: '50px', overflow: 'hidden' }}
                    src="https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png"
                    className="avatar img-fluid rounded-circle me-1" alt="Chris Wood" />}
                <span className="text-white">{user?.displayName}</span>
              </a>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
