import React from 'react';

export default function AlbumsItem({ title, artist, year, genres }) {
  return (
    <div className="albums-item">
      <p>Album:{title}</p>
      <p>By: {artist}</p>
      <p>Released: {year}</p>
      <p>
        {genres.map((genre) => (
          <ul key={genre}>{genre}</ul>
        ))}
      </p>
    </div>
  );
}
