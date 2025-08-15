import React, { useState, useEffect } from "react";
import { SearchInput } from "./FilterComponents/SearchInput";
import { DropdownFilter } from "./FilterComponents/DropdownFilter";
import { SalarySlider } from "./FilterComponents/SalarySlider";
export default function JobFilters({ filters, setFilters }) {
  const [salaryRange, setSalaryRange] = useState(
    filters && filters.salaryRange
      ? filters.salaryRange.split("-").map((s) => parseInt(s.trim()))
      : [50000, 80000]
  );

  useEffect(() => {
    if (!filters) return;
    setFilters({
      ...filters,
      salaryRange: `${salaryRange[0]}-${salaryRange}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salaryRange]);

  return (
    <div className="w-full flex justify-between items-center mt-2 px-10">
      <SearchInput filters={filters} setFilters={setFilters} />
      <DropdownFilter
        label="Preferred Location"
        name="location"
        value={filters.location}
        setFilters={setFilters}
        filters={filters}
        options={[
          { value: "Chennai", label: "Chennai" },
          { value: "Hyderabad", label: "Hyderabad" },
          { value: "Bangalore", label: "Bangalore" },
          { value: "Delhi", label: "Delhi" },
        ]}
        borderClasses="border-l-2 border-r-2 border-[#EAEAEA]"
      />

      <DropdownFilter
        label="Job Type"
        name="jobType"
        value={filters.jobType}
        setFilters={setFilters}
        filters={filters}
        options={[
          { value: "FullTime", label: "FullTime" },
          { value: "PartTime", label: "PartTime" },
          { value: "Contract", label: "Contract" },
          { value: "Internship", label: "Internship" },
        ]}
        borderClasses="border-r-2 border-[#EAEAEA]"
      />

      <SalarySlider salaryRange={salaryRange} setSalaryRange={setSalaryRange} />
    </div>
  );
}
