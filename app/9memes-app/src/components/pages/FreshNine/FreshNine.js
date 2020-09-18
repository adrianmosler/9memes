import React from "react";
import GenericList from "../../helper/helper";
import useFetch from "../../../hooks/useFetch";
function FreshNine() {
  const { data, loading, error } = useFetch(
    "https://api9memes.herokuapp.com/publication?limit=9&skip=0"
  );

  return <GenericList data={data} />;
}

export default FreshNine;
