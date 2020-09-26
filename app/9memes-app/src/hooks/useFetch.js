import { useState, useEffect } from "react";
import {API_URL} from '../service/settings'

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchResource();
  }, [url]);
  return { data, loading, error };
};
export default useFetch;

export const getList = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error de consulta API:", error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const url=API_URL+'/category'
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error de consulta API:", error);
    return [];
  }
};