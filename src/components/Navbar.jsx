import { Home, MessageSquare, LogIn, LogOut } from 'lucide-react';

export default function Navbar({ onHome, onDashboard, isAuthed, onAuthToggle }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-inset ring-white/10 shadow-sm" />
            <span className="text-lg font-semibold tracking-tight">NovaChat</span>
          </div>

          <nav className="flex items-center gap-2">
            <button onClick={onHome} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-slate-800/70 transition">
              <Home className="h-4 w-4" />
              Home
            </button>
            <button onClick={onDashboard} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-slate-800/70 transition">
              <MessageSquare className="h-4 w-4" />
              Dashboard
            </button>
            <div className="mx-2 h-6 w-px bg-slate-800/70" />
            <button onClick={onAuthToggle} className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-md shadow-blue-900/30 hover:from-blue-500 hover:to-indigo-500 transition">
              {isAuthed ? <LogOut className="h-4 w-4" /> : <LogIn className="h-4 w-4" />}
              {isAuthed ? 'Sign out' : 'Sign in'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
