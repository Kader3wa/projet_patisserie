import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

const HomePage = () => {
    return (
        <>
            <Container>
                <Card>
                    <Card.Body className="text-center">
                        <Card.Title>
                            Jouez à notre jeux Yam's pour tenter de remporter des lots
                        </Card.Title>
                        <Button variant="primary" className="my-5">Jouer</Button>
                        <Card.Text>
                            Lots restants :
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default HomePage;