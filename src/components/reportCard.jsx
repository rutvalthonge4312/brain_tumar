import React, { useState } from 'react';
import BrainTumorReport from './modals/brainTumarReport';

function ReportCard({ report }) {
  const [visible, setVisible] = useState(false);
  // alert(report.)
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="card card service-card rounded shadow p-3 m-3">
      <BrainTumorReport visiblePin={visible} setVisiblePin={setVisible} report={report} />
      <h4 className="text-start">Report #{report.id}</h4>
      <p className="text-start">Name: {report.patent_name}</p>
      <p className="text-start">Date: {formatDate(report.created_at)}</p>
      <div className="container text-end">
        <button
          className="btn btn-success"
          onClick={() => setVisible(true)}
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default ReportCard;
