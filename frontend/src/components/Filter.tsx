"use client";

import { useState } from "react";

// ✅ Define Type for Filters
type FilterType = {
  title: string;
  location: string;
  experience: string;
  salary: string;
};

// ✅ Define Props Type
type FilterProps = {
  onFilterChange: (filters: FilterType) => void;
};

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterType>({
    title: "",
    location: "",
    experience: "",
    salary: "",
  });

  // ✅ Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // ✅ Reset Filters
  const handleReset = () => {
    const defaultFilters: FilterType = { title: "", location: "", experience: "", salary: "" };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 w-full">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Filter Jobs</h3>

      {/* Job Title / Company */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Title / Company
        </label>
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={handleChange}
          placeholder="Enter job title or company"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Enter location"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Experience */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Experience
        </label>
        <select
          name="experience"
          value={filters.experience}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Any</option>
          <option value="1+ years">1+ years</option>
          <option value="3+ years">3+ years</option>
          <option value="5+ years">5+ years</option>
        </select>
      </div>

      {/* Salary */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Salary Range
        </label>
        <select
          name="salary"
          value={filters.salary}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Any</option>
          <option value="$2k - $3k">$2k - $3k</option>
          <option value="$3k - $4k">$3k - $4k</option>
          <option value="$4k+">$4k+</option>
        </select>
      </div>

      {/* Reset Button */}
      <button
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleReset}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
