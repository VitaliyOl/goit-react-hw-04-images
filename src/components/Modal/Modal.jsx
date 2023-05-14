import { useEffect } from 'react';
import { Overlay, Container } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImg, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', ModalKeydown);

    return () => {
      window.removeEventListener('keydown', ModalKeydown);
    };
  });

  const ModalKeydown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleClick}>
      <Container>
        <img src={largeImg} alt="" />
      </Container>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.ModalKeydown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.ModalKeydown);
//   }

//   ModalKeydown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClick = event => {
//     const { onClose } = this.props;
//     if (event.currentTarget === event.target) {
//       onClose();
//     }
//   };
//   render() {
//     const { largeImg } = this.props;
//     return createPortal(
//       <Overlay onClick={this.handleClick}>
//         <Container>
//           <img src={largeImg} alt="" />
//         </Container>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }
