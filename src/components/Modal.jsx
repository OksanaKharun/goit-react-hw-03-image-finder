import React from 'react';

const Modal = ({ largeImageURL, onClose }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};


export default Modal;