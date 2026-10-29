import portrait from "@/assets/portrait.png";
import { HeroTrail } from "@/features/home/components/HeroTrail";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen bg-background pt-48 pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-50 px-4 md:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
            <span className="text-7xl md:text-7xl">Hello,</span>
            <br />
            I'm <span className="font-bold">Evan Matraia.</span>
            <br />
            Multimedia{" "}
            <span className="font-black tracking-tight">Designer</span>
            <br />
            Based In <span className="font-bold">Lithuania.</span>
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            I am an adaptable thinker who specializes in multimedia fields. I am always
            open to work on tough tasks and will adapt to any project. Take a look at
            my work and see if we are the right fit to work with each other.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Portfolio
            </a>
            <a
              href="#contact-me"
              className="inline-flex items-center justify-center rounded-md border-2 border-foreground px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="self-start rounded-3xl border-8 border-primary p-1.5">
          <img
            src={portrait}
            alt="Portrait of Evan Matraia"
            width={320}
            height={384}
            className="h-96 w-80 rounded-2xl object-cover"
          />
        </div>
      </div>
      <HeroTrail />
    </section>
  );
}
