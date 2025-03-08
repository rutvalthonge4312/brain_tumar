import React from 'react';
import {
  CModal,
  CModalBody,
  CModalFooter,
  CButton,
} from '@coreui/react';
import imageTumor from '../../assetes/brainTumarActual.jpg';

function BrainTumorReport({ visiblePin, setVisiblePin }) {
  return (
    <div>
      <CModal
        visible={visiblePin}
        alignment="center"
        onClose={() => setVisiblePin(false)}
        aria-labelledby="BrainTumorReportModal"
      >
        <CModalBody>
          <div className="container text-center">
            <h4 className="mb-3 text-start">Brain Tumor Report</h4>
            <p className='text-start'><strong>Patient Name:</strong> John Doe</p>
            <p className='text-start'><strong>Date:</strong> 18th November 2024</p>
            <p className='text-start'>
              This report highlights the diagnostic findings based on the 
              imaging results. It includes a detailed analysis of the detected 
              brain tumor, its size, location, and potential impact on the 
              surrounding tissues.
            </p>
            <img 
              src={imageTumor} 
              className="img-fluid rounded my-3" 
              alt="Brain Tumor Report" 
            />
            <p className="text-muted">
              Note: Please consult your physician for a comprehensive 
              interpretation of the findings.
            </p>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisiblePin(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}

export default BrainTumorReport;
