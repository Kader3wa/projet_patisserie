import { Navbar, Container, Nav } from "react-bootstrap";
import { useMeQuery } from "../../store/slice/apiUserSlice";
import { useLogoutMutation } from "../../store/slice/apiUserSlice";

const NavbarComponent = () => {

    const { data: user } = useMeQuery();
    const [logout] = useLogoutMutation();

    const handleLogout = async () => {
        await logout();
        window.location.replace("/login")
    };

    return (
        <Navbar expand="lg" className="mb-5 bg-1">
            <Container>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar" className="flex-column justify-content-center">
                    <h1 className="text-white">La patisserie 3WA</h1>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link href="/admin">
                                    Admin
                                </Nav.Link>
                                <Nav.Link onClick={handleLogout}>
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link href="/login">
                                Login
                            </Nav.Link>
                        )}
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;