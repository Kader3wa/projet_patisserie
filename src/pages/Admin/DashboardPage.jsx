import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import LoaderComponent from "../../components/Loader/Loader";
import ErrorComponent from "../../components/Error/Error";
import { useDeletePastrieMutation, useGetAllPastriesQuery } from "../../store/slice/apiCrudSlice";
import { useState } from "react";
import "./Dashboard.scss";
import HandlePastryForm from "../../components/Pastry/AddForm";

const AdminDashboardPage = () => {

    const { data: pastries = [], isLoading, isError, error } = useGetAllPastriesQuery(undefined, {
        selectFromResult: ({ data, isLoading, isError, error }) => ({
            data,
            isLoading,
            isError,
            error,
        }),
    });
    const [deletePastrie] = useDeletePastrieMutation();
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentPastrie, setCurrentPastrie] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

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
        setCurrentPastrie(pastry);
        setShowEditModal(true);
    }

    const filterPastries = pastries.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm.length >= 3
    );

    return (
        <>
            <Container className="dashboard my-5">
                <Card className="shadow">
                    <Card.Body>
                        <h1 className="text-center mb-5">
                            Administration
                        </h1>
                        <h2>Listing des patisseries</h2>
                        <Row className="my-5">
                            <Col md={4} className="mx-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Rechercher une pâtisserie (min. 3 lettres)..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm.length > 0 && searchTerm.length < 3 && (
                                    <div className="text-muted small mt-1">Saisissez au moins 3 caractères</div>
                                )}
                            </Col>
                        </Row>
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
                                        {(searchTerm.length >= 3 ? filterPastries : pastries).map((pastry) => (
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
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
            {
                showEditModal && currentPastrie && (
                    <EditPastrieModal
                        show={showEditModal}
                        onHide={() => setShowEditModal(false)}
                        pastry={currentPastrie}
                    />
                )
            }
        </>
    );
}

export default AdminDashboardPage;