"use client";
import { useState } from "react";
import { jobData } from "@/app/lib/jobData";

export default function JobFeed() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredJobs = activeTag
    ? jobData.filter((job) => job.tags.includes(activeTag))
    : jobData;

  return (
    <div className="space-y-6 p-4">
      {activeTag && (
        <div className="flex items-center gap-4 mb-2">
          <span className="text-sm font-medium">
            Showing results for tag: <strong>{activeTag}</strong>
          </span>
          <button
            className="text-blue-600 text-sm underline"
            onClick={() => setActiveTag(null)}
          >
            Clear Filter
          </button>
        </div>
      )}

      {filteredJobs.map((job) => (
        <div
          key={job.id}
          className="rounded-2xl border shadow-sm p-4 hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <p className="text-sm text-muted-foreground mb-1">
            {job.posted} • {job.budget}
          </p>
          <p className="text-sm mb-2">{job.description}</p>

          {/* 🔽 THIS is where the clickable, spaced tags happen */}
          <div className="flex flex-wrap gap-2 mt-2">
            {job.tags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTag(tag)}
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
