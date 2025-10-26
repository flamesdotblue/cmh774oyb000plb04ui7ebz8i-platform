import { MessageSquare, Users, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Group-first design',
    desc: 'Organize your conversations into groups and channels to keep context clear and collaboration smooth.',
    icon: Users,
  },
  {
    title: 'Clean, dark-blue aesthetic',
    desc: 'A carefully tuned palette reduces eye strain while keeping contrast high for readability.',
    icon: Sparkles,
  },
  {
    title: 'Feels realtime',
    desc: 'Snappy UI interactions with optimistic updates make chats feel instant and responsive.',
    icon: MessageSquare,
  },
  {
    title: 'Privacy-aware',
    desc: 'Built with a security-first mindset and sensible defaults for modern teams and communities.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="relative w-full border-t border-slate-800/60 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.20),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Why teams choose NovaChat</h2>
          <p className="mt-3 text-slate-300">Everything you expect from a modern chat application, in a focused and elegant package.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 shadow-sm hover:shadow-blue-900/20 hover:border-blue-700/50 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-gradient-to-br from-blue-500/30 to-indigo-500/30 p-2 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
