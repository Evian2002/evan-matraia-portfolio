import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/features/home/content";

// Dynamic imports for project images
const images = import.meta.glob("@/assets/*.{png,jpg,jpeg,webp}", { eager: true });

export function PortfolioSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-15 pt-15 text-center">
        <h2 className="text-3xl font-bold">My Portfolio</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A collection of the works that showcase a wide range of creative abilities.
        </p>
      </div>
      <div className="rounded-t-[5rem] bg-primary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const imagePath = project.image ? `/src/assets/${project.image}` : null;
            const imageData = imagePath ? (images[imagePath] as any)?.default : null;

            return (
              <article
                key={project.slug}
                className="glass-3d group relative overflow-hidden rounded-2xl p-3 transition hover:-translate-y-1"
              >
                <div className="aspect-[5/3] w-full overflow-hidden rounded-xl bg-muted">
                  {imageData ? (
                    <img
                      src={imageData}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full" style={{ background: project.bg }} />
                  )}
                </div>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  aria-label={`Open ${project.title}`}
                  className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background text-primary shadow transition group-hover:rotate-45 hover:opacity-80"
                >
                  <ArrowUpRight className="h-6 w-6" strokeWidth={3} />
                </Link>
                <div className="p-3 pt-4 text-primary-foreground">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-xs opacity-80">{project.tag}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
