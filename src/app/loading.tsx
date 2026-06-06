export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="glass flex flex-col items-center gap-4 rounded-[2rem] px-8 py-10 shadow-2xl shadow-cyan-500/10">
        <div className="h-14 w-14 rounded-full border border-white/15 border-t-cyan-400 animate-spin" />
        <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Loading portfolio</p>
      </div>
    </div>
  );
}
