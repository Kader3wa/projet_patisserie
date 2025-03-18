import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { lancerDes } from '../../store/slice/gameSlice';
import { selectDes, selectError, selectIsError, selectIsLoading, selectLancersRestants, selectPatisseriesGagnees } from '../../store/selector/gameSelector';

const GamePage = () => {
    const dispatch = useDispatch();
    const des = useSelector(selectDes);
    const lancersRestants = useSelector(selectLancersRestants);
    const patisseriesGagnees = useSelector(selectPatisseriesGagnees);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    const error = useSelector(selectError);

    const imagesDes = {
        1: '/images/1.png',
        2: '/images/2.png',
        3: '/images/3.png',
        4: '/images/4.png',
        5: '/images/5.png',
        6: '/images/6.png',
    };

    return (
        <>
            <Container className="my-5">
                <Card className="shadow">
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Jeu du Yam's</h1>
                        </Card.Title>

                        <Row>
                            <Col xs={12} md={6} lg={4}>
                                <p>Vous avez 3 lancés.</p>
                                <p>Si vous obtenez une paire (2 dés identiques) vous gagnez une patisserie.</p>
                                <p>Avec un brelan (3 dés identiques) c'est deux patisseries.</p>
                                <p>Et en cas de carré (4 dés identiques) vous remportez 3 patisseries.</p>
                                <p>Accumulez les délices pour remporter la partie !</p>
                            </Col>
                        </Row>

                        <Row className="mt-4 justify-content-center">
                            {des.map((valeur, index) => (
                                <Col key={index} xs={2}>
                                    <Card key={index} className="d-flex justify-content-center align-items-center border-0">
                                        <img
                                            src={imagesDes[valeur]}
                                            alt={`Dé ${valeur}`}
                                            style={{ width: '100%' }}
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Row className="mt-4">
                            <Col className="d-flex justify-content-center">
                                <Button
                                    variant="primary"
                                    onClick={() => dispatch(lancerDes())}
                                    disabled={isLoading || lancersRestants === 0}
                                    className="me-2"
                                >
                                    {isLoading ? <Spinner size="sm" animation="border" /> : `Il vous reste (${lancersRestants} essai${lancersRestants > 1 ? 's' : ''})`}
                                </Button>
                            </Col>
                        </Row>

                        {isError && <Alert variant="danger" className="mt-3">{error}</Alert>}

                        <Row className="mt-4">
                            <Col className="d-flex justify-content-center">
                                <h4>Pâtisseries gagnées : {patisseriesGagnees}</h4>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container >
        </>
    );
};

export default GamePage;