import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css"
function Article(props) {
  return (
    <Card style={{ width: '15rem' }} className = "cardimage">
      <Card.Img variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className = "cardtext">
         { props.text}
        </Card.Text>
        <Button variant="danger"><a href = {props.link} className = "cardbuttonlink">Click here</a></Button>
      </Card.Body>
    </Card>
  );
}

export default Article;