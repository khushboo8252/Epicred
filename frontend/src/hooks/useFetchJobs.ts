"use client"; // Ensure this is a client component

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
} from "../store/jobSlice";
import { RootState } from "../store/store"; // Import your RootState type

const manualJobs = [
  {
    id: 1,
    title: "Senior Product Manager",
    company: "G",
    location: "California, CA",
    experience: "5+ years",
    salaryRange: "$2.5k/Monthly",
    rating: 4.5, // Converted to number
    reviews: 42, // Converted to number
    onSite: true,
    fullTime: true,
    link: "#",
  },
  {
    id: 2,
    title: "Front End Developer",
    company: "Q",
    location: "New York, NY",
    experience: "2+ years",
    salaryRange: "$1.5k/Monthly",
    rating: 4.2, // Converted to number
    reviews: 27,
    onSite: true,
    fullTime: true,
    link: "#",
  },
  {
    id: 3,
    title: "Quality Assurance Engineer",
    company: "Q",
    location: "Rome, IT",
    experience: "3+ years",
    salaryRange: "$1.5k/Monthly",
    rating: 4.0,
    reviews: 42,
    onSite: false,
    fullTime: true,
    link: "#",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Q",
    location: "San Francisco, CA",
    experience: "4+ years",
    salaryRange: "$3.5k/Monthly",
    rating: 4.8,
    reviews: 2,
    onSite: true,
    fullTime: true,
    link: "#",
  },
  {
    id: 5,
    title: "User Interface Designer",
    company: "Q",
    location: "San Francisco, CA",
    experience: "3+ years",
    salaryRange: "$4.0k/Monthly",
    rating: 4.7,
    reviews: 12,
    onSite: false,
    fullTime: false,
    link: "#",
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "Netflix",
    location: "Los Angeles, CA",
    experience: "2+ years",
    salaryRange: "$3.0k/Monthly",
    rating: 4.6,
    reviews: 90,
    onSite: false,
    fullTime: false,
    link: "#",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "Spotify",
    location: "Berlin, Germany",
    experience: "5+ years",
    salaryRange: "$4.2k/Monthly",
    rating: 4.9,
    reviews: 65,
    onSite: true,
    fullTime: true,
    link: "#",
  },
  {
    id: 8,
    title: "Marketing Specialist",
    company: "Tesla",
    location: "San Francisco, CA",
    experience: "3+ years",
    salaryRange: "$2.7k/Monthly",
    rating: 4.3,
    reviews: 40,
    onSite: false,
    fullTime: true,
    link: "#",
  }

];


const useFetchJobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector(
    (state: RootState) => state.jobs
  );

  useEffect(() => {
    dispatch(fetchJobsStart());
    try {
      dispatch(fetchJobsSuccess(manualJobs)); // Use manual jobs
    } catch (err) {
      dispatch(fetchJobsFailure((err as Error).message));
    }
  }, [dispatch]);

  return { jobs, loading, error };
};

export default useFetchJobs;
