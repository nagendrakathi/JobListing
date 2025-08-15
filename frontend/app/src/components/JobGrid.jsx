import React from "react";
import JobCard from "./JobCard";

export default function JobGrid({ jobs = [], onApply }) {
  return (
    <div className="w-full mx-auto mt-12 px-12 bg-[#f9f9f9]">
      {jobs.length > 0 ? (
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4
            gap-7
            justify-items-center
          "
        >
          {jobs.map((job, idx) => (
            <JobCard
              key={job._id || idx}
              companyLogo={job.companyLogo}
              company={job.company}
              createdAt={job.createdAt}
              title={job.title}
              experience={job.experience}
              jobType={job.jobType}
              salaryRange={job.salaryRange}
              description={job.description}
              
              onApply={() => onApply && onApply(job)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10 text-lg">No jobs found</div>
      )}
    </div>
  );
}
