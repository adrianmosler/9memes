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
{
  /* <Spinner animation="border" variant="success" /> */
}
function GenericList(props) {
  return (
    <Container className="container">
      <CardColumns>
        {props.data.map((elemento) => (
          <CardMeme direccion={elemento.img} key={elemento._id} />
        ))}
      </CardColumns>
    </Container>
  );
}

function CardMeme(props) {
  return (
    <Card border="success" style={{ borderWidth: "3px" }}>
      <Sector_Header />
      <Card.Img variant="top" src={props.direccion} />
      <Sectro_Footer />
    </Card>
  );
}
function Sector_Header() {
  return (
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
  );
}
function Sectro_Footer() {
  return (
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
  );
}
export default GenericList;
