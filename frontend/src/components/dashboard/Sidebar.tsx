import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Home,
  Search,
  BookOpen,
  FolderOpen,
  Star,
  User,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Project {
  id: number;
  name: string;
  date: string;
}

interface SidebarProps {
  projects?: Project[];
}

export function Sidebar({ projects = [] }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navItem = (
    icon: React.ReactNode,
    label: string,
    onClick: () => void,
    active = false
  ) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
        active
          ? "bg-white/10 text-white"
          : "text-zinc-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <span className="w-4 h-4 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </button>
  );

  return (
    <>
      <aside 
        className={`${isCollapsed ? "w-0 border-r-0" : "w-[220px] border-r border-white/5"} relative min-h-screen bg-[#111113] flex flex-col flex-shrink-0 transition-[width,border] duration-300 ease-in-out overflow-hidden z-40`}
      >
        <div className="w-[220px] min-h-screen flex flex-col flex-shrink-0">
          {/* Header / Logo */}
          <div className="flex items-center justify-between px-4 pt-5 pb-4">
            <Link to="/" className="flex items-center gap-2 cursor-pointer group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs group-hover:opacity-90 transition-opacity">
                F
              </div>
              <span className="font-semibold text-white text-sm group-hover:text-zinc-200 transition-colors">Fluxyn</span>
            </Link>
            <button 
              onClick={() => setIsCollapsed(true)}
              className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              title="Collapse Sidebar"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* User pill */}
          <div className="px-3 mb-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-sm text-white">
              <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                A
              </div>
              <span className="truncate font-medium">Apurv's Fluxyn</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="px-3 flex flex-col gap-0.5">
            {navItem(
              <Home className="w-4 h-4" />,
              "Home",
              () => navigate("/new-page"),
              location.pathname === "/new-page"
            )}

            {/* Search toggle */}
            <div>
              {navItem(
                <Search className="w-4 h-4" />,
                "Search",
                () => setSearchOpen((prev) => !prev),
                searchOpen
              )}
              {searchOpen && (
                <div className="mt-1 mb-1 mx-1">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5">
                    <Search className="w-3 h-3 text-zinc-400 flex-shrink-0" />
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search projects..."
                      className="bg-transparent text-xs text-white placeholder:text-zinc-500 focus:outline-none flex-1"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")}>
                        <X className="w-3 h-3 text-zinc-400 hover:text-white" />
                      </button>
                    )}
                  </div>
                  {searchQuery && (
                    <div className="mt-1 space-y-0.5">
                      {filteredProjects.length === 0 ? (
                        <p className="text-xs text-zinc-500 px-2 py-1">No results found</p>
                      ) : (
                        filteredProjects.map((p) => (
                          <div
                            key={p.id}
                            className="text-xs text-zinc-300 px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer"
                          >
                            {p.name}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {navItem(
              <BookOpen className="w-4 h-4" />,
              "Resources",
              () => navigate("/resources"),
              location.pathname === "/resources"
            )}
          </nav>

          {/* Projects section */}
          <div className="px-3 mt-5">
            <p className="text-[10px] uppercase tracking-widest text-zinc-600 px-2 mb-1.5 font-semibold">
              Projects
            </p>
            <div className="flex flex-col gap-0.5">
              {navItem(<FolderOpen className="w-4 h-4" />, "All projects", () => {})}
              {navItem(<Star className="w-4 h-4" />, "Starred", () => {})}
              {navItem(<User className="w-4 h-4" />, "Created by me", () => {})}
              {navItem(<Users className="w-4 h-4" />, "Shared with me", () => {})}
            </div>
          </div>

          {/* Recents section */}
          <div className="px-3 mt-5 flex-1 overflow-y-auto">
            <p className="text-[10px] uppercase tracking-widest text-zinc-600 px-2 mb-1.5 font-semibold">
              Recents
            </p>
            {projects.length === 0 ? (
              <p className="text-xs text-zinc-600 px-2 py-1">No recent projects</p>
            ) : (
              <div className="flex flex-col gap-0.5">
                {projects.slice(0, 5).map((p) => (
                  <div
                    key={p.id}
                    className="text-xs text-zinc-400 hover:text-white px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer truncate"
                  >
                    {p.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom actions */}
          <div className="px-3 pb-4 mt-4 border-t border-white/5 pt-3 flex flex-col gap-2">
            <div className="rounded-xl bg-white/5 p-3 flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white leading-tight">Share Fluxyn</p>
                <p className="text-[10px] text-zinc-500">100 credits per paid referral</p>
              </div>
            </div>
            <div className="rounded-xl bg-white/5 p-3 flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">⚡</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">Upgrade to Pro</p>
                <p className="text-[10px] text-zinc-500">Unlock more features</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Floating expand button */}
      {isCollapsed && (
        <button 
          onClick={() => setIsCollapsed(false)}
          className="fixed top-5 left-4 z-50 text-zinc-400 hover:text-white p-2 rounded-lg bg-[#111113] border border-white/10 hover:bg-white/10 transition-all shadow-xl animate-in fade-in zoom-in duration-300"
          title="Expand Sidebar"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
