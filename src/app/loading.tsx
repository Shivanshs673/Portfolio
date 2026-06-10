export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="glass flex flex-col items-center gap-4 rounded-[2rem] px-8 py-10 shadow-2xl shadow-[#10B981]/5">
        <div className="h-14 w-14 rounded-full border border-white/10 border-t-[#10B981] animate-spin" />
        <p className="text-sm uppercase tracking-[0.4em] text-[#B8B8B8]">Loading portfolio</p>
      </div>
    </div>
  );
}
