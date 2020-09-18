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
            categoria={elemento.category}
            like={elemento.likes}
            unLike={elemento.unLikes}
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
      <Sector_Footer
        category={props.categoria}
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
function Sector_Footer(props) {
  let salida = "";
  props.category.forEach((elemento) => (salida += elemento.name + "\n"));

  return (
    <Card.Footer>
      {salida}
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
