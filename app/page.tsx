"use client";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950"
        />
        <Section className="relative pt-20 pb-24">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase opacity-70">
                CS Student & Full-stack Developer
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
                Hi, I’m{" "}
                <span className="underline decoration-4 decoration-indigo-500">
                  Masyn Roth
                </span>.
              </h1>
              <p className="mt-4 text-lg opacity-90">
                I build fast, accessible web apps with Next.js and TypeScript.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-md border transition hover:shadow-sm"
                >
                  View Projects
                </a>

                {/* Resume */}
                <a
                  href="/MasynRoth-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="px-4 py-2 rounded-md border transition hover:shadow-sm"
                >
                  Resume
                </a>

                {/* Contact toggle */}
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="px-4 py-2 rounded-md bg-indigo-600 text-white dark:bg-indigo-500 transition hover:opacity-90"
                  aria-expanded={showContact}
                  aria-controls="contact-card"
                >
                  {showContact ? "Hide Contact" : "Contact"}
                </button>
              </div>

              {showContact && (
                <div
                  id="contact-card"
                  className="mt-4 rounded-lg border bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm p-4 space-y-2 text-sm shadow-md"
                >
                  <p>📞 (724) 888-6655</p>
                  <p>
                    💼{" "}
                    <a
                      href="https://www.linkedin.com/in/masyn-roth-a17815326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      linkedin.com/in/masyn-roth-a17815326
                    </a>
                  </p>
                  <p>
                    📧{" "}
                    <a href="mailto:masyn.roth@icloud.com" className="underline">
                      masyn.roth@icloud.com
                    </a>
                  </p>
                </div>
              )}
            </div>

            <div className="justify-self-center md:justify-self-end relative">
              <div
                aria-hidden
                className="absolute inset-0 translate-x-2 translate-y-2 rounded-full blur-2xl bg-indigo-300/30 dark:bg-indigo-600/20"
              />
              <Image
                src="/me.jpg"
                alt="Masyn Roth"
                width={224}
                height={224}
                className="relative h-40 w-40 md:h-56 md:w-56 rounded-full border shadow-lg object-cover ring-4 ring-white dark:ring-zinc-900"
                priority
              />
            </div>
          </div>
        </Section>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="group rounded-xl border bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </Section>

      {/* About / Highlights & Education */}
      <Section id="about" title="About Me:" >
        <div className="grid gap-8 md:grid-cols-[280px,1fr] items-start">
          {/* Highlights card */}
          <div className="rounded-xl border bg-gradient-to-br from-indigo-100 to-rose-100 dark:from-indigo-900/40 dark:to-rose-900/30 p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
                <span>Based in Pittsburgh, PA (remote-friendly)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span>
                  Lua App Developer @ Cressida Studios (Mar 2024–Present). Reached 1M+ users and
                  $30k+ revenue; led features, perf optimizations, and stability improvements.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>
                  Built a Python + SQL Discord analytics bot: real-time ingest, storage,
                  and reporting.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>
                  Tooling: JS/TS (React/Next, Node), Python, Java; SQL (Postgres/MySQL), MongoDB;
                  AI/ML (PyTorch, TensorFlow, OpenAI APIs).
                </span>
              </li>
            </ul>
          </div>

          {/* Bio + education */}
          <div className="prose dark:prose-invert max-w-none">
            <p>
              I’m a full-stack developer focused on product quality, DX, and performance. I also
              bring a graphics design background, so I care deeply about spacing, rhythm, and
              motion to make interfaces feel great.
            </p>

            <h3 className="mt-6">Education</h3>
            <ul>
              <li>
                <strong>Franklin University — B.S. Computer Science</strong> (Sep 2025–Jun 2027)
                — Pursuing Bachelor&apos;s degree.
              </li>
              <li>
                <strong>Community College of Beaver County — Fundamental CS Courses</strong> (Sep 2023–Jun 2025).
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
