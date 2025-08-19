"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors ${scrolled ? "backdrop-blur bg-white/70 dark:bg-zinc-900/70" : "bg-transparent"}`}>
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">Your Name</Link>
        <nav className="flex items-center gap-5">
          <a href="#projects" className="opacity-90 hover:opacity-100">Projects</a>
          <a href="#about" className="opacity-90 hover:opacity-100">About</a>
          <a href="#contact" className="opacity-90 hover:opacity-100">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
