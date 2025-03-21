import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import LoaderComponent from "../../components/Loader/Loader";
import ErrorComponent from "../../components/Error/Error";
import { useDeletePastrieMutation, useGetAllPastriesQuery } from "../../store/slice/apiCrudSlice";
import { useState } from "react";
import "./Dashboard.scss";
import HandlePastryForm from "../../components/Pastry/AddForm";
import EditPastrieModal from "../../components/Pastry/EditModal";

const AdminDashboardPage = () => {

    const { data: pastries, isLoading, isError, error } = useGetAllPastriesQuery();
    const [deletePastrie] = useDeletePastrieMutation();
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentPastrie, setCurrentPastrie] = useState(null);

    if (isLoading) {
        return <LoaderComponent />
    }

    if (isError) {
        return <ErrorComponent error={error} />
    }

    const handleDelete = async ({ pastry }) => {
        const confirmDelete = window.confirm(`Supprimer "${pastry.name}" ?`);
        if (confirmDelete) {
            await deletePastrie(pastry.id);
        }
    };

    const handleEdit = ({ pastry }) => {
        console.log(pastry);
        setCurrentPastrie(pastry);
        setShowEditModal(true);
    }

    return (
        <Container className="dashboard my-5">
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
                        <HandlePastryForm closeForm={() => setShowAddForm(false)} />
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
                                                <Button variant="info" size="sm" className="me-1" onClick={() => handleEdit({ pastry })}>Modifier</Button>
                                                <Button variant="danger" size="sm" className="me-1" onClick={() => handleDelete({ pastry })}>Supprimer</Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {showEditModal && currentPastrie && (
                                        <EditPastrieModal
                                            show={showEditModal}
                                            onHide={() => setShowEditModal(false)}
                                            pastry={currentPastrie}
                                        />
                                    )}
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