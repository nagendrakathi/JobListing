import React from "react";
import JobCard from "./JobCard"; // the JobCard component we created earlier

export default function JobGrid({ jobs = [], onApply }) {
  return (
    <div className="w-full mx-auto mt-12 px-12 bg-[#f9f9f9]">
      {/* {jobs.length > 0 ? ( */}
      <div
        className="grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4
            gap-4
            justify-items-center
          "
      >
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
      </div>
      {/* {jobs.map((job, idx) => (
            <JobCard key={idx} job={job} onApply={() => onApply(job)} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10 text-lg">
          No jobs found
        </div>
      )} */}
    </div>
  );
}
