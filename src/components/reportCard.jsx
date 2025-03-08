import React, { useState } from 'react'
import BrainTumorReport from './modals/brainTumarReport'

function ReportCard() {
    const [visible,setVisible]=useState(false);

  return (
    <div className='card  card service-card rounded shadow p-3 m-3'>
        <BrainTumorReport visiblePin={visible} setVisiblePin={setVisible}/>
        <h4 className='text-start'>Report-1</h4>
        <p className='text-start'>Name:  Bharat Thonge</p>
        <p className='text-start'>Date : 14th May 2024</p>
        <div className="container text-end">
        <button className='text-start btn btn-success' onClick={()=>{
            setVisible(true)
        }}>View More</button>
        </div>
    </div>
  )
}

export default ReportCard