import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  console.log("mostrar respuesta api:",apiResponse);
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};
const fromApiResponseToMemes = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    console.log("respuestaapi :", data);
    const memes = data.map((image) => {
      const {
        likes,
        unLikes,
        _id,
        title,
        description,
        category,
        img,
        createdAt,
        createdBy,
      } = image;

      /*    const { url } = images.downsized_medium; */
      return {
        likes,
        unLikes,
        _id,
        title,
        description,
        category,
        img,
        createdAt,
        createdBy,
      };
    });
    return memes;
  }
  return [];
};

export default async function getGifs({
  limit = 6,
  rating = "g",
  keyword = "Funny" /* la categoria nombre o idg */,
  page = 0,
} = {}) {
  const apiURL = `${API_URL}/publication/?limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}

export function getMemes({
  limit = 6,
  rating = "g",
  keyword = "Funny" /* la categoria nombre o idg */,
  page = 0,
} = {}) {
  /*   const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en` */
  const apiURL = `${API_URL}/publication?limit=${limit}&skip=${page * limit}`;


  const {data,loading,error } =useFetch(apiURL);
  return (data);
  // return fetch(apiURL)
  //   .then((res) => res.json())
  //   .then(fromApiResponseToMemes);

  /*  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs) */
}
