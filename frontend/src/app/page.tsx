"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Filter from "../components/Filter";
import JobList from "@/components/JobList";
import useFetchJobs from "../hooks/useFetchJobs";

const HomePage = () => {
  const { jobs, loading, error } = useFetchJobs();
  const [filter, setFilter] = useState({
    title: "",
    location: "",
    experience: "",
    salary: "",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching jobs</div>;

  const filteredJobs = jobs.filter(
    (job) =>
      (job.title.toLowerCase().includes(filter.title.toLowerCase()) ||
        job.company.toLowerCase().includes(filter.title.toLowerCase())) &&
      (filter.location ? job.location === filter.location : true) &&
      (filter.experience ? job.experience === filter.experience : true) &&
      (filter.salary ? job.salaryRange === filter.salary : true)
  );

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 p-4">
          <Filter onFilterChange={setFilter} />
        </div>
        <div className="w-3/4 p-4">
          {/* ✅ Pass only first 5 jobs to JobList */}
          <JobList jobs={filteredJobs.slice(0, 8)} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
