export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Your Name</p>
        <ul className="flex gap-4">
          <li><a href="https://github.com/your" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://x.com/your" target="_blank" rel="noreferrer">X</a></li>
          <li><a href="https://www.linkedin.com/in/your" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}
