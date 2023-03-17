import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {
    return (
      <Navbar  sticky='top' collapseOnSelect expand="md" className='nav' >  
        <Container>
          <Navbar.Brand as= {Link} to = "/home"><span>Town</span>Dental</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div className='butom'>
              <Nav.Link as= {Link} to = "/home" className='NavDesign'>Home</Nav.Link>
              <Nav.Link as= {Link} to = "/register" className='NavDesign'>Register</Nav.Link>
              <Nav.Link as= {Link} to = "/login" className='NavDesign'>Login</Nav.Link>
              <Nav.Link as= {Link} to = "/profile" className='NavDesign'>Profile</Nav.Link>
              <Nav.Link as= {Link} to = "/treatment" className='NavDesign'>Treatment</Nav.Link>
              </div>
              <div className='boton'>
              <Nav.Link as= {Link} to = "/bookAppointment" className='book'>BOOK APPOINTMENT</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }