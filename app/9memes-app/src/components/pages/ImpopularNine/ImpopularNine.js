import React from "react";
import GenericList from "../../helper/helper";
import useFetch from "../../../hooks/useFetch";
function ImpopularNine() {
  const { data, loading, error } = useFetch(
    "https://api9memes.herokuapp.com/publication?limit=4&skip=0&moreDisLikes=true"
  );

  return <GenericList data={data} />;
}

export default ImpopularNine;
