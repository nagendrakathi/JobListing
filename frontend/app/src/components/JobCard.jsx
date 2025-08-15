import React from "react";
import { timeAgoString , formatSalaryRange} from "../utils/format";
// Utility to format the salary range string "110000-140000" → "₹110K - ₹140K"


// Utility to calculate time ago string from createdAt


export default function JobCard({
  company,
  companyLogo = "/companyLogos/default.svg",
  createdAt,
  title = "Software Engineer",
  experience,
  jobType = "",
  salaryRange = "",
  description = "",
  onApply = () => alert("Applied!"),
}) {
  if (jobType === "FullTime") {
    if (title.includes("Senior")) {
      experience = "3-5yr Exp";
    }
    experience = "1-3yr Exp";
  } else if (jobType === "PartTime") {
    experience = "0-1yr Exp";
  } else if (jobType === "Internship") {
    experience = "Fresher";
  }
  
  if (company) {
    companyLogo = `/companyLogos/${company.toLowerCase()}.svg`;
  }

  const maxLines = 2;
  let descriptionLines = description ? description.split("\n") : [];

  if (descriptionLines.length > maxLines) {
    descriptionLines = descriptionLines.slice(0, maxLines);

    const lastLine = descriptionLines[maxLines - 1];
    const maxLength = 90;

    descriptionLines[maxLines - 1] =
      lastLine.length > maxLength
        ? lastLine.slice(0, maxLength) + "..."
        : lastLine + "...";
  }

  return (
    <div className="bg-white shadow border border-[#f0f0f0] p-5 flex flex-col relative w-full h-full rounded-2xl">
      <div className="absolute top-6 right-5">
        <span className="bg-[#E1EEFF] text-[#1976D2] px-4 py-[6px] rounded-[13px] text-[14px] font-medium shadow text-center">
          {timeAgoString(createdAt)}
        </span>
      </div>
      <div className="flex items-center mb-3">
        <div className="w-15 h-15 flex justify-center items-center bg-[linear-gradient(180deg,#FEFEFD_0%,#F1F1F1_100%)] rounded-[13px]">
          <img
            src={companyLogo || `/logo.svg`}
            alt="Company Logo"
            className="w-12 h-12 rounded-[25px]"
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
        {experience && (
          <span className="w-full flex items-center gap-1">
            <img src="/jobCardIcons/exp.svg" alt="" />
            {experience}
          </span>
        )}
        {jobType && (
          <span className="flex w-full items-center gap-1">
            <img src="/jobCardIcons/jobLocation.svg" alt="" />
            {jobType}
          </span>
        )}
        {salaryRange && (
          <span className="flex w-full items-center gap-1">
            <img src="/jobCardIcons/salary.svg" alt="" />
            {formatSalaryRange(salaryRange)}
          </span>
        )}
      </div>
      <ul className="mb-1 pl-3 list-disc font-medium text-[14px] text-gray-600 leading-[1.32]">
        {descriptionLines.map((line, idx) =>
          line.trim() ? <li key={idx}>{line}</li> : null
        )}
      </ul>

      <div className="w-full flex items-center justify-center mt-auto">
        <button
          onClick={onApply}
          className="mt-auto mb-3 w-full py-2 bg-[#00AAFF] text-white rounded-[9px] font-semibold text-[16px] shadow-sm cursor-pointer hover:bg-[#1cb3ff] transition-colors duration-200"
          style={{ fontFamily: "inherit" }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
