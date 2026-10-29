import * as React from "react";

type HoverFloatProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function HoverFloat({ children, className, style, ...props }: HoverFloatProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className={className ? `hover-float ${className}` : "hover-float"}
      style={
        {
          ...style,
          ["--hf-x" as any]: 0,
          ["--hf-y" as any]: 0,
        } as React.CSSProperties
      }
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        el.style.setProperty("--hf-x", x.toFixed(4));
        el.style.setProperty("--hf-y", y.toFixed(4));

        props.onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        const el = ref.current;
        if (el) {
          el.style.setProperty("--hf-x", "0");
          el.style.setProperty("--hf-y", "0");
        }
        props.onMouseLeave?.(e);
      }}
      {...props}
    >
      {children}
    </div>
  );
}

