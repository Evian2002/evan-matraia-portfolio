import { Github } from "lucide-react";
import { Logo } from "@/features/home/components/Logo";
import { githubUrl } from "@/features/home/content";

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 text-xs">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-semibold">Evanmatraia</span>
        </div>
        <div className="text-right">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
          >
            <Github className="h-3.5 w-3.5" />
            View source on GitHub
          </a>
          <p className="mt-1">@evanmatraia 2026</p>
        </div>
      </div>
    </footer>
  );
}
