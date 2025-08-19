"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      <input name="name" placeholder="Your name" required className="border rounded-md px-3 py-2 bg-transparent" />
      <input type="email" name="email" placeholder="you@example.com" required className="border rounded-md px-3 py-2 bg-transparent" />
      <textarea name="message" placeholder="Tell me about your project…" required rows={5} className="border rounded-md px-3 py-2 bg-transparent" />
      <button disabled={status==="sending"} className="rounded-md px-4 py-2 border">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && <p className="text-green-600">Thanks! I’ll get back to you soon.</p>}
      {status === "error" && <p className="text-red-600">Something went wrong. Try again?</p>}
    </form>
  );
}
