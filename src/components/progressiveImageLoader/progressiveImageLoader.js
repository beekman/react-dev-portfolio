import React from 'react';
import ReactDOM from 'react-dom';

export function reducer(currentSrc, action) {
  if(action.type === 'main image loaded') {
    return action.src;
  }
  if(!currentSrc) {
    return action.src;
  }
  return currentSrc;
}
export default function useProgressiveImage({ src, fallbackSrc }) {
  const [currentSrc, dispatch] = React.useReducer(reducer);
  React.useEffect(() => {
    const mainImage = new Image();
    const fallbackImage = new Image();

    mainImage.onload = () => {
      dispatch({ type: 'main image loaded', src });
    };
    fallbackImage.onload = () => {
      dispatch({ type: 'fallback image loaded', src: fallbackSrc });
    };

    mainImage.src = src;
    fallbackImage.src = fallbackSrc;
  }, [src, fallbackSrc]);

  return currentSrc;
}
