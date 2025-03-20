import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import LoaderComponent from "../../components/Loader/Loader";
import ErrorComponent from "../../components/Error/Error";
import { useDeletePastrieMutation, useGetAllPastriesQuery } from "../../store/slice/apiCrudSlice";
import { useState } from "react";
import AddForm from "../../components/Pastry/AddForm";

const AdminDashboardPage = () => {

    const { data: pastries, isLoading, isError, error } = useGetAllPastriesQuery();
    const [deletePastrie] = useDeletePastrieMutation();
    const [showAddForm, setShowAddForm] = useState(false);

    if (isLoading) {
        return <LoaderComponent />
    }

    if (isError) {
        return <ErrorComponent error={error} />
    }

    const handleDelete = async ({ pastry }) => {
        console.log(pastry);
        const confirmDelete = window.confirm(`Supprimer "${pastry.name}" ?`);
        if (confirmDelete) {
            await deletePastrie(pastry.id);
        }
    };

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
                            <Button variant="primary" onClick={() => setShowAddForm(true)}>Ajouter une patisserie</Button>
                        </Col>
                    </Row>
                    {showAddForm && (
                        <AddForm closeForm={() => setShowAddForm(false)} />
                    )}
                    <Row>
                        <Col md={12}>
                            <Table hover>
                                <thead className="text-center">
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
                                                <img src={pastry.image} alt={pastry.name} style={{ width: '100px' }} />
                                            </td>
                                            <td>{pastry.name}</td>
                                            <td>{pastry.quantity}</td>
                                            <td>
                                                <Button variant="info" size="sm" className="me-1">Modifier</Button>
                                                <Button variant="danger" size="sm" className="me-1" onClick={() => handleDelete({ pastry })}>Supprimer</Button>
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