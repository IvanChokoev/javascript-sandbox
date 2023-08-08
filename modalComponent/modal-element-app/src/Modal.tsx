import React, { useState, useEffect } from 'react';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        setDialogOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setDialogOpen(false);
        onClose();
    };

    const dialogStyles = {
        display: dialogOpen ? 'block' : 'none',
    };

    return (
        <>
            <dialog open style={dialogStyles} className="custom-modal">
                <div className="modal-content">
                    <button className="close-button" onClick={handleClose}>
                        Close
                    </button>
                    {children}
                </div>
            </dialog>
        </>
    );
};

export default Modal;