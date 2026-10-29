import { skills, softwareTools } from "@/features/home/content";
import adobeIcon from "@/assets/adobe.png";
import affinityIcon from "@/assets/affinity.png";
import figmaIcon from "@/assets/figma.png";
import webflowIcon from "@/assets/webflow.png";
import javascriptIcon from "@/assets/jetbrains.png";
import jetbrainsIcon from "@/assets/javascript.png";
import davinciIcon from "@/assets/davinci.png";
import blenderIcon from "@/assets/blender.png";
import abletonIcon from "@/assets/ableton.png";
import { HoverFloat } from "@/features/home/components/HoverFloat";

const iconMap: Record<string, string> = {
  affinity: affinityIcon,
  figma: figmaIcon,
  webflow: webflowIcon,
  javascript: javascriptIcon,
  jetbrains: jetbrainsIcon,
  davinci: davinciIcon,
  blender: blenderIcon,
  ableton: abletonIcon,
};

const scaleMap: Record<string, string> = {
  blender: "object-contain",
};

const classMap: Record<string, string> = {
  adobe: "scale-125",
  davinci: "scale-85",
};

const defaultScale = "scale-125";

function IconToolCard({ tool }: { tool: (typeof softwareTools)[number] }) {
  const scaleClass = scaleMap[tool.icon ?? ""] || "object-cover";
  const sizeClass = classMap[tool.icon ?? ""] || "scale-80";
  const fontSizeClass = tool.icon === "davinci" ? "text-[11px]" : "";

  return (
    <>
      <div className="flex aspect-square h-[5rem] w-[5rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl">
        <img
          src={iconMap[tool.icon ?? ""] || adobeIcon}
          alt={tool.name}
          className={`h-full w-full rounded-2xl ${scaleClass} ${sizeClass}`}
        />
      </div>
      <span className={`mt-1 text-center text-xs font-semibold leading-tight text-white drop-shadow-sm whitespace-nowrap ${fontSizeClass}`}>
        {tool.name}
      </span>
    </>
  );
}

function EmojiToolCard({ tool }: { tool: (typeof softwareTools)[number] }) {
  return (
    <>
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold text-white shadow-sm"
        style={{ background: "bg" in tool ? (tool as any).bg : undefined }}
      >
        {"emoji" in tool ? (tool as any).emoji : null}
      </div>
      <span className="mt-2 text-center text-xs font-semibold leading-tight text-white drop-shadow-sm">
        {tool.name}
      </span>
    </>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="bg-primary py-15 text-primary-foreground">
      <div className="mx-auto max-w-10xl px-4 text-center">
        <h2 className="text-3xl font-light">
          My Preferred <span className="font-bold">Software</span>
        </h2>

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-7">
          {softwareTools.map((tool) => (
            <HoverFloat
              key={tool.name}
              className="glass-3d flex h-30 w-30 flex-col items-center justify-center rounded-2xl p-4"
            >
              {"icon" in tool ? (
                <IconToolCard tool={tool} />
              ) : (
                <EmojiToolCard tool={tool} />
              )}
            </HoverFloat>
          ))}
        </div>

        <h2 className="mt-16 text-3xl font-light">
          &amp; my <span className="font-bold">Skills</span>
        </h2>
        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <HoverFloat
              key={skill}
              className="glass-3d rounded-full px-6 py-2 text-sm font-semibold"
            >
              {skill}
            </HoverFloat>
          ))}
        </div>
      </div>
    </section>
  );
}
