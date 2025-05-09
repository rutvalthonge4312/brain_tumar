import React, { useEffect, useState } from 'react';
import ReportCard from '../components/reportCard';
import UserNavbar from '../components/UserNavbar';
import api from '../api/api';
import { toast } from 'react-toastify';

function ViewReportPage() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    api.get("/record/get/")
      .then((response) => {
        setReportData(response.data);
        // Remove this if response.data is an array and not an object with message
        // toast.success(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Fetch Reports failed");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <UserNavbar />
      <div className="container">
        <h2>Previous Reports:</h2>
        <div className="row">
          {reportData.length > 0 ? (
            reportData.map((report) => (
              <div className="col-md-4" key={report.id}>
                <ReportCard report={report} />
              </div>
            ))
          ) : (
            <p>No reports found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewReportPage;
