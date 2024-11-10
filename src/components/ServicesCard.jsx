import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import reports from '../assetes/report.png'
import brainTest from '../assetes/brain_tumar_detection.webp'
import consult from '../assetes/consult.webp'
import update from '../assetes/update.png'
import CreditMoney from './modals/creditMoney';
import { useNavigate } from 'react-router-dom';


const cardData = [
    {
        img: reports,
        title: "View Previous Reports",
        buttonText: "View Reports",
        stateChangeVariable: "reports",
        text: "Access past diagnostic reports quickly and securely. Keep track of historical data for better analysis.",
    },
    {
        img: brainTest,
        title: "Brain Health Test",
        buttonText: "Start Test",
        stateChangeVariable: "brainTest",
        text: "Take a quick brain health assessment to monitor potential signs of issues. Gain insights in minutes.",
    },
    {
        img: consult,
        title: "Consult with Experts",
        buttonText: "Ask Questions",
        stateChangeVariable: "consult",
        text: "Connect with medical experts for guidance and support. Get answers to your questions about brain health.",
    },
    {
        img: update,
        title: "Update Your Profile",
        buttonText: "Update",
        stateChangeVariable: "update",
        text: "Keep your profile and health information up to date for personalized assessments and accurate tracking.",
    }
];


function ServicesCard() {
    const [index, setIndex] = useState(0);
    const [visibleTrasaction, setVisibleTrasaction] = useState(false)
    const handlePrev = () => {
        const newIndex = index === 0 ? cardData.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = index === cardData.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    };

    const visibleCards = [
        cardData[(index - 1 + cardData.length) % cardData.length],
        cardData[index],
        cardData[(index + 1) % cardData.length],
    ];
    const navigate=useNavigate();

    return (
        <div className="carousel-container  mt-3 p-4" >
            <CreditMoney visiblePin={visibleTrasaction} setVisiblePin={setVisibleTrasaction} />
            <button className="carousel-control prev" onClick={handlePrev}>‹</button>
            <div className="carousel-inner d-flex justify-content-center align-items-center p-5  p-5">
                {visibleCards.map((card, i) => (
                    <div key={i} className={`card-container ${i === 1 ? 'active' : ''}`}>
                        <div className="card rounded shadow p-3 border border-none" style={{ width: '23rem' }}>
                            <img src={card.img} className="card-img-top" alt={card.title} />
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                            <div className="container">
                                <button className='btn btn-success w-75 '
                                onClick={()=>{
                                    if(card.stateChangeVariable=='transaction'){
                                        setVisibleTrasaction(true);
                                    }
                                    else if(card.stateChangeVariable=='update'){
                                        navigate('/update-profile');
                                    }
                                    else if(card.stateChangeVariable=='brainTest'){
                                        navigate('/upload-image')
                                    }
                                }}
                                >{card.buttonText}</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <button className="carousel-control next" onClick={handleNext}>›</button>
        </div>
    );
}

export default ServicesCard;