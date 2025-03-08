import React from 'react'
import ReportCard from '../components/reportCard'
import UserNavbar from '../components/UserNavbar'

function ViewReportPage() {
  return (
    <div className=''>
      <UserNavbar/>
       <div className="container">
       <h2>Previous Reports:</h2> 
       <div className="container ">
          <ReportCard/>
          <ReportCard/>
          <ReportCard/>
          <ReportCard/>
          <ReportCard/>
       </div>
       </div>
    </div>
  )
}

export default ViewReportPage