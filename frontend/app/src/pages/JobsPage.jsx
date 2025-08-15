import React, { useEffect, useState, useCallback } from "react";
import JobGrid from "../components/JobGrid";
import { fetchJobs } from "../utils/api"; 
import HeaderBar from "../components/HeaderBar";
export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadJobs = useCallback(() => {
    setLoading(true);
    setError("");
    fetchJobs()
      .then((data) => setJobs(data))
      .catch((err) => setError(err?.message || "Failed to load jobs"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <HeaderBar onJobCreated={loadJobs} />
      {loading ? (
        <div className="text-center text-gray-500 py-10 text-lg">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-10 text-lg">{error}</div>
      ) : (
        <JobGrid jobs={jobs} />
      )}
    </div>
  );
}
