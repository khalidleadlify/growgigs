'use client'

import { useState } from 'react'
import { sampleJobs } from '@/data/sample-jobs'
import JobCard, { Job } from '@/components/JobCard'

export default function JobFeedPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = sampleJobs.filter((job: Job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )

    return matchesSearch
  })

  return (
    <div className="p-6 space-y-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
      />

      {/* Job Feed */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="text-gray-500 text-sm pt-10">No jobs found.</div>
        )}
      </div>
    </div>
  )
}
