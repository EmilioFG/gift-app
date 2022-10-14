import { useState, useEffect } from 'react';

import { getGifs } from '../api/gif';


export const useGifs = (category) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getApiGif(category);
  }, []);

  const getApiGif = async (category) => {
    const gifs = await getGifs(category);
    setGifs(gifs);
    setIsLoading(false)
  }

  return {
    gifs,
    isLoading,
  }
}