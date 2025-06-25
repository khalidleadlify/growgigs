import React from "react";

export interface Job {
  id: number;
  title: string;
  budget: string;
  posted: string;
  tags: string[];
  description: string;
}

// Extract Tag as a reusable component for scalability
const Tag: React.FC<{ label: string }> = React.memo(({ label }) => (
  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
    {label}
  </span>
));

const JobCard: React.FC<{ job: Job }> = React.memo(({ job }) => (
  <article className="bg-white p-5 rounded-xl shadow border border-gray-100">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <p className="text-sm text-gray-500">{job.posted} • {job.budget}</p>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
        aria-label={`Apply for ${job.title}`}
      >
        Apply Now
      </button>
    </div>
    <p className="text-sm mt-2 text-gray-700">{job.description}</p>
    <ul className="flex flex-wrap gap-2 mt-3">
      {job.tags.map((tag) => (
        <li key={tag}>
          <Tag label={tag} />
        </li>
      ))}
    </ul>
  </article>
));

export default JobCard;