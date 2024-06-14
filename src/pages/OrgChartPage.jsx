import React from 'react';

const OrgChartPage = () => {
  const pdfUrl = '/assets/organigrama.pdf';

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Organigrama PLAi</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="Organigrama PLAi"
        />
      </div>
    </div>
  );
};

export default OrgChartPage;
