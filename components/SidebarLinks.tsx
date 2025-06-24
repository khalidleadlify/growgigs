import React from "react";

interface SidebarLink {
  name: string;
  href: string;
}

const links: SidebarLink[] = [
  { name: "Dashboard", href: "/" },
  { name: "Job Feed", href: "/job-feed" },
  { name: "Proposals", href: "/proposals" },
  { name: "Filters", href: "/filters" },
  { name: "Templates", href: "/templates" },
];

const SidebarLinks: React.FC = React.memo(() => (
  <nav className="flex flex-col gap-3 text-base mt-2" aria-label="Sidebar Navigation">
    <ul className="p-0 m-0">
      {links.map((link) => (
        <li key={link.href} className="list-none">
          <a
            href={link.href}
            className="flex items-center w-full px-4 py-2 rounded-lg font-semibold text-gray-800 bg-white shadow-sm border border-gray-100 hover:bg-blue-50 hover:text-blue-700 transition-all duration-150"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
));

export default SidebarLinks;
