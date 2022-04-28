
import React from 'react';
import AmpItem from './AmpsItem.js';

export default function AmpsList({ amps }) {
  return (
    <div className='amps-list'>
      {amps.map((amp) =>
        <AmpItem key={amp.name} {...amp} />
      )
      }
    </div>
  );
}
