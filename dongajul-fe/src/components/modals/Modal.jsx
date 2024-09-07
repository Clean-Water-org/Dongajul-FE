import { useEffect } from 'react';
import './Modal.scss';

const Modal = ({ content: Content, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onClickOutside = (e) => {
    if (e.target.className === 'modal-background') {
      onClose();
    }
  };

  return (
    <div className='modal'>
      <div className='modal-background' onClick={onClickOutside} />
      <div className='modal-container'>
        <Content onClose={onClose}></Content>
      </div>
    </div>
  );
};

export default Modal;
