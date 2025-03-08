import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

function Contact() {
    const navigate = useNavigate();
  
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="back-arrow position-absolute top-5 start-0 p-3">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        </div>
        <div className="container">
          
          <section data-aos="fade-up" className="mt-4">
          <h1>About <strong>BrainScan</strong></h1>
          <p className="lead">Empowering early detection and proactive care with advanced brain tumor scanning technology.</p>
          <div className="text-end">
            <img src="https://cdni.iconscout.com/illustration/free/thumb/free-medical-scan-2061897-1740019.png" alt="About Us" />
          </div>
          </section >
          
          <section data-aos="fade-up" className="mt-4">
            <h2><strong>Our</strong> Mission</h2>
            <p>
              At BrainScan, our mission is to improve early detection of brain tumors and provide reliable, accessible, and user-friendly scanning tools to support healthcare providers and patients alike.
              We believe that access to early and accurate diagnostics is key to better outcomes and strive to empower users with the latest in medical imaging technology.
            </p>
            <div className="text-start">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhby3zuqh4Ez-L_aU7W8Fs7j6G-TOJNUj20Q&s" alt="Mission" />
            </div>
          </section>

          <section data-aos="fade-up" className="mt-4">
            <h2>Our <strong>Vision</strong></h2>
            <p>
              We envision a future where cutting-edge AI and medical imaging make early brain tumor detection available to everyone, regardless of location or resources.
              Our goal is to bridge the gap in medical accessibility, ensuring that everyone can benefit from the latest advancements in health technology for early diagnosis.
            </p>
            <div className="text-end">
              <img src="https://roland.ac.in/site/wp-content/uploads/2019/04/Vision.png" alt="Vision" />
            </div>
          </section>
          
          <section data-aos="fade-up" className="mt-4">
            <h2><strong>Our</strong> Team</h2>
            <p>
              Our team is composed of medical professionals, AI specialists, and dedicated developers who are committed to advancing brain tumor detection technology.
              We work closely with healthcare providers and constantly update our algorithms to ensure accurate, reliable, and efficient detection.
            </p>
            <div className="text-start">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/our-team-4880594-4062783.png?f=webp" alt="Our Team" />
            </div>
          </section>
          
          <section data-aos="fade-up" className="mt-4">
            <h2>Contact <strong>Us</strong></h2>
            <p>
              Have questions or feedback? We would love to hear from you! Reach out to us at <a href="mailto:support@brainscan.com">support@brainscan.com</a>.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    );
}

export default Contact;
