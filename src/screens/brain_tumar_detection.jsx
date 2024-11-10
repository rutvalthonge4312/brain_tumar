import React from 'react';
import UserNavbar from '../components/UserNavbar';
import ImageForm from '../assetes/widgets/imagePicker';

function BrainTumorDetection() {
    function handleImageSubmit() {
        console.log("Upload Handler");
    }

    return (
        <div>
            <UserNavbar />
            <div className="container mt-5">
                <div className="text-center mb-4">
                    <h2>Welcome to the Brain Tumor Detection System</h2>
                    <p>Please upload a brain scan image to proceed with the analysis.</p>
                </div>

                <div className="card mx-auto shadow p-4" style={{ maxWidth: '600px' }}>
                    <h4 className="text-center mb-3">Image Upload Instructions</h4>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">Upload a grayscale MRI scan image.</li>
                        <li className="list-group-item">Accepted formats: JPEG, PNG.</li>
                        <li className="list-group-item">Image resolution should be at least 256x256 pixels for accurate results.</li>
                    </ul>

                    <div className="text-center">
                        <ImageForm onSubmit={handleImageSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrainTumorDetection;
