
import React from 'react';
import CatsItem from './CatsItem.js';

export default function CatsList({ cats }) {
  return (
    <div className='cats-list'>
      {
        cats.map((cat) =>
          <CatsItem key={cat.name} cat={cat} />
        )
      }
    </div>
  );
}
