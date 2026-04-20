import ReactDOM from 'react-dom';
import css from './Modal.module.css';

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div className={css.overlay} onClick={onClose}>
            <div className={css.content} onClick={(e) => e.stopPropagation()}>
                <button className={css.closeBtn} onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;