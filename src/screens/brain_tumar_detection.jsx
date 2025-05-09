import React, { useState, useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';
import ImageForm from '../assetes/widgets/imagePicker';
import brainImage from '../assetes/brainDetection.webp';
import DisclaimerModal from '../assetes/widgets/DisclaimerModal';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { toast, ToastContainer } from 'react-toastify';


function BrainTumorDetection() {
    const navigate = useNavigate();
    const [selectedImages, setSelectedImages] = useState([]);
    const [visible, setVisible] = useState(true);
    const [loading, setLoading] = useState(false);
    const [formFields, setFormFields] = useState({
        patent_name: '',
        patent_number: '',
        patent_description: '',
        brain_tumar: false,
        brain_tumar_type: '',
      });

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

    function onImagesSelected({ imageData }) {
        setSelectedImages(imageData);
    }
    const handleImageSubmit = () => {
        if (selectedImages.length === 0) {
          toast.error("Please select at least one image.");
          return;
        }
    
        const formData = new FormData();
        formData.append("patent_name", "Some Patent"); // Replace with dynamic values
        formData.append("patent_number", "12345");
        formData.append("patent_description", "Description here...");
        formData.append("brain_tumar", false);
        formData.append("brain_tumar_type", "None");
        formData.append("date", Date.now());
    
        formData.append("image", selectedImages[0]); // Only sending first image
    
        setLoading(true);
    
        api.post("/record/create/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((response) => {
            setSelectedImages([]);
            // alert(response.data.message)
            toast.success(response.data.message);
          })
          .catch((error) => {
            toast.error(error.response?.data?.message || "Upload failed");
          })
          .finally(() => {
            setLoading(false);
          });
    };
   
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerAnimation}
            className="brain-detection-container"
        >
            <UserNavbar />
            <DisclaimerModal visible={visible} setVisible={setVisible} />
            <ToastContainer />
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

                        <div className="text-center border border-black p-3 rounded">
                            <ImageForm  onSubmit={onImagesSelected}/>

                            <motion.button
                                className="btn btn-success mt-3"
                                variants={buttonAnimation}
                                initial="initial"
                                animate=""
                                onClick={handleImageSubmit}
                            >
                                {loading ? (
                                    <div className="container d-flex justify-content-center align-items-center">
                                        <div className="spinner-border text-light" role="status">
                                            <span className="visually-hidden">Uploading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    'Upload For Detection'
                                )}
                            </motion.button>
                        </div>
                    </div>

                    <motion.div
                        className="container col-md-6"
                        variants={imageAnimation}
                        initial="initial"
                        animate="animate"
                        // onClick={handleSubmit}
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
