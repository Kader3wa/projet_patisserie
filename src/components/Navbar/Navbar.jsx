import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="mb-5">
            <Container>
                <Navbar.Brand href="/">Patisserie 3WA</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
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