import React from "react";
import CategoriesMultiselect from "./CategoriesMultiselect";
// import "react-bulma-components/dist/react-bulma-components.min.css";
// import { FormControl } from  'react-bulma-components/dist';;
// import { Button } from 'react-bulma-components/dist';
import {
  Button,
  Form,
  FormGroup,
  FormFile,
  Input,
  Group,
  Label,
  FormControl,
} from "react-bootstrap";
// import {
//   FormControl,
//   FormGroup,
//   ControlLabel,
//   HelpBlock,
//   Checkbox,
//   Radio,
//   Button,
// } from "react-bootstrap";

export default class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      categories: ["WTF", "Funny", "Animals", "Dogs", "Cats"],
      categoriesSelected: [],
    };
  }

  handlerVolverListadoAlumno = () => {};
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    // const { id, nombre, edad } = this.props.value; // recibe un alumno por props

    // const { categories } = this.props.value; // recibe un listado de catergorias
    // console.log("llego por props a detalle alumno:", this.props);
    return (
      <>
        {/* <div className="icon">
            <img
              src={require(`../images/estudiante.png`)}
              style={{ width: "20rem" }}
              alt="estudiante"
            />
          </div> */}
        {/* <FormControl>
          <FormGroup controlId="formBasicEmail">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="Enter email" />
            <FormText className="text-muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>

          <FormGroup controlId="formBasicPassword">
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Password" />
          </FormGroup>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </FormControl>

        <Form>
          <FormGroup>
            <Formfile
              id="exampleFormControlFile1"
              label="Example file input"
            />
          </FormGroup>
        </Form> */}

        <div>Nueva Publicación</div>
        <div className="NewPost">
          <div>
            <span className="tituloLabel">Titulo: </span>
            <input titulo="titulo" onChange={this.handleChange} />
            {/* <span className="alumno-id">{id}</span> */}
            <div />
            <div id="bloqueCategories">
              <div className="categoriesIzquierda">
                <span className="categoriesLabel">Categorías: </span>
                {/* poner componente multiselected categorias */}
              </div>

              <div className="categoriesDerecha">
                <CategoriesMultiselect className="multiSelectCategories" />
                {/* <span className="categoriesLabel">
                  {multiSelectCategories.selectedValues[0]}{" "}
                </span> */}
              </div>
            </div>
          </div>
          <span className="descripcionLabel">Descripción: </span>
          <input descripcion="descripcion" onChange={this.handleChange} />
        </div>

        {/* <Container>
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
        </Container> */}

        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" />
          </Form.Group>
        </Form>
        <button
          className="alumno-volver"
          color="primary"
          onClick={() => this.handlerVolverListadoAlumno()}
        >
          <i className="alumnoVolver">Agregar</i>
        </button>
      </>
    );
  }
}
