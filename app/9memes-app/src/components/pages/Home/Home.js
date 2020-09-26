import React from "react";
import GenericList from "../../helper/GenericList";
import { Container, Spinner } from "react-bootstrap";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: "",
      endPoint: "publication",
    };
  }
  setLoading = (loading) => {
    this.setState({ loading });
  };

  render() {
    const { loading, endPoint } = this.state;
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
        <GenericList endPoint={endPoint} cambiarLoading={this.setLoading} />
      </Container>
    );
  }
}

export default Home;
