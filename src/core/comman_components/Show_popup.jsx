import React from 'react';
import {
    CModal,
    CModalBody,
    CModalFooter,
    CButton,
} from '@coreui/react';

function ShowPopUp({ visible, setVisible,message }) {
    return (
        <div >
        <CModal
            visible={visible}
            alignment="center"
            onClose={() => setVisible(false)}
            aria-labelledby="LiveDemoExampleLabel"
        >
            <CModalBody>
                <div className="container">
                    <p>{message}</p>
                </div>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                    Ok
                </CButton>
            </CModalFooter>
        </CModal>
    </div>
    );
}

export default ShowPopUp;
