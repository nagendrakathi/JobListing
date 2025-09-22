import React, { useEffect, useState, useCallback } from "react";
import JobGrid from "../components/JobGrid";
import { fetchJobs } from "../utils/api";
import HeaderBar from "../components/HeaderBar";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    jobType: "",
    salaryRange: "50000-600000",
    hasInteracted: false, 
  });

  const loadJobs = useCallback(() => {
    setLoading(true);
    setError("");
    fetchJobs(filters)
      .then((data) => setJobs(data))
      .catch((err) => setError(err?.message || "Failed to load jobs"))
      .finally(() => setLoading(false));
  }, [filters]);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <HeaderBar
        onJobCreated={loadJobs}
        filters={filters}
        setFilters={setFilters}
        setHasInteracted={(v) => setFilters((f) => ({ ...f, hasInteracted: v }))}
      />
      {loading ? (
        <div className="text-center text-gray-500 py-10 text-lg">Please wait a moment...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-10 text-lg">{error}</div>
      ) : (
        <JobGrid jobs={jobs} />
      )}
    </div>
  );
}
