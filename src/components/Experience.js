import React from 'react';

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className="experience-item">
        <h2>Job Title - Company Name</h2>
        <p>Start Date - End Date</p>
        <p>Description of your responsibilities and achievements in this role.</p>
      </div>
      <div className="experience-item">
        <h2>Another Job Title - Another Company</h2>
        <p>Start Date - End Date</p>
        <p>More details about your responsibilities and accomplishments in this position.</p>
      </div>
      {/* Add more experience items as needed */}
    </div>
  );
}

export default Experience;
