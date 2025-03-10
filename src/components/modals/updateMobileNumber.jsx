import React, { useState } from 'react'
import {
    CModal,
    CModalBody,
    CModalFooter,
    CButton,
} from '@coreui/react';
import getHeaders from '../../api/header';
import api from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import { PushSpinner } from 'react-spinners-kit';

function UpdateMobileNumber({ visible, setVisible }) {
    const [oldMobile, setOldMobile] = useState('')
    const [newMobile, setNewMobile] = useState('')
    const [loading, setLoading] = useState(false)
    const submitForm = () => {
        setLoading(true);
        const apiUrl = 'user/update_mobile/';
        api.post(
            apiUrl,
            {
                oldMobile: oldMobile,
                newMobile: newMobile,
                getHeaders,
            }
        ).
            then((response) => {
                toast.success(response.data.message);
            }).
            catch((error) => {
                console.log(error)
                toast.error(error.response.data.message);
            }).finally(() => {
                setLoading(false);
                setVisible(false);
            })
    }
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
                        <div className="form-floating  mb-3">
                            <input type="text" className="form-control" id="fName" placeholder="M-pin"
                                onChange={(e) =>
                                    setOldMobile(e.target.value.trim())
                                }
                            />
                            <label htmlFor="fName">Old Mobile Number</label>
                        </div>
                        <div className="form-floating  mb-3">
                            <input type="text" className="form-control" id="fName" placeholder="M-pin"
                                onChange={(e) =>
                                    setNewMobile(e.target.value.trim())
                                }
                            />
                            <label htmlFor="fName">New Mobile Number</label>
                        </div>
                        <div className="text-center mt-4">
                            <button id="signupButton" className="btn btn-primary w-75 text-center" onClick={submitForm}>
                                {
                                    loading ? (
                                        <div className="container  d-flex justify-content-center align-items-center">
                                            <PushSpinner size={30} color="white" />
                                        </div>
                                    ) : 'Update Mobile'
                                }
                            </button>
                        </div>
                    </div>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>
        </div>
    )
}

export default UpdateMobileNumber