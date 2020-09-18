import React from "react";
import GenericList from "../../helper/helper";
import useFetch from "../../../hooks/useFetch";
import { Container, Spinner } from "react-bootstrap";
function ImpopularNine() {
  const { data, loading, error } = useFetch(
    "https://api9memes.herokuapp.com/publication?limit=8&skip=0&moreDisLikes=true"
  );

  return (
    <Container>
      {loading ? (
        <div>
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <GenericList data={data} />
      )}
    </Container>
  );
}

export default ImpopularNine;
