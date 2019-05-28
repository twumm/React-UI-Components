import React from 'react';
import './Header.css';

function ImageThumbnail({ imageSrc }) {
  return (
    <div className="image-thumbnail-div">
      <img className="image-thumbnail" src={imageSrc} alt="Lambda logo" />
    </div>
  );
}

export default ImageThumbnail;
