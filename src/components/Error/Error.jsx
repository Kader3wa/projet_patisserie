import { Container } from "react-bootstrap";

const ErrorComponent = (error) => {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center">
                <h1>{error}</h1>
            </Container>
        </>
    )
};

export default ErrorComponent;