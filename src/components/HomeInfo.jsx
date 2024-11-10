import React from 'react'
import img from '../assetes/homePage.webp'
import brain_tumar from '../assetes/brain_tumar_detection.webp'
import report from '../assetes/report.png'
import dignostic from '../assetes/diagnostic.webp'
import { useNavigate } from 'react-router-dom'
function HomeInfo() {
  const navigate = useNavigate();
  const gotToSignUp = () => {
    navigate('/signup');
  }
  return (
    <div className="container">
      <div className="col-md-12 homeInfo d-flex justify-content-center align-items-center">
        <div className=' p-3'>
          <h2 className='my-4'>Digital banking Made for <strong>Digital</strong> User's</h2>
          <p className='my-4'>Gopay is an all-in-one mobile banking app chock full of all the tools, tips, and tricks you need to take control of your finances,</p>
          <button onClick={gotToSignUp} className='btn btn-success rounded w-50 '>Sign Up Now!</button>
        </div>
        <div className=' p-3'>
          <img className='img-fluid' src={img} alt="Bank Image" />
        </div>
      </div>
      <div className="container my-3 row">
        <h2 className='text-center my-3'>Take your <strong>Brain Tumor Detection</strong> to the next level!</h2>
        <div className="col-md-4 mb-4">
          <div className="card mx-auto rounded shadow p-3 border border-none" style={{ width: '25rem' }}>
            <img src={brain_tumar} className="card-img-top" alt='Brain Tumor Detection' />
            <h4>Brain Tumor Detection</h4>
            <p>Utilize advanced AI to identify and analyze brain tumor signs efficiently.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card mx-auto rounded shadow p-3 my-3 border border-none" style={{ width: '25rem' }}>
            <img src={dignostic} className="card-img-top" alt='Diagnosis Assistance' />
            <h4>Diagnosis Assistance</h4>
            <p>Get insights and support in diagnosing brain tumors with cutting-edge tools.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card mx-auto rounded shadow p-3 border border-none" style={{ width: '25rem' }}>
            <img src={report} className="card-img-top" alt='Detailed Reporting' />
            <h4>Detailed Reporting</h4>
            <p>Generate comprehensive reports to aid in treatment planning and patient care.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeInfo