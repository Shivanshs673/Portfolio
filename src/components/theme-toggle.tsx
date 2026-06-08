"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full border border-card-border bg-card/30 text-foreground transition-all hover:bg-card/50"
      aria-label="Toggle Theme"
    >
      <motion.div
        className="absolute flex items-center justify-center"
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <Sun className="h-5 w-5 text-amber-500" />
      </motion.div>
      <motion.div
        className="absolute flex items-center justify-center"
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
        }}
        transition={{ duration: 0.2 }}
      >
        <Moon className="h-5 w-5 text-cyan-400" />
      </motion.div>
    </Button>
  );
}
