import { Sidebar } from "./Sidebar";

interface Project {
  id: number;
  name: string;
  date: string;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  projects?: Project[];
}

export function DashboardLayout({ children, projects = [] }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#0d0d0f] text-white">
      <Sidebar projects={projects} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
