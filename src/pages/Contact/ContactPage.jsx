import { Card, Container } from "react-bootstrap";

const ContactPage = () => {
    return (
        <>
            <Container className="my-5">
                <Card className="shadow">
                    <Card.Body className="text-center">
                        <Card.Title >
                            <h1>Contact</h1>
                        </Card.Title>
                        <p>Vous pouvez nous contacter sur patisserie3wa@mail.fr</p>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default ContactPage;