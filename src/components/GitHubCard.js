import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function GitHubCard({ name, imageURL, description, index }) {
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={`${imageURL}?index=${index}`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </ Card >

    )}