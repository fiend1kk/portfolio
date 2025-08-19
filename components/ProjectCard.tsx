import Image from "next/image";
import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: readonly string[]; // <- allow readonly
  image?: string;
  repo?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-800">
        {project.image ? (
          <Image src={project.image} alt="" fill className="object-cover" />
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm opacity-90">{project.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li key={s} className="text-xs rounded-md border px-2 py-1">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-3">
          {project.demo && (
            <Link href={project.demo} className="text-sm underline" target="_blank">
              Live
            </Link>
          )}
          {project.repo && (
            <Link href={project.repo} className="text-sm underline" target="_blank">
              Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
