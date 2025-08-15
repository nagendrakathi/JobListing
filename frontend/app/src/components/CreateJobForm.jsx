import React, { useState } from "react";
import toast from "react-hot-toast";
import TextInput from "./Cards/TextInput";
import Dropdown from "./Cards/Dropdown";
import FormButton from "./Cards/FormButton";
import { createJob } from "../utils/api";

export default function CreateJobForm({ onSubmit, onClose }) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const salaryRange = `${form.salaryMin}-${form.salaryMax}`;
    const jobToSend = { ...form, salaryRange };
    delete jobToSend.salaryMin;
    delete jobToSend.salaryMax;

    try {
      await createJob(jobToSend);
      toast.success("Job published successfully!");
      if (onSubmit) onSubmit(jobToSend);
      if (onClose) {
        setTimeout(() => onClose(), 500);
      }
    } catch (err) {
      toast.error(
        "Error creating job. " + (err?.response?.data?.message || err.message)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Create Job Opening
      </h2>

      <div className="grid grid-cols-2 gap-6 mb-5">
        <TextInput
          label="Job Title"
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Company Name"
          name="company"
          placeholder="Amazon, Microsoft, Swiggy"
          value={form.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-5">
        <Dropdown
          label="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
          options={[
            { value: "", label: "Choose Preferred Location", hidden: true },
            { value: "Chennai", label: "Chennai" },
            { value: "Hyderabad", label: "Hyderabad" },
            { value: "Bangalore", label: "Bangalore" },
            { value: "Delhi", label: "Delhi" },
          ]}
        />
        <Dropdown
          label="Job Type"
          name="jobType"
          value={form.jobType}
          onChange={handleChange}
          required
          options={[
            { value: "", label: "FullTime", hidden: true },
            { value: "FullTime", label: "FullTime" },
            { value: "PartTime", label: "PartTime" },
            { value: "Contract", label: "Contract" },
            { value: "Internship", label: "Internship" },
          ]}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-5">
        <div>
          <label className="block mb-2 font-bold">Salary Range</label>
          <div className="flex gap-3">
            <TextInput
              name="salaryMin"
              type="number"
              placeholder="₹0"
              value={form.salaryMin}
              onChange={handleChange}
              icon={
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#BCBCBC"
                  strokeWidth="1.5"
                >
                  <path d="M7 12L4 15M4 15L1 12M4 15V1M9 4L12 1M12 1L15 4M12 1V15" />
                </svg>
              }
            />
            <TextInput
              name="salaryMax"
              type="number"
              placeholder="₹12,00,000"
              value={form.salaryMax}
              onChange={handleChange}
              icon={
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#BCBCBC"
                  strokeWidth="1.5"
                >
                  <path d="M7 12L4 15M4 15L1 12M4 15V1M9 4L12 1M12 1L15 4M12 1V15" />
                </svg>
              }
            />
          </div>
        </div>
        <TextInput
          label="Application Deadline"
          name="applicationDeadline"
          type="date"
          value={form.applicationDeadline}
          onChange={handleChange}
        />
      </div>

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

      <div className="flex items-center justify-between pt-2">
        <FormButton
          label="Save Draft"
          icon="/draft.svg"
          variant="secondary"
          onClick={() => onSubmit && onSubmit(null)}
        />
        <FormButton
          label="Publish"
          type="submit"
          icon="/publish.svg"
          variant="primary"
        />
      </div>
    </form>
  );
}
