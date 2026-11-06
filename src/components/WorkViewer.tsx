import { useEffect, useState, type ComponentType } from "react";
import { works } from "../data/works";

type Props = {
  index: number | null;
  artworks: ComponentType[];
  onClose: () => void;
  onChange: (index: number) => void;
};

function useViewport() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

export function WorkViewer({ index, artworks, onClose, onChange }: Props) {
  const { w, h } = useViewport();
  const count = works.length;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, count, onClose, onChange]);

  if (index === null) return null;
  const work = works[index];
  const Art = artworks[index];
  const wide = w >= 900;
  const maxW = wide ? w * 0.55 : w - 48;
  const maxH = wide ? h - 160 : h * 0.55;
  const scale = Math.min(maxW / work.width, maxH / work.height);

  return (
    <div
      className="viewer fixed inset-0 z-50 flex items-center justify-center bg-[#1b1206]/80 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
      onClick={onClose}
    >
      <div
        className={`flex max-h-full items-center gap-10 ${wide ? "flex-row" : "flex-col gap-6"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          key={index}
          className="viewer__art shrink-0 shadow-[12px_12px_0_#000] outline-4 outline-black"
          style={{ width: work.width * scale, height: work.height * scale }}
        >
          <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: work.width, height: work.height }}>
            <Art />
          </div>
        </div>

        <div className="w-full max-w-[340px] border-4 border-black bg-[#f3ebdd] p-6 text-black shadow-[8px_8px_0_#dfef00]">
          <p className="font-['Love_Ya_Like_A_Sister:Regular'] text-lg text-[#7a1e2c]">{work.kind}</p>
          <h2 className="mt-2 font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace] text-3xl leading-tight uppercase">
            {work.title}
          </h2>
          <p className="mt-4 font-['Helvetica_Light:Regular','Helvetica_Neue',Helvetica,Arial,sans-serif] text-base leading-relaxed [font-weight:300]">
            {work.description}
          </p>
          <div className="mt-6 flex items-center justify-between font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace]">
            <button
              type="button"
              className="pixel-btn"
              onClick={() => onChange((index - 1 + count) % count)}
              aria-label="Previous work"
            >
              ← Prev
            </button>
            <span className="text-sm tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="pixel-btn"
              onClick={() => onChange((index + 1) % count)}
              aria-label="Next work"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="pixel-btn absolute top-5 right-5 font-['Home_Video:Regular','Home_Video','Pixelify_Sans',monospace]"
        aria-label="Close viewer"
      >
        Close ✕
      </button>
    </div>
  );
}
