import { ReactNode } from "react";
import clsx from "clsx";

export default function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={clsx("py-14 md:py-20", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <header className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
            {subtitle && <p className="opacity-80 mt-1">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
