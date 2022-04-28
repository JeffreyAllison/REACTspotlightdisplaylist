import React from 'react';

export default function AmpsItem({ name, year, manufacturer, stats }) {
  return (
    <div className="amps-item">
      <p>Amp: {name}</p>
      <p>Year Introduced: {year}</p>
      <p>Brand: {manufacturer}</p>
      <p>Wattage: {stats.wattage}</p>
      <p>Power: {stats.type}</p>
      <p>Format: {stats.format}</p>
    </div>
  );
}
