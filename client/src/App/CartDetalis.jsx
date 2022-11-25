import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Detalis from './Detalis';

export default function CartDetalis() {
  const { id } = useParams();
  const { car } = useSelector((state) => state);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const test = car.filter((el) => el.id === Number(id));
    setCart(test);
  }, []);
  console.log('CartDetali--->>', cart);

  return (
    <div>
      {cart?.map((item) => (
        <Detalis
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
