import React from 'react';

export default function Detalis({ item }) {
  const img = (process.env.CONFIG.IMAGES_BASEPATH);
  console.log('Detalis--->>', item);
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={`${img}${item.imgUrl}`} alt="..." />
      <div>{item.bid}</div>
    </div>

  );
}
