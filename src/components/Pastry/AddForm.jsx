import { Button, Form } from "react-bootstrap";
import { useCreatePastrieMutation } from "../../store/slice/apiCrudSlice";
import { useState } from "react";

const AddForm = ({ closeForm }) => {

    const [createPastrie] = useCreatePastrieMutation();
    const [formData, setFormData] = useState({ name: "", quantity: 0, image: "" });

    const handleCreate = async (e) => {
        e.preventDefault();
        await createPastrie(formData);
        setFormData({ name: "", quantity: 0, image: "" });
        closeForm();
    };

    return (
        <div className="my-5">
            <h3>Ajout d'une patisserie</h3>
            <Form onSubmit={handleCreate}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nom de la patisserie"
                        value={formData.name}
                        onChange={(ev) => setFormData({ ...formData, name: ev.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantity">
                    <Form.Label>Quantité</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Quantité de la patisserie"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Image url"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="me-2">
                    Ajouter
                </Button>
                <Button variant="secondary" type="button" className="me-2" onClick={closeForm}>
                    Annuler
                </Button>
            </Form>
        </div>
    );
};

export default AddForm;