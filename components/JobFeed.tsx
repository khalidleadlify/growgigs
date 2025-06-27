import React from "react";
import JobCard from "./JobCard";
import { sampleJobs } from "@/data/sample-jobs";

const JobFeed: React.FC = React.memo(() => (
  <div className="space-y-4">
    {sampleJobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
));

export default JobFeed;
