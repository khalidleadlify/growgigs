"use client";
import React from "react";

export interface Job {
  id: number;
  title: string;
  budget: string | number;
  posted: string;
  skills: string[];
  description: string;
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  console.log("Rendering job:", job);

  return (
    <article className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition space-y-3">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold leading-tight">{job.title}</h2>
          <p className="text-sm text-gray-500">
            {job.posted} •{" "}
            {typeof job.budget === "number" ? `$${job.budget}` : job.budget}
          </p>
        </div>
        <button
          className="mt-1 bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
          aria-label={`Apply for ${job.title}`}
        >
          Apply Now
        </button>
      </div>

      <p className="text-sm text-gray-700">{job.description}</p>

      {/* Skill Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem", // gap-3
          marginTop: "1rem", // mt-4
          marginBottom: "2rem", // mb-6
        }}
      >
        {job.skills.map((skill, index) => (
          <span
            key={index}
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#DBEAFE",
              color: "#1E40AF",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              border: "1px solid #93C5FD",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              marginBottom: "0.25rem",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <button
          className="mt-2 text-blue-600 hover:underline text-sm"
          aria-label={`View details for ${job.title}`}
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default JobCard;
