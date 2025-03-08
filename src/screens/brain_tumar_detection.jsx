import React, { useState, useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';
import ImageForm from '../assetes/widgets/imagePicker';
import brainImage from '../assetes/brainDetection.webp';
import DisclaimerModal from '../assetes/widgets/DisclaimerModal';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function BrainTumorDetection() {
    const navigate = useNavigate();

    const [visible, setVisible] = useState(true);

    const containerAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const buttonAnimation = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.1, 1],
            transition: { repeat: Infinity, duration: 1.5 },
        },
    };

    const imageAnimation = {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
    };

    useEffect(() => {
        setVisible(true); // Show modal on initial load
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerAnimation}
            className="brain-detection-container"
        >
            <UserNavbar />
            <DisclaimerModal visible={visible} setVisible={setVisible} />
            <div className="back-arrow position-absolute top-5 start-0 p-3">
                <FontAwesomeIcon icon={faArrowLeft} size="2x" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
            </div>
            <motion.div
                className="container mt-5"
                initial="hidden"
                animate="visible"
                variants={containerAnimation}
            >
                <div className="text-center mb-4">
                    <h2>
                        Welcome to the Brain Tumor <strong>Detection</strong> System
                    </h2>
                    <p>Please upload a brain scan image to proceed with the analysis.</p>
                </div>

                <div className="d-flex flex-wrap p-4 mx-auto image-upload-section">
                    <div className="container col-md-6">
                        <h4 className="text-center mb-3">
                            Image Upload <strong>Instructions</strong>
                        </h4>
                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item">
                                Upload a grayscale MRI scan image.
                            </li>
                            <li className="list-group-item">Accepted formats: JPEG, PNG.</li>
                            <li className="list-group-item">
                                Image resolution should be at least 256x256 pixels for accurate results.
                            </li>
                        </ul>

                        <div className="text-center">
                            <ImageForm />

                            <motion.button
                                className="btn btn-success mt-3"
                                variants={buttonAnimation}
                                initial="initial"
                                animate=""
                            >
                                Upload For Detection
                            </motion.button>
                        </div>
                    </div>

                    <motion.div
                        className="container col-md-6"
                        variants={imageAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <img
                            src={brainImage}
                            className="img img-fluid"
                            alt="Brain Tumor Detection Illustration"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default BrainTumorDetection;
