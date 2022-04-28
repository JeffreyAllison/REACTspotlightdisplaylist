
import React from 'react';

export default function CatsItem({ cat }) {
  return (
    <div className='cats-item'>
      <p>Cat name: {cat.name}</p>
      <p>age: {cat.age}</p>
      <p>coat color: {cat.color}</p>
    </div>
  );
}
