import Spline from '@splinetool/react-spline';
import { Sparkles, Shield, Users, MessageSquare } from 'lucide-react';

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative w-full h-[72vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            Real-time, minimal, dark-blue
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Chat better. Together.
          </h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            NovaChat is a sleek, modern chat application designed for teams and communities. Create groups, share ideas, and stay productive—all in a calming dark and blue interface.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button onClick={onGetStarted} className="pointer-events-auto rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/40 hover:from-blue-500 hover:to-indigo-500 transition">
              Get started
            </button>
            <div className="hidden sm:flex items-center gap-4 text-slate-300/90">
              <span className="inline-flex items-center gap-2 text-sm"><Shield className="h-4 w-4 text-blue-300" /> End-to-end mindset</span>
              <span className="inline-flex items-center gap-2 text-sm"><Users className="h-4 w-4 text-blue-300" /> Groups</span>
              <span className="inline-flex items-center gap-2 text-sm"><MessageSquare className="h-4 w-4 text-blue-300" /> Realtime-feel UI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
