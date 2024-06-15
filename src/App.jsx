import { NavLink, Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" className="navbar-custom" variant="dark" expand="lg">
        <Container className="w-full d-flex align-items-center justify-content-between">
          <div>
            <Navbar.Brand
              as={NavLink}
              to="/"
              className="fw-semibold fs-3 headline-color"
            >
              Sports Management
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav d-block">
              <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/" end className="nav-item">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/fixtures" className="nav-item">
                  Match Fixtures
                </Nav.Link>
                <Nav.Link as={NavLink} to="/teamlist" className="nav-item">
                  Team List
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login" className="nav-item ">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </Container>
      </Navbar>

      <Container className="main-content">
        <Outlet />
      </Container>

      <footer className="footer bg-dark text-white">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}

export default App;
