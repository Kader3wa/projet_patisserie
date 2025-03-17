import { Container, Spinner } from "react-bootstrap";

const LoaderComponent = () => {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="danger" />
            </Container>
        </>
    );
}

export default LoaderComponent;