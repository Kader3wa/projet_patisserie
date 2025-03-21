import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useUpdatePastrieMutation } from "../../store/slice/apiCrudSlice";

const EditPastrieModal = ({ show, onHide, pastry }) => {
    const [updatePastrie] = useUpdatePastrieMutation();
    const [formData, setFormData] = useState({
        name: "",
        quantity: 0,
        image: "",
        choice: "",
    });

    useEffect(() => {
        if (pastry) {
            setFormData({
                name: pastry.name,
                quantity: pastry.quantity,
                image: pastry.image,
                choice: pastry.choice || "",
            });
        }
    }, [pastry]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePastrie({ id: pastry.id, ...formData });
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Modifier {pastry?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Quantité</Form.Label>
                        <Form.Control
                            type="number"
                            value={formData.quantity}
                            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="secondary" onClick={onHide}>Annuler</Button>
                        <Button type="submit" variant="primary">Enregistrer</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditPastrieModal;
