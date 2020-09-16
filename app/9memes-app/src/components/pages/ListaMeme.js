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

class ListaMeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, lista: null };
  }
  async componentDidMount() {
    const url = "https://api9memes.herokuapp.com/publication?skip=0&limit=50";
    const api = await fetch(url);
    let data = await api.json();
    //data = data.filter((elemento) => elemento.id < 101);
    this.setState({ loading: false, lista: data });
  }

  render() {
    return (
      <Container className="container">
        {this.state.loading ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <CardColumns>
            {this.state.lista.map((elemento) => (
              <ItemMeme 
                key={elemento._id} 
                title={elemento.title} 
                likes={elemento.likes} 
                unlikes={elemento.unLikes} 
                createdBy={elemento.createdBy}
                img={elemento.img?.secure_url}
              />
            ))}
          </CardColumns>
        )}
      </Container>
    );
  }
}
function ItemMeme(props) {
  const {elemento,title,likes,unlikes,createdBy,img} = props;
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
              Publicado por : 
              {createdBy?.userName}
            </pre>
          </Col>
        </Row>
      </Card.Header>
      <Card.Img variant="top" src={img} />
      <Card.Footer>
        <h5>

              {likes.length}
              <Button className="btn-circle ml-1 mr-4" variant="success">
                <AiOutlineLike />
              </Button>

              -{unlikes.length}
              <Button className="btn-circle ml-1" variant="danger">
                <AiOutlineDislike />
              </Button>

        </h5>
      </Card.Footer>
    </Card>
  );
}

export default ListaMeme;
