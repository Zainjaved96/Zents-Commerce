import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge } from "react-bootstrap";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" style={{'background':'#3A210D'}} className=" navbar-dark py-3">
      <Container>
        <Link className="navbar-brand col-9 col-md-5" to="/"><img src={"/src/assets/images/logos/zen-logo.png"} width="40%" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto " >
          <Link to="/products" className="pe-3 nav-link  hover-brown text-white"  >Products</Link>
            <Link className="pe-3 hover-brown text-white nav-link nav-link" to="#link">About Us</Link>
            <NavDropdown className="pe-3 hover-brown text-white" style={{'background':'#3A210D'}} title="Shop" id="basic-nav-dropdown">
              <Link  className="hover-brown text-dark dropdown-item"   to="/category/jackets">Jackets</Link>
              <Link  className="hover-brown text-dark dropdown-item"  to="/category/sweatshirts">Sweatshirts</Link >
              <Link className="hover-brown text-dark dropdown-item" to="/category/suit">Suits</Link>
              <Link className="hover-brown text-dark dropdown-item" to="/category/shirts">Shirts</Link>
              <Link className="hover-brown text-dark dropdown-item" to="/category/jeans">Jeans</Link>
              <Link className="hover-brown text-dark dropdown-item" to="/category/kurta">Kurta</Link>
              
            </NavDropdown>
            <Link className="pe-3 text-white hover-brown nav-link" to="#link">Return Policy</Link>
            <Link className="pe-3 text-white hover-brown nav-link" to="#link">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center gap-3 d-none d-lg-flex">
      <div className="position-relative me-1" style={{"cursor":"pointer"}}>
      <i class="fa-solid fa-cart-shopping text-white"></i>
        
      </div>
      <div className="position-relative nav-user  " style={{"cursor":"pointer"}}>
      <i class="fa-solid fa-user text-white"></i>        {/* Add the user's notification badge here */}
      </div>
    </div>
      </Container>
    </Navbar>
  );
}

export default Header;
