import React from 'react';
import {
  CModal,
  CModalBody,
  CModalFooter,
  CButton,
} from '@coreui/react';

function BrainTumorReport({ visiblePin, setVisiblePin,report }) {
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
            <p className='text-start'><strong>Patient Name:</strong> {report.patent_name}</p>
            <p className='text-start'><strong>Date:</strong>{report.created_at}</p>
            <p className='text-start'>

              <strong>Description:</strong>{report.patent_description}
            </p>
            <div className='border border'> 
            <img 
                src={report.image}
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'contain',
                }} 
                className="img img-fluid rounded my-3 w-50" 
                alt="Brain Tumor Report" 
              />
            </div>
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
