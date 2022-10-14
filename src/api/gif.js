import config from '../config/index';

export const getGifs = async (category) => {
  try {
    const url = `${config.API_URL}?api_key=${config.API_KEY}&q=${category}&limit=20`;

    const response = await fetch(url);
    const {data = []} = await response.json();

    const  gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    alert(error);
  }
}