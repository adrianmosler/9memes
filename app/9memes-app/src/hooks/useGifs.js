import { useContext, useEffect, useState } from "react";
import getGifs from " .././../Service/getGifs";
import getMemes from " .././../Service/getGifs";
import GifsContext from "../Context/GifsContext";

const INITIAL_PAGE = 0;

// export function useGifs ({ keyword, rating } = { keyword: null }) {
export function useGifs() {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);

  // recuperamos la keyword del localStorage
  /*  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random' */

  // useEffect(function () {
  //   setLoading(true)

  //   getGifs({ keyword: keywordToUse, rating })
  //     .then(gifs => {
  //       setGifs(gifs)
  //       setLoading(false)
  //       // guardamos la keyword en el localStorage
  //       localStorage.setItem('lastKeyword', keyword)
  //     })
  // }, [keyword, keywordToUse, rating, setGifs])

  /* 
  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [ page,  setGifs])

 */

  useEffect(async() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getMemes({ page })
    .then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
      console.log(gifs);
    });
  }, [page, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
}
