import { Button, Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useGetPastriesQuery } from "../../store/slice/apiGameSlice";

const HomePage = () => {

    const {
        data: pastries,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetPastriesQuery()

    let content;

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error}</div>
    }

    if (isSuccess) {
        if (isSuccess) content =
            <>
                <Row>{
                    pastries.map((pastry) => (
                        <Col key={pastry.id} xs={12} md={6} lg={4}>
                            <Card className="m-3 d-flex flex-column align-items-center">
                                <Card.Img variant="top" src="https://placehold.co/600x400" />
                                <Card.Body>
                                    <Card.Title>{pastry.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }</Row>
            </>
    }

    return (
        <>
            <Container>
                <Card>
                    <Card.Body className="text-center">
                        <Card.Title>
                            Jouez à notre jeux Yam's pour tenter de remporter des lots
                        </Card.Title>
                        <Button variant="primary" className="my-3">Jouer</Button>
                        <Card.Text>
                            Lots restants :
                        </Card.Text>
                        <Card.Text>
                            {content}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default HomePage;