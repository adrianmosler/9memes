/** Import de react y bootstrap */
import React from "react";
/** Import de react-bootstrap */
import { CardColumns, Card, Container, Button, Spinner } from "react-bootstrap";
/** Import de react-icons */
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
/** Import de estilo */
import "./ListaMeme.css";
import { API_URL } from "../../service/settings";
import { getList } from "../../hooks/useFetch";
import InfiniteScroll from "react-infinite-scroll-component";

class GenericList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      actual: 0,
      prevY: 0,
      endPoint: this.props.endPoint,
      parameters: this.props.parameters,
      defaultLimit: 4,
    };
  }

  setLoading(band) {
    this.props.cambiarLoading(band);
  }

  componentDidMount() {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.setState({ loading: true });
    this.getMemes({ limit: this.state.defaultLimit, skip: 0 });
    this.setState({ actual: this.state.defaultLimit });
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
    this.setState({ loading: false });
  }

  handleObserver(entities, observer) {
    let primeraCarga = false;
    const { data, loading, actual, prevY, defaultLimit, endPoint } = this.state;

    const y = entities[0].boundingClientRect.y;

    if (this.state.prevY > y) {
      this.getMemes({ limit: defaultLimit, skip: actual });
      this.setState({ actual: actual + defaultLimit + 1 });
    }
    this.setState({ prevY: y });
    if (actual === defaultLimit) this.setLoading(false);
  }

  getMemes = async ({ limit = 9, skip = 0 }) => {
    this.setState({ loading: true });
    const { endPoint, parameters } = this.state;
    const url_Pag = `limit=${limit}&skip=${skip}`;

    const url =
      API_URL +
      `/${endPoint}?` +
      (parameters ? url_Pag + "&" + parameters : url_Pag);

    let mensajeError = "";
    try {
      const newData = await getList(url);
      const data = [...this.state.data, ...newData];
      this.setState({ data: data, loading: false, error: "" });
    } catch (error) {
      console.log("error de consulta api:", error);
      mensajeError = error;
    }
    this.setState({ loading: false });
  };

  render() {
    const loadingFootCSS = {
      height: "100px",
      margin: "30px",
      textAlign: "center",
    };
    const loadingHeaderCSS = {
      textAlign: "center",
    };

    const { data, loading } = this.state;
    return (
      <>
        <div className="listado-memes">
          <InfiniteScroll
            dataLength={this.state.data.length}
            hasMore={true}
            scrollableTarget="listado-memes"
          >
            {loading && (
              <div style={loadingHeaderCSS}>
                <Spinner
                  className="text-center"
                  animation="border"
                  variant="success"
                  size="xl"
                />
              </div>
            )}
            <Container className="container">
              <CardColumns>
                {data.map((elemento) => (
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
          </InfiniteScroll>
          <div
            ref={(loadingRef) => (this.loadingRef = loadingRef)}
            style={loadingFootCSS}
          >
            {loading && (
              <Spinner
                className="text-center"
                animation="border"
                variant="success"
                size="xl"
              />
            )}
          </div>
        </div>
      </>
    );
  }
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
