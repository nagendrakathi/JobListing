import axios from "./axios";
import apiPaths from "./apiPaths";

const monthlyToAnnual = (m) => Number(m) * 12;

export async function fetchJobs(filters = {}) {
  const params = {};

  if (filters.hasInteracted) {
    if (filters.title && filters.title.trim() !== "") params.title = filters.title.trim();
    if (filters.location && filters.location.trim() !== "") params.location = filters.location.trim();
    if (filters.jobType && filters.jobType.trim() !== "") params.jobType = filters.jobType.trim();

    if (filters.salaryRange) {
      const [minM, maxM] = String(filters.salaryRange).split("-").map((v) => Number(v));
      if (!Number.isNaN(minM) && !Number.isNaN(maxM)) {
        params.minSalary = monthlyToAnnual(minM); 
        params.maxSalary = monthlyToAnnual(maxM);
      }
    }
  }


  const res = await axios.get(apiPaths.JOBS, { params });
  return res.data;
}

export async function createJob(jobData) {
  const res = await axios.post(apiPaths.JOBS, jobData);
  return res.data;
}
