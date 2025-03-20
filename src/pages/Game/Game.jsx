import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { lancerDes } from '../../store/slice/gameSlice';
import { selectDes, selectError, selectIsError, selectIsLoading, selectLancersRestants, selectPatisseriesGagnees } from '../../store/selector/gameSelector';
import { useWinPastriesQuery } from '../../store/slice/apiGameSlice';
import { useEffect, useState } from 'react';
import LoaderComponent from '../../components/Loader/Loader';
import ErrorComponent from '../../components/Error/Error';

const GamePage = () => {
    const dispatch = useDispatch();
    const des = useSelector(selectDes);
    const lancersRestants = useSelector(selectLancersRestants);
    const patisseriesGagnees = useSelector(selectPatisseriesGagnees);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    const error = useSelector(selectError);
    const [triggerWin, setTriggerWin] = useState(false);

    const imagesDes = {
        1: '/images/1.png',
        2: '/images/2.png',
        3: '/images/3.png',
        4: '/images/4.png',
        5: '/images/5.png',
        6: '/images/6.png',
    };

    const { data: patisseries } = useWinPastriesQuery(
        triggerWin && patisseriesGagnees > 0 ? patisseriesGagnees : undefined,
        { skip: !triggerWin || patisseriesGagnees === 0 }
    );

    useEffect(() => {
        if (lancersRestants === 0 && patisseriesGagnees > 0) {
            setTriggerWin(true);
        }
    }, [lancersRestants, patisseriesGagnees]);

    let content;

    if (isLoading) {
        return <LoaderComponent />
    }

    if (isError) {
        return <ErrorComponent error={error} />
    }

    if (triggerWin && patisseries) {
        console.log(patisseries);
        content = (
            <>
                <Alert variant="success" className="text-center">
                    <p>Bravo</p>
                    <p>Vous avez gagné !</p>
                    <ul className="list-unstyled">
                        {patisseries.map((pastry) => (
                            <li key={pastry.id}>{pastry.name}</li>
                        ))}
                    </ul>
                </Alert>
            </>
        );
    } else {
        content = (
            <Alert variant="danger" className="text-center">
                <p>Perdu</p>
            </Alert>
        );
    }

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

                        <Row className="my-3 justify-content-center">
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

                        <Row className="my-3">
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

                        {triggerWin &&
                            <Row className="my-3">
                                <Col className="d-flex justify-content-center">
                                    {content}
                                </Col>
                            </Row>
                        }
                    </Card.Body>
                </Card>
            </Container >
        </>
    );
};

export default GamePage;