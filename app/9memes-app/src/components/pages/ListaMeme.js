/** Import de react y bootstrap */
import React, { useState, useEffect, useContext } from "react";
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
import { ItemMeme } from "./ItemMeme/ItemMeme.js";
import { useFetch } from ".././.././hooks/useFetch";
import { getMemes } from " .././../Service/getGifs";
import { useGifs } from ".././../hooks/useGifs";
import GifsContext from "../././../Context/GifsContext";
/* class ListaMeme extends React.Component { */

export default function ListaMeme() {
  const [page, setPage] = useState(0);
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const { listaMemes } = useGifs().gifs;
  const { gifs, setGifs } = useContext(GifsContext);

  const {data,loading,error } =useFetch();

  console.log(listaMemes);
  console.log(gifs);
  /* 
  
    constructor(props) {
    super(props);
    this.state = { loading: true, lista: null };
  }
 */
  /*  styleItem = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  }; */
  /*  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const api = await fetch(url);
    let data = await api.json();
    data = data.filter((elemento) => elemento.id < 101);
    this.setState({ loading: false, lista: data });
  } */
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
    console.log(scrollTop);
    console.log(scrollHeight);
    console.log(clientHeight);
  };

    useEffect(() => {
      const loadMemes=()=>{
        setLoading(true);
      /*  const newList = await getMemes(page); */
      const { gifs } = useGifs();
      setLista((prev) => [...prev, ...gifs]);
      setLoading(false);
    }
   loadMemes();
  });

  /*  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    };

    loadUsers();
  }, [page]); */

  /*  render() { */
  return (
    <Container className="container " onScroll={handleScroll}>
      {loading && <Spinner animation="border" variant="success" />}
      <CardColumns>
        {gifs.map((elemItem) => {
          console.log("este es el listado", gifs);
          return <ItemMeme Elemento={elemItem} key={elemItem._id} />;
        })}
      </CardColumns>
    </Container>
  );
} /* 
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
      <Card.Img
        variant="top"
        src={props.direccion}
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
 */

/* } */
/* export default ListaMeme;
 */
