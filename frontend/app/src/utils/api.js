import axios from "./axios";
import apiPaths from "./apiPaths";

// Utility: convert monthly salary (number) to annual (number)
const monthlyToAnnual = (m) => Number(m) * 12;

export async function fetchJobs(filters = {}) {
  const params = {};

  if (filters.hasInteracted) {
    if (filters.title && filters.title.trim() !== "") params.title = filters.title.trim();
    if (filters.location && filters.location.trim() !== "") params.location = filters.location.trim();
    if (filters.jobType && filters.jobType.trim() !== "") params.jobType = filters.jobType.trim();

    // filters.salaryRange is a string "min-max" of MONTHLY values from the slider
    if (filters.salaryRange) {
      const [minM, maxM] = String(filters.salaryRange).split("-").map((v) => Number(v));
      if (!Number.isNaN(minM) && !Number.isNaN(maxM)) {
        params.minSalary = monthlyToAnnual(minM); // convert to annual
        params.maxSalary = monthlyToAnnual(maxM);
      }
    }
  }

  // When hasInteracted is false, params remains empty to fetch ALL jobs.

  const res = await axios.get(apiPaths.JOBS, { params });
  return res.data;
}

export async function createJob(jobData) {
  const res = await axios.post(apiPaths.JOBS, jobData);
  return res.data;
}
