import React, { useState, useEffect } from "react";
import { SearchInput } from "./FilterComponents/SearchInput";
import { DropdownFilter } from "./FilterComponents/DropdownFilter";
import { SalarySlider } from "./FilterComponents/SalarySlider";

export default function JobFilters({ filters, setFilters, setHasInteracted }) {
  const [salaryRange, setSalaryRange] = useState(
     [30000, 500000] 
  );

  useEffect(() => {
    if (!filters) return;
    setFilters((prev) => ({
      ...prev,
      salaryRange: `${salaryRange[0]}-${salaryRange[1]}`, 
    }));
    
    if (!filters.hasInteracted) setHasInteracted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salaryRange]);

  
  const handleFirstInteract = () => {
    if (!filters.hasInteracted) setHasInteracted(true);
  };

  return (
    <div className="w-full flex justify-between items-center mt-2 px-10 mb-5">
      <SearchInput
        filters={filters}
        setFilters={(updater) => {
          handleFirstInteract();
          setFilters(updater);
        }}
      />
      <DropdownFilter
        label="Preferred Location"
        name="location"
        value={filters.location}
        setFilters={(updater) => {
          handleFirstInteract();
          setFilters(updater);
        }}
        filters={filters}
        options={[
          { value: "Chennai", label: "Chennai" },
          { value: "Hyderabad", label: "Hyderabad" },
          { value: "Bangalore", label: "Bangalore" },
          { value: "Delhi", label: "Delhi" },
        ]}
        borderClasses="border-l-2 border-r-2 border-[#EAEAEA] py-6"
      />

      <DropdownFilter
        label="Job Type"
        name="jobType"
        value={filters.jobType}
        setFilters={(updater) => {
          handleFirstInteract();
          setFilters(updater);
        }}
        filters={filters}
        options={[
          { value: "FullTime", label: "FullTime" },
          { value: "PartTime", label: "PartTime" },
          { value: "Contract", label: "Contract" },
          { value: "Internship", label: "Internship" },
        ]}
        borderClasses="border-r-2 border-[#EAEAEA]"
      />

      <SalarySlider
        salaryRange={salaryRange}
        setSalaryRange={(value) => {
          handleFirstInteract();
          setSalaryRange(value);
        }}
      />
    </div>
  );
}
