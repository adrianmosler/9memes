import React from "react";
import GenericList from "../../helper/GenericList";
import { Container, Spinner } from "react-bootstrap";

class MostPopular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: "",
      endPoint: "publication",
      parameters: "moreLikes=true",
    };
  }

  setLoading = (loading) => {
    console.log("llego a setLoading con :", loading);
    this.setState({ loading });
  };

  render() {
    const { loading, endPoint, parameters } = this.state;

    return (
      <Container className="text-center">
        {loading && (
          <div>
            <Spinner
              className="text-center"
              animation="border"
              variant="success"
            />
          </div>
        )}

        <GenericList
          endPoint={endPoint}
          parameters={parameters}
          cambiarLoading={this.setLoading}
        />
      </Container>
    );
  }
}

export default MostPopular;
