import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import { useEffect, useRef } from 'react';

export default function Modal({ children, open, className = '', onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open])

  return (
    createPortal(
      <dialog ref={dialog} className={`${classes.modal} ${className}`} onClose={onClose}>
        {children}
      </dialog>,
      document.getElementById('modal'))
  );
}