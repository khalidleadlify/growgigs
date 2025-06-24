import JobCard, { Job } from "@/components/JobCard";

const jobs: Job[] = [
  {
    id: 1,
    title: "Cold Email Specialist Needed for B2B Campaign",
    budget: "$50 – $100",
    posted: "2 hours ago",
    tags: ["B2B", "Lead Gen", "Cold Email"],
    description: "We're looking for someone to run cold email outreach for SaaS leads...",
  },
  {
    id: 2,
    title: "LinkedIn Outreach Expert Wanted",
    budget: "$30/hr",
    posted: "1 day ago",
    tags: ["LinkedIn", "Outreach", "Sales"],
    description: "Need help with building and running LinkedIn lead gen campaigns.",
  },
];

export default function JobFeedPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Latest Job Posts</h1>
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </section>
  );
}
