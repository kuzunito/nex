/* eslint-disable @next/next/no-img-element */
import React from "react";

const EmploymentHistoryCard = () => {
  const employmentHistory = [
    {
      company: "Harbor Star Shipping Services Inc",
      position: "Engineering Assistant",
      duration: "Aug 2020 - Aug 2021 · 1 yr 1 mo",
      location: "Philippines",
      logo: "https://via.placeholder.com/50", // Replace with actual logo URL
    },
    {
      company: "Concentrix",
      position: "Advisor I",
      duration: "Nov 2021 - Nov 2022 · 1 yr 1 mo",
      location: "",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEI2aF8Itqj0g/company-logo_100_100/company-logo_100_100/0/1713811406614/concentrix_logo?e=1736380800&v=beta&t=kB-sQfGo4i0Lwp3iQkxG6PZakDmsx0cr-l71XGqAhCM", // Replace with actual logo URL
    },
    {
      company: "RCG Global Services",
      position: "Consultant (Fullstack Java Developer)",
      duration: "May 2022 - Jun 2024 · 2 yrs 2 mos",
      location: "Philippines",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQG_lEVByz0yww/company-logo_100_100/company-logo_100_100/0/1704313167313/rcg_global_services_logo?e=1736380800&v=beta&t=0mEClUrTal1cySqmLWJP0YsGCNccPBeAcpdUNJQRmYM", // Replace with actual logo URL
    },
    {
      company: "Collabera Digital",
      position: "Fullstack Java Developer",
      duration: "Jun 2024 - Present · 5 mos",
      location: "Philippines · On-site",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQET23aAKcdDOA/company-logo_100_100/company-logo_100_100/0/1719845746532/collabera_digital_logo?e=1736380800&v=beta&t=jGKjWokilBdar35HZTkVT6m-3MVizAGO_ebElvQpJhE", // Replace with actual logo URL
    },
  ];

  return (
    <div className="rounded-lg overflow-hidden shadow-lg justify-start bg-white p-6 border border-gray-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 ">
        Employment History
      </h2>
      {employmentHistory.map((job, index) => (
        <div key={index} className="mb-4 flex items-start">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {job.position}
            </h3>
            <p className="text-sm text-gray-600">{job.company}</p>
            <p className="text-xs text-gray-500">
              {job.duration} {job.location && `· ${job.location}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmploymentHistoryCard;
