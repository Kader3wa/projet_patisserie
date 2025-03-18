import { Card, Container } from "react-bootstrap";

const LoginPage = () => {
    return (
        <>
            <Container className="my-5">
                <Card className="shadow">
                    <Card.Body className="text-center">
                        <Card.Title >
                            <h1>Connexion</h1>
                        </Card.Title>
                        <p>Connectez-vous pour accéder à votre espace personnel</p>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default LoginPage;