// components/Footer.js
import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <footer className={styles.footer}>
            <div className={styles.iconContainer}>
                <a href="https://www.linkedin.com/in/santiago-alegre-67b288193" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className={styles.icon} />
                </a>
                <a href="https://github.com/alegresantisp" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className={styles.icon} />
                </a>
            </div>

            <button className={styles.modalButton} onClick={handleShow}>
                Mi entrega
            </button>

            {showModal && (
                <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} role="dialog" aria-hidden={!showModal}>
                    <div className="modal-dialog" role="document">
                        <div className={`modal-content ${styles.modalContent}`}>
                            <div className={`modal-header ${styles.modalHeader}`}>
                                <h5 className={`modal-title ${styles.modalTitle}`}>Detalles de la entrega</h5>
                                <button type="button" className={`close ${styles.modalCloseButton}`} onClick={handleClose} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className={`modal-body ${styles.modalBody}`}>
                                <p>Mi nombre es Santiago Alegre. Esta entrega incluye un diseño de interfaz de usuario usando el framework Next.js, React y Bootstrap. Utilicé React Icons para los iconos y un modal estilizado para la información adicional.</p>
                            </div>
                            <div className={`modal-footer ${styles.modalFooter}`}>
                                <button type="button" className={`btn ${styles.modalButton}`} onClick={handleClose}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
        </footer>
    );
};

export default Footer;
