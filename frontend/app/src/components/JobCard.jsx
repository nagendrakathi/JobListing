import React from "react";

export default function JobCard({
  companyLogo = "/companyLogos/amazon.svg",
  timeAgo = "24h ago",
  title = "Software Engineer",
  experience = "2-3 years",
  jobType = "Onsite",
  salary = "12LPA",
  description = [
    "A user-friendly interface lets you browse stunning photos and videos",
    "Filter destinations based on interests and travel style, and create personalized",
  ],
  onApply = () => alert("Applied!"),
}) {
  return (
    <div className="bg-white shadow border border-[#f0f0f0] p-5 flex flex-col relative w-full h-full rounded-2xl">
      <div className="absolute top-6 right-5">
        <span className="bg-[#E1EEFF] text-[#1976D2] px-4 py-[6px] rounded-[13px] text-[14px] font-medium shadow text-center">
          {timeAgo}
        </span>
      </div>
      <div className="flex items-center mb-3">
        <div className="w-15 h-15 flex justify-center items-center bg-[linear-gradient(180deg,#FEFEFD_0%,#F1F1F1_100%)] rounded-[13px]">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-12 h-12 rounded-[10px] "
            style={{
              boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              color: "#5A5A5A",
            }}
          />
        </div>
      </div>
      <div className="text-[20px] font-bold text-[#202124] mb-[10px] mt-2">
        {title}
      </div>
      <div className="flex items-center text-[#535353] text-[16px] font-medium mb-3 gap-3">
        <span className=" w-full flex items-center gap-1">
          <img src="/jobCardIcons/exp.svg" alt="" />
          {experience}
        </span>
        <span className="flex w-full items-center gap-1">
          <img src="/jobCardIcons/jobLocation.svg" alt="" />
          {jobType}
        </span>
        <span className="flex  w-full items-center gap-1">
          <img src="/jobCardIcons/salary.svg" alt="" />
          {salary}
        </span>
      </div>
      <ul className="mb-3 pl-3 list-disc font-medium text-[14px] text-gray-600 leading-[1.32]">
        {description.map((d, idx) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={onApply}
          className="mt-auto w-full py-2 bg-[#00AAFF] text-white rounded-[9px] font-semibold text-[16px] shadow-sm"
          style={{ fontFamily: "inherit" }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
