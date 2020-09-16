import React from "react";
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
/* import avatar from "../layouts/nav_bar/9memes.jpeg"; */
import avatar from ".././../layouts/nav_bar/9memes.jpeg";

export function ItemMeme(props) {
  const {
    likes,
    unLikes,
    _id,
    title,
    description,
    category,
    img,
    createdAt,
    createdBy,
  } = props.Elemento;
  return (
    <Card border="success" style={{ borderWidth: "3px" }}>
      <Card.Header>
        <Row>
          <Col xs={2}>
            <Image src={avatar} width="40" height="40" roundedCircle />
          </Col>
          <Col>
            <pre>
              <h5>{title}</h5>
              {createdBy.userName}
            </pre>
          </Col>
        </Row>
      </Card.Header>
      <Card.Img
        variant="top"
        src={img}
        style={
          ({ alignItems: "center" },
          { minWidth: "100px" },
          { maxWidth: "100px" },
          { margin: "5" },
          { padding: "5" })
        }
      />
      <Card.Footer>
        <h5>
          {" "}
          {likes.length()}
          <Button className="btn-circle" variant="success">
            <AiOutlineLike />
          </Button>{" "}
          {unLikes.length()}
          <Button className="btn-circle" variant="danger">
            <AiOutlineDislike />
          </Button>{" "}
        </h5>
      </Card.Footer>
    </Card>
  );
}

export default ItemMeme;
