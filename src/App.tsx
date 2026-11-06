import { useCallback, useEffect, useState } from "react";
import { Artboard, ARTBOARD_WIDTH } from "./components/Artboard";
import { FloatingNav } from "./components/FloatingNav";
import { WorkContext } from "./components/WorkSlot";
import { WorkViewer } from "./components/WorkViewer";
import {
  AboutArt,
  EndArt,
  ExperienceArt,
  HeroArt,
  ToolsArt,
  WorkBiologicalArchives,
  WorkCyberEvent,
  WorkIiitWebsite,
  WorkKanye,
  WorkPakkam,
  WorkSawako,
  WorksArt,
} from "./figma/sections";

const artworks = [WorkSawako, WorkBiologicalArchives, WorkKanye, WorkCyberEvent, WorkPakkam, WorkIiitWebsite];

const sections = [
  { id: "home", label: "Portfolio", Art: HeroArt },
  { id: "about", label: "About me", Art: AboutArt },
  { id: "tools", label: "Tools I know", Art: ToolsArt },
  { id: "works", label: "My works", Art: WorksArt },
  { id: "experience", label: "Experience and achievements", Art: ExperienceArt },
  { id: "contact", label: "The end — let's connect", Art: EndArt },
];

function useArtboardScale() {
  const measure = () => document.documentElement.clientWidth / ARTBOARD_WIDTH;
  const [scale, setScale] = useState(measure);
  useEffect(() => {
    const onResize = () => setScale(measure());
    const ro = new ResizeObserver(onResize);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, []);
  return scale;
}

export default function App() {
  const scale = useArtboardScale();
  const [openWork, setOpenWork] = useState<number | null>(null);
  const [active, setActive] = useState("home");
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavVisible(window.scrollY > 70 * scale);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scale]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-section]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "");
            if (e.intersectionRatio >= 0.4) setActive(e.target.id);
          }
        }
      },
      { threshold: [0.1, 0.4] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const close = useCallback(() => setOpenWork(null), []);

  return (
    <WorkContext.Provider value={setOpenWork}>
      <FloatingNav visible={navVisible} active={active} />
      <main className="min-h-dvh w-full bg-[#f3ebdd]">
        {sections.map(({ id, label, Art }) => (
          <Artboard key={id} id={id} label={label} scale={scale}>
            <Art />
          </Artboard>
        ))}
      </main>
      <WorkViewer index={openWork} artworks={artworks} onClose={close} onChange={setOpenWork} />
    </WorkContext.Provider>
  );
}
