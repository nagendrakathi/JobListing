import React from "react";
import NavBar from "./NavBar";
import JobFilters from "./JobFilters";

const HeaderBar = ({ onJobCreated, filters, setFilters, setHasInteracted }) => {
  return (
    <div className="w-full h-[200px] flex flex-col items-center bg-white">
      <div className="w-full flex justify-center">
        <NavBar onJobCreated={onJobCreated} />
      </div>
      <JobFilters
        filters={filters}
        setFilters={setFilters}
        setHasInteracted={setHasInteracted}
      />
    </div>
  );
};

export default HeaderBar;
