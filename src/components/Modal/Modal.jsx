import React, { Component } from 'react';
import { Overlay, Container } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.ModalKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.ModalKeydown);
  }

  ModalKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = event => {
    const { onClose } = this.props;
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  render() {
    const { largeImg } = this.props;
    return createPortal(
      <Overlay onClick={this.handleClick}>
        <Container>
          <img src={largeImg} alt="" />
        </Container>
      </Overlay>,
      modalRoot
    );
  }
}
