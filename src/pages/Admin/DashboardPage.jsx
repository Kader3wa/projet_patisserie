import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import LoaderComponent from "../../components/Loader/Loader";
import ErrorComponent from "../../components/Error/Error";
import { useGetAllPastriesQuery } from "../../store/slice/apiCrudSlice";

const AdminDashboardPage = () => {

    const { data: pastries, isLoading, isError, error } = useGetAllPastriesQuery();


    if (isLoading) {
        return <LoaderComponent />
    }

    if (isError) {
        return <ErrorComponent error={error} />
    }

    console.log(pastries);

    return (
        <Container className="my-5">
            <Card className="shadow">
                <Card.Body>
                    <Card.Title className="text-center mb-5">
                        <h1>Administration</h1>
                    </Card.Title>
                    <Card.Text>
                        <h2>Listing des patisseries</h2>
                    </Card.Text>
                    <Row className="my-5">
                        <Col md={12} className="text-center">
                            <Button variant="primary">Ajouter une patisserie</Button>
                        </Col>
                    </Row>
                    <Row>
                        {pastries.map((pastrie) => (
                            <Col md={12} key={pastrie.id}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Nom</th>
                                            <th>Quantités restantes</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>
                                                <Card.Img src="https://placehold.co/150x150" />
                                            </td>
                                            <td>{pastrie.name}</td>
                                            <td>{pastrie.quantity}</td>
                                            <td className="d-flex justify-content-around">
                                                <Button variant="warning">Modifier</Button>
                                                <Button variant="danger">Supprimer</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AdminDashboardPage;