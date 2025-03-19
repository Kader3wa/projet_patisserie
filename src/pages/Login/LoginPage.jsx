import { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useLoginMutation, useMeQuery } from "../../store/slice/apiUserSlice";
import AdminDashboardPage from "../Admin/DashboardPage";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError }] = useLoginMutation();
    const { data: user, refetch } = useMeQuery();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({ email, password });
        refetch();
    };

    if (user) {
        return <AdminDashboardPage />;
    }

    return (
        <>
            <Container className="my-5">
                <Card className="shadow">
                    <Card.Body>
                        <Card.Title className="text-center">
                            <h1>Connexion</h1>
                        </Card.Title>
                        {isError && <Alert variant="danger" className="text-center">Email ou mot de passe incorrect</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary">Se connecter</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default LoginPage;