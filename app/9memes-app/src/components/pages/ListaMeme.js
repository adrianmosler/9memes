import React from "react";
import Image from "react-bootstrap/Image";
import avatar from "../layouts/nav_bar/9memes.jpeg";
import img from "./meme.jpg";
import "./ListaMeme.css";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CardColumns, Card, Row, Col, Container } from "react-bootstrap";
class ListaMeme extends React.Component {
  render() {
    return (
      <Container className="container">
        <CardColumns>
          <Card border="success">
            <Card.Header>
              <Container>
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
              </Container>
            </Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Footer>
              <h5>
                {" "}
                12 <AiOutlineLike />
                -12
                <AiOutlineDislike />{" "}
              </h5>
            </Card.Footer>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src={img} />
          </Card>
          <Card border="success">
            <Card.Header>
              <Container>
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
              </Container>
            </Card.Header>
          </Card>
          <Card border="success">
            <Card.Header>
              <Container>
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
              </Container>
            </Card.Header>
            <Card.Footer>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Footer>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src={img} />
            <Card.Footer>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Footer>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src={img} />
            <h5>
              {" "}
              12 <AiOutlineLike />
              -12
              <AiOutlineDislike />{" "}
            </h5>
          </Card>
          <Card border="success">
            <Card.Header></Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Footer>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Footer>
          </Card>
          <Card border="success">
            <Card.Header>
              <Container>
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
              </Container>
            </Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Footer>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Footer>
          </Card>
          <Card border="success">
            <Card.Header>
              <Container>
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
              </Container>
            </Card.Header>
            <Card.Footer>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Footer>
          </Card>
          <Card border="success">
            <Card.Header>
              <Container>
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
              </Container>
            </Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Footer>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Footer>
          </Card>
          <Card border="success">
            <Card.Header>
              <Container>
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
              </Container>
            </Card.Header>
            <Card.Img variant="top" src={img} />
            <Card.Footer>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Footer>
          </Card>
        </CardColumns>
      </Container>
    );
  }
}

export default ListaMeme;
