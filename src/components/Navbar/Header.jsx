import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge } from "react-bootstrap";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark py-3">
      <Container>
        <Navbar.Brand href="/">ZenCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link className="pe-3 hover-brown" href="/products">Products</Nav.Link>
            <Nav.Link className="pe-3 hover-brown" href="#link">About Us</Nav.Link>
            <NavDropdown className="pe-3 hover-brown bg-dark " title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item  className="hover-brown bg-dark text-white"   href="#action/3.1">Jackets</NavDropdown.Item>
              <NavDropdown.Item  className="hover-brown bg-dark text-white"  href="#action/3.2">Sweatshirts</NavDropdown.Item >
              <NavDropdown.Item className="hover-brown bg-dark text-white" href="#action/3.3">Suits</NavDropdown.Item>
              <NavDropdown.Item className="hover-brown bg-dark text-white" href="#action/3.3">T-shirts</NavDropdown.Item>
              <NavDropdown.Item className="hover-brown bg-dark text-white" href="#action/3.3">Jeans</NavDropdown.Item>
              <NavDropdown.Item className="hover-brown bg-dark text-white" href="#action/3.3">Kurta</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link className="pe-3" href="#link">Return Policy</Nav.Link>
            <Nav.Link className="pe-3" href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center d-none d-lg-flex">
      <div className="position-relative me-1" style={{"cursor":"pointer"}}>
        <HiOutlineShoppingCart style={{ width: "50px", height: "26px", color:"white" }} />
        <div className="position-absolute top-0 end-0 translate-middle badge rounded-circle bg-danger">
          3
        </div>
      </div>
      <div className="position-relative nav-user  " style={{"cursor":"pointer"}}>
        <AiOutlineUser style={{ width: "50px", height: "26px", color:"white" }} />
        {/* Add the user's notification badge here */}
      </div>
    </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
