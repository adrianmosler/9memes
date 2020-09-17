import React from "react";
import GenericList from "../../helper/helper";
import useFetch from '../../../hooks/useFetch';
function MostPopular() {
  
    const {data,loading,error } =useFetch('https://jsonplaceholder.typicode.com/photos');
    
    return (<GenericList data={data } loading={loading} />);
}

export default MostPopular;