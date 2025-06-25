import JobFeed from "@/components/JobFeed"; // ⬅️ Import the JobFeed

export default function Home() {
  return (
    <main className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">GrowGigs Dashboard</h1>

      <section>
        <h2 className="text-xl font-semibold">Filters</h2>
        <p className="text-gray-600">Customize job alerts.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Proposals</h2>
        <p className="text-gray-600">Track what you’ve sent.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Job Feed</h2>
        <p className="text-gray-600 mb-2">See latest Upwork-style jobs.</p>
        <JobFeed /> {/* ⬅️ Add the job feed here */}
      </section>
    </main>
  );
}
