import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Image from 'next/image';
import iconoFoto from '../../assets/iconoFoto.png'; 
import icono1 from '../../assets/icono1.png'; 
import icono2 from '../../assets/icono2.png'; 
import styles from './GridContainer.module.css'; 
import { FaArrowRight } from 'react-icons/fa'; 

const GridContainer = () => {
   
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6"> 
                    <div className="mb-4 mt-10">
                        <h6 className={`text-primary ${styles['small-header']}`}>Core features</h6>
                        <h1 className={`text-dark ${styles['margin-top-title']}`}>Develop systematically <br/> with Comet.</h1>
                        <h5 className={styles['subt2']}>
                            <span className={styles['subt']}>Adaptable sections are ideal</span> for crafting <br/> versatile layouts
                        </h5>
                    </div>

                    <div className="row">
                        <div className="col-md-6"> 
                            <div className={`card mb-5 ${styles['borderless-card']}`}> 
                                <div className="card-body">
                                    <div className={styles['icon-container']}>
                                        <Image src={icono1} alt="Icono Verde" width={60} height={60} className={styles['icon-green']} />
                                    </div>
                                    <h5 className={`card-title ${styles['card-title']} text-start`}>System analyze your data</h5>
                                    <p className={`card-text ${styles['card-paragraph']} text-start`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <a 
                                        href="#" 
                                        className={`btn ${styles['no-background-button']} ${styles['card-learn-more']} text-start`} 
                                        style={{ display: 'inline-flex', alignItems: 'center' }} 
                                        onClick={handleShow} 
                                    >
                                        Learn More <FaArrowRight className={styles['arrow']} /> 
                                    </a>
                                    <div className={styles['learn-more-line']} style={{ width: '20px' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className={`card mb-5 ${styles['borderless-card']}`}>
                                <div className="card-body">
                                    <div className={styles['icon-container']}>
                                        <Image src={icono2} alt="Icono Violeta" width={60} height={60} className={styles['icon-violet']} />
                                    </div>
                                    <h5 className={`card-title ${styles['card-title']} text-start`}>Direct system management</h5>
                                    <p className={`card-text ${styles['card-paragraph']} text-start`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <a 
                                        href="#" 
                                        className={`btn ${styles['no-background-button']} ${styles['card-learn-more']} text-start`} 
                                        style={{ display: 'inline-flex', alignItems: 'center' }} 
                                        onClick={handleShow} 
                                    >
                                        Learn More <FaArrowRight className={styles['arrow']} /> 
                                    </a>
                                    <div className={styles['learn-more-line']} style={{ width: '20px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6"> 
                    <Image src={iconoFoto} alt="Imagen" width={400} height={480} className={styles['taller-image']} layout="responsive" />
                </div>
            </div>

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} role="dialog" aria-hidden={!showModal}>
                <div className="modal-dialog" role="document">
                    <div className={`modal-content ${styles['modal-content']}`}>
                        <div className={`modal-header ${styles['modal-header']}`}>
                            <h5 className={`modal-title ${styles['modal-title']}`}>More Information</h5>
                            <button type="button" className={`close ${styles['modal-close-button']}`} onClick={handleClose} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className={`modal-body ${styles['modal-body']}`}>
                            <p>Your additional information about the feature goes here.</p>
                        </div>
                        <div className={`modal-footer ${styles['modal-footer']}`}>
                            <button type="button" className={`btn ${styles['modal-button']}`} onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>

        </div>
    );
};

export default GridContainer;
