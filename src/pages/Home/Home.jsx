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
        content =
            <>
                <Row>{
                    pastries.map((pastry) => (
                        (pastry.quantity > 0) &&
                        <Col key={pastry.id} xs={12} md={6} lg={4}>
                            <Card className="my-3 d-flex flex-column align-items-center shadow">
                                <Card.Img variant="top" src={pastry.image} style={{ height: "300px" }} />
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
            <Container className="my-5">
                <Card className="shadow">
                    <Card.Body className="text-center">
                        <Card.Title>
                            <h1>Jouez à notre jeux Yam's pour tenter de remporter des lots</h1>
                        </Card.Title>
                        {isSuccess && pastries.length === 0 && <Card.Text>Il n'y a plus de lots disponibles</Card.Text>}
                        {isSuccess && pastries.length > 0 &&
                            <>
                                <Button variant="primary" className="my-3" onClick={handlePlayGame}>Jouer</Button>
                                <Card.Text>
                                    Lots restants
                                </Card.Text>
                                {content}
                            </>
                        }
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default HomePage;