"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Code2, FileText, Mail, Rocket } from "lucide-react";

import { navLinks, contactInfo } from "@/lib/data";

const quickActions = [
  { label: "View GitHub", href: contactInfo.github, icon: Code2 },
  { label: "Open Resume", href: "#resume", icon: FileText },
  { label: "Email Shivansh", href: `mailto:${contactInfo.email}`, icon: Mail },
  { label: "Jump to Projects", href: "#projects", icon: Rocket },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="fixed inset-0 z-[80] bg-slate-950/70 backdrop-blur-sm"
      overlayClassName="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
    >
      <div className="mx-auto mt-[12vh] w-[92vw] max-w-2xl rounded-[28px] border border-white/10 bg-slate-950/95 p-4 text-white shadow-2xl shadow-[#10B981]/5">
        <Command.Input
          autoFocus
          placeholder="Search sections, actions, or links..."
          className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-slate-500"
        />
        <Command.List className="mt-4 max-h-[55vh] overflow-y-auto pr-1">
          <Command.Empty className="px-3 py-8 text-sm text-slate-400">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="space-y-2 text-sm text-slate-300">
            {navLinks.map((item) => (
              <Command.Item
                key={item.href}
                onSelect={() => {
                  window.location.hash = item.href.slice(1);
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition hover:bg-white/8 aria-selected:bg-white/10"
              >
                {item.label}
                <span className="text-xs text-slate-500">{item.href}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Quick Actions" className="mt-4 space-y-2 text-sm text-slate-300">
            {quickActions.map((item) => {
              const Icon = item.icon;

              return (
                <Command.Item
                  key={item.label}
                  onSelect={() => {
                    if (item.href.startsWith("#")) {
                      window.location.hash = item.href.slice(1);
                    } else {
                      window.open(item.href, "_blank", "noopener,noreferrer");
                    }

                    setOpen(false);
                  }}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-white/8 aria-selected:bg-white/10"
                >
                  <Icon className="h-4 w-4 text-[#10B981]" />
                  {item.label}
                </Command.Item>
              );
            })}
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
