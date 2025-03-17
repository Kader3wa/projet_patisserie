import { Button, Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useGetPastriesQuery } from "../../store/slice/apiGameSlice";
import LoaderComponent from "../../components/Loader/Loader";
import ErrorComponent from "../../components/Error/Error";
import { useNavigate } from "react-router";

const HomePage = () => {

    const {
        data: pastries,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPastriesQuery()

    const navigate = useNavigate();

    let content;

    if (isLoading) {
        return <LoaderComponent />
    }

    if (isError) {
        return <ErrorComponent error={error} />
    }

    if (isSuccess) {
        console.log(pastries)
        if (isSuccess) content =
            <>
                <Row>{
                    pastries.map((pastry) => (
                        <Col key={pastry.id} xs={12} md={6} lg={4}>
                            <Card className="my-3 d-flex flex-column align-items-center">
                                <Card.Img variant="top" src="https://placehold.co/600x400" />
                                <Card.Body>
                                    <Card.Title>{pastry.name} : {pastry.quantity}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }</Row>
            </>
    }

    const handlePlayGame = () => {
        navigate('/game')
    }

    return (
        <>
            <Container>
                <Card>
                    <Card.Body className="text-center">
                        <Card.Title>
                            Jouez à notre jeux Yam's pour tenter de remporter des lots
                        </Card.Title>
                        <Button variant="primary" className="my-3" onClick={handlePlayGame}>Jouer</Button>
                        <Card.Text>
                            Lots restants :
                        </Card.Text>
                        {content}
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default HomePage;