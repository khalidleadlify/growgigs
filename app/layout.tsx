import './globals.css';
import SidebarLinks from '../components/SidebarLinks';

export const metadata = {
  title: "GrowGigs",
  description: "Upwork job automation for freelancers and agencies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-6 border-r flex flex-col">
            <header>
              <h1 className="text-2xl font-bold mb-8">GrowGigs</h1>
            </header>
            <nav aria-label="Sidebar Navigation" className="flex-1">
              <SidebarLinks />
            </nav>
            {/* Future: Add user profile, settings, or footer here */}
          </aside>

          {/* Main content */}
          <main className="flex-1 p-8" role="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
