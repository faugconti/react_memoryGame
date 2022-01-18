import { useEffect, useState } from "react";

//get a number between 0 and 10
const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useFetchImages = ({ gameOptions }) => {
  const [images, setImages] = useState([]);

  const buildUrl = () => {
    const url = new URL("https://api.pexels.com/v1/search");
    url.search = new URLSearchParams({
      query: gameOptions.category,
      orientation: "square",
      size: "small",
      per_page: gameOptions.cardsCount / 2,
      page: getRandomPage(),
    });
    return url;
  };

  const fetchPics = () => {
    fetch(buildUrl(), {
      headers: {
        authorization: process.env.REACT_APP_AUTH_KEY,
      },
    })
      .then((data) => data.json())
      .then((data) => setImages(data.photos));
  };

  useEffect(() => {
    if (!gameOptions) return;
    fetchPics();
  }, [gameOptions]);

  return images;
};

export default useFetchImages;
