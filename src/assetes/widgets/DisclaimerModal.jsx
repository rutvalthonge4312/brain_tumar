import React from 'react';
import {
    CModal,
    CModalBody,
    CModalFooter,
    CButton,
} from '@coreui/react';
import DiscliamerCard from '../../components/DiscliamerCard';

function DisclaimerModal({ visible, setVisible }) {
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
                    <DiscliamerCard/>
                </div>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                    Agree
                </CButton>
            </CModalFooter>
        </CModal>
    </div>
    );
}

export default DisclaimerModal;
