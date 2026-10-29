import { Logo } from "@/features/home/components/Logo";

export function HomeNav() {
  const items = ["Skills", "Projects", "Contact Me"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="flex items-center gap-8 text-sm font-medium text-primary-foreground">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:opacity-80"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
