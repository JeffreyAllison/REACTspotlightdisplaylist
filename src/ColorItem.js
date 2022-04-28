
import React from 'react';

export default function ColorItem({ color }) {
  return (
    <div className='color-item' style={{ background: color }}>
      <p>{color}</p>
    </div>
  );
}
