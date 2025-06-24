'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">GrowGigs</div>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/job-feed" className="hover:underline">Job Feed</Link>
        <Link href="/templates" className="hover:underline">Templates</Link>
        <Link href="/proposals" className="hover:underline">Proposals</Link>
      </div>
    </nav>
  )
}
