import React, { useState, useEffect } from "react";
import { Box, Slider, Typography } from "@mui/material";

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
      salaryRange: `${salaryRange[0]}-${salaryRange[1]}`,
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salaryRange]);

  return (
    <div className="w-full flex justify-between items-center -mt-2 px-10 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center gap-4 bg-white border border-[#fcfcfc] px-6 py-3 rounded-[16px]  w-full">
        <div className="flex items-center gap-3 flex-1">
          <img src="/search.svg" alt="Search" className="w-5 h-5 opacity-70" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="border-none bg-transparent font font-medium outline-none placeholder-gray-500 w-full text-[16px]"
            value={filters.title}
            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          />
        </div>

        <div className="flex items-center gap-3 border-l-2 border-r-2 border-[#EAEAEA] px-4 py-6 h-8 flex-1">
          <img
            src="/location.svg"
            alt="Location"
            className="w-5 h-5 opacity-70"
          />
          <select
            className="bg-transparent outline-none text-[16px] font-medium cursor-pointer w-full text-[#686868]"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          >
            <option value="" hidden className="text-[#686868]">
              Preferred Location
            </option>
            <option value="Chennai" className="text-[#686868]">
              Chennai
            </option>
            <option value="Hyderabad" className="text-[#686868]">
              Hyderabad
            </option>
            <option value="Bangalore" className="text-[#686868]">
              Bangalore
            </option>
            <option value="Delhi" className="text-[#686868]">
              Delhi
            </option>
          </select>
        </div>

        <div className="flex items-center gap-3 border-r-2 border-[#EAEAEA] px-4 py-6 h-8 flex-1">
          <img src="/user.svg" alt="Job Type" className="w-5 h-5 opacity-70" />
          <select
            className="bg-transparent outline-none font-medium text-[16px] cursor-pointer w-full text-[#686868]"
            value={filters.jobType}
            onChange={(e) =>
              setFilters({ ...filters, jobType: e.target.value })
            }
          >
            <option value="" hidden>
              Job Type
            </option>
            <option value="FullTime" className="text-[#686868]">
              FullTime
            </option>
            <option value="PartTime" className="text-[#686868]">
              PartTime
            </option>
            <option value="Contract" className="text-[#686868]">
              Contract
            </option>
            <option value="Internship" className="text-[#686868]">
              Internship
            </option>
          </select>
        </div>

        <Box
          sx={{
            flex: 1,
            minWidth: 220,
            maxWidth: 280,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <div>
            <div className="w-full flex flex-row items-start justify-between">
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 0.5,
                  color: "#222222",
                  fontSize: "16px",
                }}
              >
                Salary Per Month
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "16px", color: "#222222" }}
                fontWeight={500}
              >
                ₹{(salaryRange[0] / 1000).toFixed(0)}K – ₹
                {(salaryRange[1] / 1000).toFixed(0)}K
              </Typography>
            </div>
          </div>

          <Slider
            value={salaryRange}
            onChange={(e, newValue) => setSalaryRange(newValue)}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${(value / 1000).toFixed(0)}K`}
            min={40000}
            max={100000}
            step={5000}
            sx={{
              color: "black",
              height: 2,
              width: "100%",
              "& .MuiSlider-thumb": {
                width: 12,
                height: 12,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                position: "absolute", 
                marginTop: "0px", 
                "&::after": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "4px",
                  height: "4px",
                  background: "#fff",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                },
              },

              "& .MuiSlider-rail": {
                opacity: 1,
                backgroundColor: "#e5e7eb",
              },
              "& .MuiSlider-track": {
                backgroundColor: "black",
              },
            }}
          />
        </Box>
      </div>
    </div>
  );
}
