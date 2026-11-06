import { createContext, useContext, type ReactNode } from "react";
import { works } from "../data/works";

export const WorkContext = createContext<(index: number) => void>(() => {});

type Props = { index: number; left: number; top: number; children: ReactNode };

/** Positions a work artwork on the artboard and makes it open in the viewer. */
export function WorkSlot({ index, left, top, children }: Props) {
  const open = useContext(WorkContext);
  const work = works[index];
  return (
    <button
      type="button"
      onClick={() => open(index)}
      aria-label={`View ${work.title}`}
      className="work-slot group absolute cursor-zoom-in text-left"
      style={{ left, top, width: work.width, height: work.height }}
    >
      {children}
      <span className="work-slot__tag" aria-hidden="true">
        {work.title}
      </span>
    </button>
  );
}
