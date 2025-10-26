import { useMemo, useState, useRef, useEffect } from 'react';
import { Users, Settings, Send, MessageSquare } from 'lucide-react';

const seedGroups = [
  { id: 'g1', name: 'General', unread: 2 },
  { id: 'g2', name: 'Design', unread: 0 },
  { id: 'g3', name: 'Development', unread: 5 },
  { id: 'g4', name: 'Community', unread: 0 },
];

const seedMessages = {
  g1: [
    { id: 'm1', author: 'Alex', content: 'Welcome to NovaChat 👋', time: '09:20' },
    { id: 'm2', author: 'Jamie', content: 'Loving the dark + blue vibe already.', time: '09:22' },
  ],
  g2: [
    { id: 'm3', author: 'Sam', content: 'New icon set ready for review.', time: '08:10' },
  ],
  g3: [
    { id: 'm4', author: 'Taylor', content: 'Deployed a new build to staging.', time: '10:02' },
    { id: 'm5', author: 'Riley', content: 'Type-safety improvements merged.', time: '10:15' },
  ],
  g4: [
    { id: 'm6', author: 'Morgan', content: 'Welcome newcomers! 🎉', time: 'Yesterday' },
  ],
};

export default function ChatDashboard() {
  const [groups, setGroups] = useState(seedGroups);
  const [activeId, setActiveId] = useState('g1');
  const [messages, setMessages] = useState(seedMessages);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  const activeMessages = useMemo(() => messages[activeId] || [], [messages, activeId]);
  const activeGroup = useMemo(() => groups.find(g => g.id === activeId), [groups, activeId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeMessages.length]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const newMsg = { id: crypto.randomUUID(), author: 'You', content: trimmed, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => ({ ...prev, [activeId]: [...(prev[activeId] || []), newMsg] }));
    setInput('');
    setGroups(prev => prev.map(g => (g.id === activeId ? { ...g, unread: 0 } : g)));
  };

  return (
    <div className="grid h-[calc(100vh-4rem)] w-full grid-cols-12 bg-slate-950">
      <aside className="col-span-3 border-r border-slate-800/60 bg-slate-950/60">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-300" />
            <span className="text-sm font-medium text-slate-200">Your groups</span>
          </div>
          <button className="rounded-md p-2 text-slate-400 hover:text-white hover:bg-slate-800/70 transition" aria-label="Settings">
            <Settings className="h-4 w-4" />
          </button>
        </div>
        <div className="px-3 pb-3">
          <input placeholder="Search groups" className="w-full rounded-md border border-slate-800/60 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-700/70" />
        </div>
        <div className="space-y-1 px-2">
          {groups.map((g) => (
            <button key={g.id} onClick={() => setActiveId(g.id)} className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition ${activeId === g.id ? 'bg-blue-600/20 text-white ring-1 ring-inset ring-blue-500/40' : 'text-slate-300 hover:bg-slate-800/60'}`}>
              <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${activeId === g.id ? 'bg-blue-400' : 'bg-slate-600'}`} />
                <span className="text-sm font-medium">{g.name}</span>
              </div>
              {g.unread > 0 && (
                <span className="rounded-full bg-blue-600/30 px-2 py-0.5 text-xs text-blue-200">{g.unread}</span>
              )}
            </button>
          ))}
        </div>
      </aside>

      <main className="col-span-9 flex h-full flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
        <div className="flex items-center justify-between border-b border-slate-800/60 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 ring-1 ring-inset ring-white/10" />
            <div>
              <h3 className="text-sm font-semibold text-white">{activeGroup?.name}</h3>
              <p className="text-xs text-slate-400">Group chat</p>
            </div>
          </div>
          <div className="text-xs text-slate-400">Secure • Low-latency UI</div>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {activeMessages.length === 0 && (
            <div className="mt-20 rounded-xl border border-dashed border-slate-800/60 bg-slate-900/30 p-8 text-center">
              <MessageSquare className="mx-auto h-6 w-6 text-slate-400" />
              <p className="mt-2 text-sm text-slate-400">No messages yet. Say hello 👋</p>
            </div>
          )}

          {activeMessages.map((m, idx) => (
            <div key={m.id} className="group flex items-start gap-3">
              <div className="h-9 w-9 flex-shrink-0 rounded-md bg-slate-800/80 ring-1 ring-inset ring-white/10" />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">{m.author}</span>
                  <span className="text-xs text-slate-500">{m.time}</span>
                </div>
                <p className="mt-1 whitespace-pre-wrap break-words text-slate-200">{m.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800/60 p-4">
          <div className="flex items-center gap-2 rounded-lg border border-slate-800/60 bg-slate-900/60 px-3 py-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              placeholder={`Message #${activeGroup?.name ?? ''}`}
              className="flex-1 bg-transparent text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
            <button onClick={sendMessage} className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-md shadow-blue-900/30 hover:from-blue-500 hover:to-indigo-500 transition">
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
