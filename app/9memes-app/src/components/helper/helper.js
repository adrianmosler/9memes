/** Import de react y bootstrap */
import React from "react";
/** Import de react-bootstrap */
import {
  CardColumns,
  Card,
  Row,
  Col,
  Container,
  Button,
  Image,
  Spinner,
} from "react-bootstrap";
/** Import de react-icons */
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
/** Import de imagenes de prueba */
import avatar from "../layouts/nav_bar/9memes.jpeg";
/** Import de estilo */
import "./ListaMeme.css";

class GenericList extends React.Component {
  render(props) {
    return (
      <Container className="container">
        {props.loading ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <CardColumns>
            {props.lista.map((elemento) => (
              <ItemMeme direccion={elemento.url} key={elemento.id} />
            ))}
          </CardColumns>
        )}
      </Container>
    );
  }
}
function ItemMeme(props) {
  return (
    <Card border="success" style={{ borderWidth: "3px" }}>
      <Card.Header>
        <Row>
          <Col xs={2}>
            <Image src={avatar} width="40" height="40" roundedCircle />
          </Col>
          <Col>
            <pre>
              <h5>Titulo</h5>
              UserName
            </pre>
          </Col>
        </Row>
      </Card.Header>
      <Card.Img variant="top" src={props.direccion} />
      <Card.Footer>
        <h5>
          {" "}
          12
          <Button className="btn-circle" variant="success">
            <AiOutlineLike />
          </Button>{" "}
          -12
          <Button className="btn-circle" variant="danger">
            <AiOutlineDislike />
          </Button>{" "}
        </h5>
      </Card.Footer>
    </Card>
  );
}

export default GenericList;
