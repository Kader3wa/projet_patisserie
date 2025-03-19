import { Card, Container } from "react-bootstrap";

const AdminDashboardPage = () => {
    return (
        <Container className="my-5">
            <Card className="shadow">
                <Card.Body className="text-center">
                    <Card.Title >
                        <h1>Administration</h1>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AdminDashboardPage;