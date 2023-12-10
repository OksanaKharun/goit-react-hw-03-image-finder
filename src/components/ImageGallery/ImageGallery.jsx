import React from 'react';


const ImageGallery = ({images, openModal }) => {
  return (

  <ul className="ImageGallery">
      {images.map((image) => (
        <li key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>

);
};

export default ImageGallery;