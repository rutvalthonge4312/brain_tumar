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
      <div  className="col-md-12 homeInfo d-flex justify-content-center align-items-center">
        <div  data-aos="fade-right" className=' p-3'>
          <h2 className='my-4'>Advanced Detection, Empowering Life: Brain Tumor Diagnosis for a <strong>Digital</strong> User's</h2>
          <p className='my-4'>BrainCheck: Your All-in-One Mobile Solution for Early Detection and Health Insights, Empowering You to Take Control of Your Well-being.</p>
          <button onClick={gotToSignUp} className='btn btn-success rounded w-50 '>Sign Up Now!</button>
        </div>
        <div data-aos="fade-left" className=' p-3'>
          <img className='img-fluid' src={img} alt="Bank Image" />
        </div>
      </div>
      <div data-aos="fade-up" className="container my-3 row">
        <h2 className='text-center my-3'>Take your <strong>Diagnosis</strong> to the next level!</h2>
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

        <div  className="col-md-4 mb-4">
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