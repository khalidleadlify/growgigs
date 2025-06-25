import { Job } from "@/components/JobCard";

// Centralized job data with proper typing for scalability
export const jobData: Job[] = [
  {
    id: 1,
    title: "Cold Email Specialist Needed for B2B Campaign",
    posted: "2 hours ago",
    description:
      "We're looking for someone to run cold email outreach for SaaS leads. Experience with tools like Apollo, Outreach, or similar platforms required.",
    budget: "$50 – $100",
    tags: ["B2B", "Lead Gen", "Cold Email", "SaaS"],
  },
  {
    id: 2,
    title: "LinkedIn Outreach Expert Wanted",
    posted: "1 day ago",
    description:
      "Need help with building and running LinkedIn lead gen campaigns. Must have experience with Sales Navigator and automation tools.",
    budget: "$30/hr",
    tags: ["LinkedIn", "Outreach", "Sales", "Lead Gen"],
  },
  {
    id: 3,
    title: "SEO Specialist for E-commerce Store",
    posted: "3 hours ago",
    description:
      "Looking for an experienced SEO expert to optimize our Shopify store. Focus on technical SEO and content optimization.",
    budget: "$75/hr",
    tags: ["SEO", "E-commerce", "Shopify", "Content"],
  },
  {
    id: 4,
    title: "Email Marketing Campaign Manager",
    posted: "5 hours ago",
    description:
      "Seeking a professional to design and execute email marketing campaigns. Experience with Mailchimp or similar platforms required.",
    budget: "$500 - $1000",
    tags: ["Email Marketing", "Mailchimp", "Campaigns", "Design"],
  },
  {
    id: 5,
    title: "Social Media Marketing Specialist",
    posted: "1 day ago",
    description:
      "Need a social media expert to manage our Instagram and Facebook accounts. Content creation and engagement focus.",
    budget: "$25/hr",
    tags: ["Social Media", "Instagram", "Facebook", "Content Creation"],
  },
];

// Helper functions for robust data management
export const getJobById = (id: number): Job | undefined => {
  return jobData.find((job) => job.id === id);
};

export const getJobsByTag = (tag: string): Job[] => {
  return jobData.filter((job) =>
    job.tags.some((jobTag) => jobTag.toLowerCase().includes(tag.toLowerCase()))
  );
};

export const getRecentJobs = (hours: number = 24): Job[] => {
  const now = new Date();
  return jobData.filter((job) => {
    // Simple mock - in real app, you'd parse the posted time properly
    const isRecent =
      job.posted.includes("hour") ||
      (job.posted.includes("day") && parseInt(job.posted) === 1);
    return isRecent;
  });
};

export const searchJobs = (query: string): Job[] => {
  const lowercaseQuery = query.toLowerCase();
  return jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(lowercaseQuery) ||
      job.description.toLowerCase().includes(lowercaseQuery) ||
      job.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Type guards and validation
export const isValidJob = (job: any): job is Job => {
  return (
    typeof job === "object" &&
    typeof job.id === "number" &&
    typeof job.title === "string" &&
    typeof job.posted === "string" &&
    typeof job.description === "string" &&
    typeof job.budget === "string" &&
    Array.isArray(job.tags) &&
    job.tags.every((tag: any) => typeof tag === "string")
  );
};

export default jobData;
