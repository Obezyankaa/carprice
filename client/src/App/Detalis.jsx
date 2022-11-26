/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Detalis({ item }) {
  const img = (process.env.CONFIG.IMAGES_BASEPATH);
  console.log('Detalis--->>', item);
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={`${img}${item.imgUrl}`} alt="..." />
      <div>
        <strong>последняя ставка на лот</strong>
        {' '}
        {item.bid}
      </div>
    </div>

  );
}
