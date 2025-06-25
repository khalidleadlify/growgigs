import React from "react";
import JobCard, { Job } from "./JobCard";

const mockJobs: Job[] = [
  {
    id: 1,
    title: "SEO Expert Needed for Shopify Store",
    posted: "3 hours ago",
    description: "We need help improving our store's visibility. Looking for someone experienced in eCommerce SEO.",
    budget: "$100 - $300",
    tags: ["SEO", "Shopify", "eCommerce"],
  },
  {
    id: 2,
    title: "Email Deliverability Consultant",
    posted: "1 day ago",
    description: "Our cold emails are hitting spam. Need a pro to diagnose and improve deliverability.",
    budget: "$50/hr",
    tags: ["Cold Email", "Deliverability", "Consulting"],
  },
];

const JobFeed: React.FC = React.memo(() => (
  <div className="space-y-4">
    {mockJobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
));

export default JobFeed;
