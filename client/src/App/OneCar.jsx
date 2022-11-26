import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OneCar({ el }) {
  const [second, setSecond] = useState(el.finishTime); // 2014-08-05);
  const imgRef = useRef(process.env.CONFIG.IMAGES_BASEPATH);
  const navigate = useNavigate();
  const handler = (e) => {
    e.preventDefault();
    navigate(`/${el.id}`);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }
    }, 0.100);
    return () => clearInterval(timer);
  }, [second]);
  const maxDate = new Date(second);
  const isoDate = maxDate.toISOString().slice(11, 19); // 2014-08-05T19:42:51.429Z
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', cursor: 'pointer' }} onClick={handler}>
      <h3>{el.title}</h3>
      <img style={{ width: '350px', height: '250px' }} src={`${imgRef.current}${el.imgUrl}`} alt="..." />
      <div>
        {' '}
        до конца аукциона
        {' '}
        {isoDate}
      </div>
      {el.bid > 0 ? (
        <div>
          {' '}
          ставка:
          {' '}
          {el.bid}
        </div>
      ) : null}
    </div>
  );
}
