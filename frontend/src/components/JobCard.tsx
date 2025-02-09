import React from "react";

interface JobProps {
  job: {
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
  };
}

const JobCard: React.FC<JobProps> = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 w-[200px] h-auto sm:w-[400px] md:w-[450px] lg:w-[300px] transition-transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Job Title */}
      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>

      {/* Company & Location */}
      <p className="text-gray-500 text-sm">
        {job.company} - {job.location}
      </p>

      {/* Experience & Salary */}
      <p className="text-sm text-gray-600 mt-1">
        Experience: {job.experience}
      </p>
      <p className="text-lg font-semibold text-gray-700 mt-1">
        {job.salaryRange}
      </p>

      {/* Rating & Reviews */}
      <div className="flex items-center mt-2 space-x-2">
        <span className="text-yellow-500 font-semibold">{job.rating} ⭐</span>
        <span className="text-gray-500 text-sm">({job.reviews} reviews)</span>
      </div>

      {/* Job Type Badges */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            job.onSite ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-800"
          }`}
        >
          {job.onSite ? "On-Site" : "Remote"}
        </span>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            job.fullTime ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {job.fullTime ? "Full Time" : "Part Time"}
        </span>
      </div>

      {/* Apply Button */}
      <a
  href={job.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 block text-center w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation
    alert("Applied successfully!"); // Show alert
    window.open(job.link, "_blank", "noopener,noreferrer"); // Open the link in a new tab
  }}
>
  Apply Now
</a>

    </div>
  );
};

export default JobCard;
