import React from 'react';
import AlbumsItem from './AlbumsItem.js';

export default function AlbumsList({ albums }) {
  return (
    <div className="albums-list">
      {albums.map((album) => (
        <AlbumsItem key={album.title} {...album} />
      ))}
    </div>
  );
}
