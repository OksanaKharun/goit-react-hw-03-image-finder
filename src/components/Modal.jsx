import React, { Component } from 'react';


class Modal extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

   handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = () => {
    this.props.onClose();
  };

  

  render() {
    const { image } = this.props;

    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img
            src={image}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Modal;