"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : preferred;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded-md border px-2 py-1 text-sm"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
