import { useCallback, useEffect, useRef, useState } from "react";

const CODE = [
  "$ cat bye.py",
  "def farewell(you):",
  "  msg = render('BYE')",
  "  pal = summon('girl')",
  "  return show(msg, pal)",
  "",
  "farewell('visitor')",
  "$ python bye.py --build",
];
const SOURCE = CODE.join("\n");

export type ByePhase = "idle" | "typing" | "compiling" | "done";

/** Drives the "type code → compile → reveal BYE" sequence once the computer scrolls into view. */
export function useByeSequence() {
  const ref = useRef<HTMLButtonElement>(null);
  const [phase, setPhase] = useState<ByePhase>("idle");
  const [typed, setTyped] = useState(0);
  const [progress, setProgress] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun((r) => (r === 0 ? 1 : r));
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (run === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(SOURCE.length);
      setProgress(100);
      setPhase("done");
      return;
    }
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(window.setTimeout(r, ms)));

    (async () => {
      setPhase("typing");
      setTyped(0);
      setProgress(0);
      await wait(350);
      for (let i = 1; i <= SOURCE.length; i++) {
        if (cancelled) return;
        setTyped(i);
        const ch = SOURCE[i - 1];
        await wait(ch === "\n" ? 140 : 22 + Math.random() * 28);
      }
      if (cancelled) return;
      setPhase("compiling");
      for (let p = 0; p <= 100; p += 5) {
        if (cancelled) return;
        setProgress(p);
        await wait(55);
      }
      await wait(450);
      if (!cancelled) setPhase("done");
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [run]);

  const replay = useCallback(() => setRun((r) => r + 1), []);
  return { ref, phase, typed, progress, replay };
}

type Props = { phase: ByePhase; typed: number; progress: number };

/* Screen interior of image 240, in its 499px box (measured from the artwork). */
const SCREEN = { left: 121.4, top: 116.4, width: 255.4, height: 147.2 };

export function ByeScreen({ phase, typed, progress }: Props) {
  const bars = Math.round(progress / 10);
  return (
    <div
      aria-hidden="true"
      className="bye-screen absolute overflow-hidden"
      data-phase={phase}
      style={SCREEN}
    >
      <pre className="bye-screen__code">
        {SOURCE.slice(0, typed)}
        {phase === "compiling" || phase === "done" ? (
          <>
            {"\n"}
            <span className="text-[#f8e996]">build [{"█".repeat(bars)}{"·".repeat(10 - bars)}] {progress}%</span>
            {progress === 100 && <span className="text-[#b7ef00]">{"\n"}✓ compiled — launching…</span>}
          </>
        ) : (
          <span className="bye-screen__caret">▌</span>
        )}
      </pre>
    </div>
  );
}
