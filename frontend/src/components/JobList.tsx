import React from "react";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: {
    id: number;
    title: string;
    company: string;
    location: string;
    experience: string;
    salaryRange: string;
    rating: number;
    reviews: number;
    onSite: boolean;
    fullTime: boolean;
    link: string;
  }[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  if (jobs.length === 0)
    return <p className="text-center text-gray-500">No jobs found.</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 py-8">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
