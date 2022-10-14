import PropTypes from 'prop-types';

import { useGifs } from '../hooks/useGifs';
import { Gif } from './Gif';


export const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <span>...loading</span>}
      <div className='card-grid'>
          {gifs.map((gif) => (
            <Gif
              key={gif.id}
              {...gif}
            />
          ))}
        </div>
    </>
  )
}

GifGrid.prototypes = {
  category: PropTypes.string,
}
