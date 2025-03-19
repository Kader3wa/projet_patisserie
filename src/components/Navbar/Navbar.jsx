import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="mb-5 bg-1">
            <Container>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar" className="flex-column justify-content-center">
                    <h1 className="text-white">La patisserie 3WA</h1>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;