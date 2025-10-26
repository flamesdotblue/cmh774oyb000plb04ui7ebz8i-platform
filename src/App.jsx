import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatDashboard from './components/ChatDashboard';

export default function App() {
  const [page, setPage] = useState('home');
  const [isAuthed, setIsAuthed] = useState(false);

  const goHome = () => setPage('home');
  const goDashboard = () => setPage('dashboard');

  const handleAuthToggle = () => {
    const next = !isAuthed;
    setIsAuthed(next);
    if (next) setPage('dashboard');
    else setPage('home');
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar onHome={goHome} onDashboard={goDashboard} isAuthed={isAuthed} onAuthToggle={handleAuthToggle} />

      {page === 'home' && (
        <>
          <Hero onGetStarted={() => (isAuthed ? goDashboard() : handleAuthToggle())} />
          <Features />
          <footer className="border-t border-slate-800/60 bg-slate-950/60">
            <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400">
              <p>© {new Date().getFullYear()} NovaChat. Built with a modern, dark-blue aesthetic.</p>
            </div>
          </footer>
        </>
      )}

      {page === 'dashboard' && (
        <ChatDashboard />
      )}
    </div>
  );
}
