import React, { useState } from "react";
import NavBar from "./NavBar";
import JobFilters from "./JobFilters";
const HeaderBar = () => {
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    jobType: "",
    salaryRange: "50000-80000",
  });
  return (
    <>
      <div className="w-full h-[200px] flex flex-col items-center bg-white">
        <div className="w-full flex justify-center">
          <NavBar />
        </div>
        <JobFilters filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
};

export default HeaderBar;
