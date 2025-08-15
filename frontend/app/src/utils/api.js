import axios from "./axios";
import apiPaths from "./apiPaths";

// Fetch jobs with optional filters
export async function fetchJobs(filters = {}) {
  const params = {};

  if (filters.title) params.title = filters.title;
  if (filters.location) params.location = filters.location;
  if (filters.jobType) params.jobType = filters.jobType;
  if (filters.salaryRange) {
    const [minSalary, maxSalary] = filters.salaryRange.split("-");
    if (minSalary && maxSalary) {
      params.minSalary = minSalary;
      params.maxSalary = maxSalary;
    }
  }

  const res = await axios.get(apiPaths.JOBS, { params });
  return res.data;
}

// Create a new job
export async function createJob(jobData) {
  const res = await axios.post(apiPaths.JOBS, jobData);
  return res.data;
}

