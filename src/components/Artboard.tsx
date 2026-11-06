import type { ReactNode } from "react";

export const ARTBOARD_WIDTH = 1440;
export const ARTBOARD_HEIGHT = 1024;

type Props = { id: string; label: string; scale: number; children: ReactNode };

/** A 1440×1024 design artboard scaled fluidly to the viewport width. */
export function Artboard({ id, label, scale, children }: Props) {
  return (
    <section
      id={id}
      aria-label={label}
      data-section=""
      className="relative w-full overflow-hidden bg-[#f3ebdd]"
      style={{ height: ARTBOARD_HEIGHT * scale }}
    >
      <div
        className="artboard absolute top-0 left-0 overflow-clip bg-[#f3ebdd]"
        style={{
          width: ARTBOARD_WIDTH,
          height: ARTBOARD_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </section>
  );
}
