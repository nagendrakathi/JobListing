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
    // store monthly UI as string "min-max" (e.g., "50000-80000")
    salaryRange: "50000-80000",
    hasInteracted: false, // controls whether to apply filters
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
        <div className="text-center text-gray-500 py-10 text-lg">Please wait a moment...(I am trying to wake up the server :))</div>
      ) : error ? (
        <div className="text-center text-red-500 py-10 text-lg">{error}</div>
      ) : (
        <JobGrid jobs={jobs} />
      )}
    </div>
  );
}
