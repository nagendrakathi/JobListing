import React, { useState } from "react";

export default function CreateJobForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    applicationDeadline: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Create Job Opening
      </h2>
      <div className="grid grid-cols-2 gap-6 mb-5">
        <div>
          <label className="block  mb-2 font-bold">Job Title</label>
          <input
            name="title"
            className="w-full border border-[#dfdfdf] rounded-lg px-4 py-3 text-[18px] placeholder:text-[16px]  placeholder:font-normal placeholder:text-[#BCBCBC] focus:outline-none focus:border-2 focus:border-black text-[#222222] font-medium"
            placeholder="Job Title"
            required
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 font-bold">Company Name</label>
          <input
            name="company"
            className="w-full border border-[#dfdfdf] rounded-lg px-4 py-3 text-[18px] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#BCBCBC] focus:outline-none focus:border-2 focus:border-black text-[#222222] font-medium"
            placeholder="Amazon, Microsoft, Swiggy"
            required
            value={form.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-5">
        <div>
          <label className="block mb-2 font-bold">Location</label>
          <div className="relative">
            <select
              name="location"
              className="appearance-none w-full border border-[#dfdfdf] rounded-lg px-4 py-3 bg-white text-[16px]  text-[#BCBCBC] focus:outline-none focus:border-2 focus:border-black"
              required
              value={form.location}
              onChange={handleChange}
            >
              <option value="" hidden>
                Choose Preferred Location
              </option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
            </select>
            <svg
              className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="#383838"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div>
          <label className="block  mb-2 font-bold">Job Type</label>
          <div className="relative">
            <select
              name="jobType"
              className="appearance-none w-full border border-[#dfdfdf] rounded-lg px-4 py-3 bg-white text-[16px] text-[#BCBCBC] focus:outline-none focus:border-2 focus:border-black"
              required
              value={form.jobType}
              onChange={handleChange}
            >
              <option value="" hidden>
                FullTime
              </option>
              <option value="FullTime">FullTime</option>
              <option value="PartTime">PartTime</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            {/* Custom dropdown arrow */}
            <svg
              className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="#383838"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Salary Range + Deadline */}
      <div className="grid grid-cols-2 gap-6 mb-5">
        <div>
          <label className="block mb-2 font-bold">Salary Range</label>
          <div className="flex gap-3">
            <div className="relative w-full">
             <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-6.5 transform -translate-y-1/2 fill-[#BCBCBC]"
              >
                <path
                  d="M7 12L4 15M4 15L1 12M4 15V1M9 4L12 1M12 1L15 4M12 1V15"
                  stroke="#BCBCBC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                name="salaryMin"
                type="number"
                className="w-full pl-9 border border-[#dfdfdf] rounded-lg px-4 py-3 text-[18px] font-medium focus:outline-none focus:border-black  focus:border-2 placeholder:text-[#BCBCBC] text-[#222222] placeholder:font-normal placeholder:text-[16px]"
                placeholder="₹0"
                value={form.salaryMin}
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-6.5 transform -translate-y-1/2 fill-[#BCBCBC]"
              >
                <path
                  d="M7 12L4 15M4 15L1 12M4 15V1M9 4L12 1M12 1L15 4M12 1V15"
                  stroke="#BCBCBC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                name="salaryMax"
                type="number"
                className="w-full pl-9 border border-[#dfdfdf] rounded-lg px-4 py-3 text-[18px] font-medium focus:outline-none focus:border-2 focus:border-black text-[#222222] placeholder:text-[#BCBCBC] placeholder:font-normal placeholder:text-[16px]"
                placeholder="₹12,00,000"
                value={form.salaryMax}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-bold">
            Application Deadline
          </label>
          <input
            name="applicationDeadline"
            type="date"
            className="w-full border border-[#dfdfdf] rounded-lg px-4 py-3 text-[18px] font-medium focus:outline-none focus:border-black focus:border-2 text-[#222222] placeholder:text-[#BCBCBC]"
            value={form.applicationDeadline}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block font-bold">Job Description</label>
        <textarea
          name="description"
          className="w-full border border-[#dfdfdf] rounded-lg px-4 py-3 text-[16px] min-h-[100px] placeholder:font-normal font-medium focus:outline-none focus:border-black focus:border-2 text-[#222222] placeholder:text-[#BCBCBC]"
          placeholder="Please share a description to let the candidate know more about the job role"
          required
          value={form.description}
          onChange={handleChange}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          className=" w-1/3 border-2 flex justify-center items-center gap-2 border-[#000000] px-6 py-3 rounded-lg bg-white text-[#232323] font-semibold text-[16px] hover:bg-[#f8f8f8] transition shadow cursor-pointer"
          onClick={() => onSubmit(null)}
        >
          Save Draft <img src="/draft.svg" alt="" />
        </button>
        <button
          type="submit"
          className="w-1/3 flex justify-center items-center gap-2 px-10 py-3 rounded-lg bg-[#00AAFF] text-white font-semibold text-[17px] shadow hover:bg-[#27b7ff] transition cursor-pointer"
        >
          Publish <img src="/publish.svg" alt="" />
        </button>
      </div>
    </form>
  );
}
