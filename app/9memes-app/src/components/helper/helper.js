/** Import de react y bootstrap */
import React from "react";
/** Import de react-bootstrap */
import { CardColumns, Card, Container, Button } from "react-bootstrap";
/** Import de react-icons */
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
/** Import de estilo */
import "./ListaMeme.css";
function GenericList(props) {
  return (
    <Container className="container">
      <CardColumns>
        {props.data.map((elemento) => (
          <CardMeme
            direccion={elemento.img}
            key={elemento._id}
            title={elemento.title}
          />
        ))}
      </CardColumns>
    </Container>
  );
}

function CardMeme(props) {
  return (
    <Card border="success" style={{ borderWidth: "3px" }}>
      <Sector_Header title={props.title} />
      <Card.Img variant="top" src={props.direccion?.secure_url} />
      <Sectro_Footer
        category={props.category}
        like={props.like}
        unLike={props.unLike}
      />
    </Card>
  );
}
function Sector_Header(props) {
  return (
    <Card.Header>
      <pre>{props.title}</pre>
    </Card.Header>
  );
}
function Sectro_Footer(props) {
  return (
    <Card.Footer>
      {props.category}
      {props.like ? props.like.length : 0}
      <Button className="btn-circle" variant="success">
        <AiOutlineLike />
      </Button>{" "}
      -{props.unLike ? props.unLike.length : 0}
      <Button className="btn-circle" variant="danger">
        <AiOutlineDislike />
      </Button>{" "}
    </Card.Footer>
  );
}
export default GenericList;
