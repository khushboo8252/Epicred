// src/types/job.ts

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  rating: number;
  reviews: number;
  experience:string;
  salaryRange: string;
  onSite: boolean;
  fullTime: boolean;
  link: string;
}
