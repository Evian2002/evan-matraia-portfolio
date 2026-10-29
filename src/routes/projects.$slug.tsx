import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Atom,
  Box,
  Braces,
  Clapperboard,
  Code2,
  CreditCard,
  FileCode2,
  Gamepad2,
  Github,
  Layers,
  LayoutDashboard,
  Maximize2,
  MousePointer2,
  Paintbrush,
  Palette,
  PenTool,
  Play,
  RotateCcw,
  Server,
  Smartphone,
  Wind,
  X,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from "lucide-react";
import { HomeNav } from "@/features/home/components/HomeNav";
import { githubUrl, projects } from "@/features/home/content";

const images = import.meta.glob("@/assets/*.{png,jpg,jpeg,webp}", { eager: true });
const videos = import.meta.glob("@/assets/*.{mp4,mov}", { eager: true });

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Project not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This project doesn't exist or has been removed.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  ),
});

function getImage(src: string | undefined) {
  if (!src) return null;
  const imagePath = `/src/assets/${src}`;
  const data = (images[imagePath] as any)?.default;
  return data ?? null;
}

function getVideo(src: string | undefined) {
  if (!src) return null;
  const videoPath = `/src/assets/${src}`;
  const data = (videos[videoPath] as any)?.default;
  return data ?? null;
}

function ImageLightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const clampScale = (value: number) => Math.min(4, Math.max(1, value));

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScale((s) => clampScale(s - e.deltaY * 0.002));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    if (scale <= 1) setPos({ x: 0, y: 0 });
  }, [scale]);

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (scale <= 1) return;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
    };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    setPos({
      x: dragRef.current.origX + (e.clientX - dragRef.current.startX),
      y: dragRef.current.origY + (e.clientY - dragRef.current.startY),
    });
  };

  const handlePointerUp = () => {
    dragRef.current = null;
    setDragging(false);
  };

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale((s) => clampScale(s + 0.5));
          }}
          aria-label="Zoom in"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale((s) => clampScale(s - 0.5));
          }}
          aria-label="Zoom out"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale(1);
            setPos({ x: 0, y: 0 });
          }}
          aria-label="Reset zoom"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <RotateCcw className="h-5 w-5" />
        </button>
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div
        ref={viewportRef}
        className={`relative max-h-[90vh] max-w-full touch-none overflow-hidden rounded-2xl ${
          scale > 1 ? (dragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
        }`}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <img
          src={src}
          alt=""
          draggable={false}
          className="max-h-[90vh] max-w-full select-none object-contain"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transition: dragging ? "none" : "transform 0.15s ease-out",
          }}
        />
      </div>

      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-xs text-white/80">
        Scroll or use +/− to zoom · drag to pan
      </p>
    </div>
  );
}

const stackIcons: Record<string, LucideIcon> = {
  React: Atom,
  TypeScript: FileCode2,
  JavaScript: FileCode2,
  PHP: Braces,
  XAMPP: Server,
  "Tailwind CSS": Wind,
  "Node.js": Server,
  Stripe: CreditCard,
  Figma: PenTool,
  "UI Design": LayoutDashboard,
  Prototyping: MousePointer2,
  Mobile: Smartphone,
  Unity: Gamepad2,
  "C#": Code2,
  "Game Design": Gamepad2,
  Aseprite: Paintbrush,
  Illustrator: Palette,
  Blender: Box,
  "Substance Painter": Palette,
  "3D Modelling": Box,
  "After Effects": Clapperboard,
  "3D Animation": Clapperboard,
};

function ProjectDetail() {
  const { slug } = Route.useParams();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [trailerStarted, setTrailerStarted] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const project = projects.find((p) => p.slug === slug);

  useIsomorphicLayoutEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    setTrailerStarted(false);
    const video = heroVideoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    return () => {
      html.style.scrollBehavior = previous;
    };
  }, [slug]);

  if (!project) throw notFound();

  const heroImage = getImage(project.image);
  const heroVideo = getVideo("video" in project ? (project as any).video : undefined);

  return (
    <>
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    <main className="min-h-screen bg-background font-sans">
      <HomeNav />
      <div className="pt-16">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-24">
          <div className="lg:grid lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h1 className="text-2xl font-bold leading-tight text-foreground">
                {project.title}
              </h1>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
                {project.tag}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-8">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => {
                    const Icon = stackIcons[tech] ?? Layers;
                    return (
                      <li
                        key={tech}
                        className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </aside>

            <div className="mt-14 space-y-16 lg:mt-0">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
                {heroVideo ? (
                  <>
                    <video
                      ref={heroVideoRef}
                      src={heroVideo}
                      controls={trailerStarted}
                      loop
                      playsInline
                      poster={heroImage ?? undefined}
                      onPlay={() => setTrailerStarted(true)}
                      className="w-full"
                    />
                    {!trailerStarted && (
                      <button
                        type="button"
                        onClick={() => heroVideoRef.current?.play()}
                        aria-label="Play trailer"
                        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 transition hover:bg-black/40"
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
                          <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
                        </span>
                      </button>
                    )}
                  </>
                ) : heroImage ? (
                  <>
                    <img
                      src={heroImage}
                      alt={project.title}
                      className="w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setLightboxImage(heroImage)}
                      aria-label={`Expand ${project.title}`}
                      className="absolute right-3 top-3 flex cursor-pointer items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white opacity-100 transition hover:bg-black/90 sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      Click to expand
                    </button>
                  </>
                ) : (
                  <div
                    className="aspect-video w-full"
                    style={{ background: project.bg }}
                  />
                )}
              </div>

              {project.sections.map((section, idx) => {
                const sectionImage = getImage(section.image);

                return (
                  <figure key={idx} className="space-y-4">
                    <figcaption>
                      <h2 className="text-xl font-bold text-foreground">
                        {section.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {section.description}
                      </p>
                    </figcaption>
                    {sectionImage ? (
                      <div className="group relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
                        <img
                          src={sectionImage}
                          alt={section.title}
                          className="w-full rounded-xl object-cover"
                          style={{
                            opacity: 0,
                            animation: `zoomIn 0.6s ease-out ${0.15 * (idx + 1)}s both`,
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => setLightboxImage(sectionImage)}
                          aria-label={`Expand ${section.title}`}
                          className="absolute right-3 top-3 flex cursor-pointer items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white opacity-100 transition hover:bg-black/90 sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100"
                        >
                          <Maximize2 className="h-3.5 w-3.5" />
                          Click to expand
                        </button>
                      </div>
                    ) : (
                      <div className="aspect-[4/3] w-full rounded-2xl bg-muted" />
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-2xl px-4">
          <ArrowUpRight className="mx-auto h-8 w-8" />
          <h2 className="mt-4 text-2xl font-bold">Interested in this project?</h2>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Let's create something great together.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition hover:opacity-90"
          >
            Get in touch
          </Link>
          <div className="mt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-primary-foreground/70 transition hover:text-primary-foreground"
            >
              <Github className="h-4 w-4" />
              View source on GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
