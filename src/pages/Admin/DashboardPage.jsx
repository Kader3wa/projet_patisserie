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
                    <h1 className="text-center mb-5">
                        Administration
                    </h1>
                    <h2>Listing des patisseries</h2>
                    <Row className="my-5">
                        <Col md={12} className="text-center">
                            <Button variant="primary">Ajouter une patisserie</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Nom</th>
                                        <th>Quantités restantes</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center align-middle">
                                    {pastries.map((pastry) => (
                                        <tr key={pastry.id}>
                                            <td>
                                                <img src="https://placehold.co/150x150" alt={pastry.name} />
                                            </td>
                                            <td>{pastry.name}</td>
                                            <td>{pastry.quantity}</td>
                                            <td>
                                                <Button variant="info" className="mx-1">Modifier</Button>
                                                <Button variant="danger" className="mx-1">Supprimer</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AdminDashboardPage;