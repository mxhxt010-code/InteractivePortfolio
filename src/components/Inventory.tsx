import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  imgDeviconFigma,
  imgDeviconPython,
  imgFluentMdl2GitHubLogo,
  imgGroup,
  imgGroup1,
  imgLogosAdobeIllustrator,
  imgLogosAdobePhotoshop,
  imgLogosCursorIcon,
  imgMaterialIconThemePytorch,
  imgMdiMicrosoftVisualStudioCode,
} from "../figma/sections";
import { ARTBOARD_WIDTH } from "./Artboard";

/* Slot interiors measured from the inventory artwork (image 237), in artboard pixels. */
const COLS = [386, 461, 536, 610, 685, 760, 835, 910, 985];
const ROWS = [542, 617, 692, 783]; // three storage rows + hotbar
const SLOT = 65;
const SLOT_COUNT = COLS.length * ROWS.length;

type Item = {
  id: string;
  name: string;
  lore: string;
  rarity: "common" | "uncommon" | "rare" | "epic";
  w: number;
  h: number;
  icon: ReactNode;
};

const img = (src: string) => <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />;

// Built lazily: the asset constants come from a module that also imports this one.
let itemsCache: Record<string, Item> | null = null;
const getItems = () => (itemsCache ??= buildItems());

function buildItems(): Record<string, Item> {
  return {
  illustrator: { id: "illustrator", name: "Adobe Illustrator", lore: "Vectors, logos & brand marks", rarity: "rare", w: 50, h: 49, icon: img(imgLogosAdobeIllustrator) },
  photoshop: { id: "photoshop", name: "Adobe Photoshop", lore: "Posters, collage & retouching", rarity: "rare", w: 52, h: 51, icon: img(imgLogosAdobePhotoshop) },
  cursor: { id: "cursor", name: "Cursor", lore: "AI-assisted code editor", rarity: "uncommon", w: 40, h: 46, icon: img(imgLogosCursorIcon) },
  pytorch: { id: "pytorch", name: "PyTorch", lore: "Deep learning experiments", rarity: "epic", w: 45, h: 45, icon: img(imgMaterialIconThemePytorch) },
  figma: { id: "figma", name: "Figma", lore: "UI/UX & interface design", rarity: "epic", w: 53, h: 53, icon: img(imgDeviconFigma) },
  github: { id: "github", name: "GitHub", lore: "Version control & collabs", rarity: "common", w: 51, h: 51, icon: img(imgFluentMdl2GitHubLogo) },
  python: { id: "python", name: "Python", lore: "ML, data science & scripts", rarity: "epic", w: 52, h: 52, icon: img(imgDeviconPython) },
  vscode: { id: "vscode", name: "VS Code", lore: "Everyday code editor", rarity: "common", w: 49, h: 49, icon: img(imgMdiMicrosoftVisualStudioCode) },
  canva: {
    id: "canva",
    name: "Canva",
    lore: "Quick socials & decks",
    rarity: "uncommon",
    w: 49,
    h: 49,
    icon: (
      <div className="absolute inset-0 overflow-clip">
        <div
          className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[49px_49px]"
          style={{ maskImage: `url("${imgGroup}")` }}
        >
          {img(imgGroup1)}
        </div>
      </div>
    ),
  },
  };
}

// Initial layout follows the design: four tools on the third storage row, five in the hotbar.
function initialSlots(): (string | null)[] {
  const slots: (string | null)[] = Array(SLOT_COUNT).fill(null);
  ["illustrator", "photoshop", "cursor", "pytorch"].forEach((id, i) => (slots[18 + i] = id));
  ["figma", "github", "python", "vscode", "canva"].forEach((id, i) => (slots[27 + i] = id));
  return slots;
}

const slotPos = (i: number) => ({ left: COLS[i % 9], top: ROWS[Math.floor(i / 9)] });
const isHotbar = (i: number) => i >= 27;

const RARITY_COLOR: Record<Item["rarity"], string> = {
  common: "#ffffff",
  uncommon: "#ffff55",
  rare: "#55ffff",
  epic: "#ff55ff",
};

function ItemIcon({ item }: { item: Item }) {
  return (
    <div className="relative" style={{ width: item.w, height: item.h }}>
      {item.icon}
    </div>
  );
}

export function Inventory() {
  const ITEMS = getItems();
  const rootRef = useRef<HTMLDivElement>(null);
  const [slots, setSlots] = useState(initialSlots);
  const [held, setHeld] = useState<{ id: string; from: number } | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const toLocal = useCallback((clientX: number, clientY: number) => {
    const rect = rootRef.current!.getBoundingClientRect();
    const scale = rect.width / ARTBOARD_WIDTH;
    return { x: (clientX - rect.left) / scale, y: (clientY - rect.top) / scale };
  }, []);

  // Held item follows the pointer; Escape or clicking outside puts it back.
  useEffect(() => {
    if (!held) return;
    const onMove = (e: PointerEvent) => setCursor(toLocal(e.clientX, e.clientY));
    const putBack = () => {
      setSlots((s) => {
        const next = [...s];
        const target = next[held.from] === null ? held.from : next.findIndex((v) => v === null);
        next[target] = held.id;
        return next;
      });
      setHeld(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && putBack();
    const onDown = (e: PointerEvent) => {
      if (!(e.target as HTMLElement).closest("[data-slot]")) putBack();
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [held, toLocal]);

  const onSlotClick = (i: number, e: MouseEvent<HTMLButtonElement>) => {
    const current = slots[i];
    if (e.clientX || e.clientY) setCursor(toLocal(e.clientX, e.clientY));

    // Shift-click quick-moves between storage and hotbar, like the real thing.
    if (!held && current && e.shiftKey) {
      const range = isHotbar(i) ? [0, 27] : [27, SLOT_COUNT];
      const target = slots.findIndex((v, k) => v === null && k >= range[0] && k < range[1]);
      if (target >= 0) {
        const next = [...slots];
        next[target] = current;
        next[i] = null;
        setSlots(next);
      }
      return;
    }

    if (!held) {
      if (!current) return;
      const next = [...slots];
      next[i] = null;
      setSlots(next);
      setHeld({ id: current, from: i });
      return;
    }

    // Place the held item, swapping with whatever was in the slot.
    const next = [...slots];
    next[i] = held.id;
    setSlots(next);
    setHeld(current ? { id: current, from: i } : null);
  };

  const hoveredItem = hover !== null && !held && slots[hover] ? ITEMS[slots[hover]!] : null;
  const hoveredPos = hover !== null ? slotPos(hover) : null;

  return (
    <div ref={rootRef} className="inventory pointer-events-none absolute inset-0" aria-label="Tool inventory">
      {slots.map((id, i) => {
        const { left, top } = slotPos(i);
        const item = id ? ITEMS[id] : null;
        return (
          <button
            key={i}
            type="button"
            data-slot=""
            aria-label={item ? `${item.name} — ${item.lore}` : held ? "Empty slot — place item" : "Empty slot"}
            className="inventory__slot pointer-events-auto absolute flex items-center justify-center"
            style={{ left, top, width: SLOT, height: SLOT, cursor: held || item ? "pointer" : "default" }}
            onClick={(e) => onSlotClick(i, e)}
            onPointerEnter={() => setHover(i)}
            onPointerLeave={() => setHover((h) => (h === i ? null : h))}
            onFocus={() => setHover(i)}
            onBlur={() => setHover((h) => (h === i ? null : h))}
          >
            {item && <ItemIcon item={item} />}
          </button>
        );
      })}

      {hoveredItem && hoveredPos && (
        <div
          className="mc-tooltip absolute z-20"
          style={{ left: hoveredPos.left + SLOT + 6, top: hoveredPos.top - 30 }}
          role="tooltip"
        >
          <p style={{ color: RARITY_COLOR[hoveredItem.rarity] }}>{hoveredItem.name}</p>
          <p className="mc-tooltip__lore">{hoveredItem.lore}</p>
          <p className="mc-tooltip__meta">{isHotbar(hover!) ? "Hotbar · equipped" : "Inventory"}</p>
        </div>
      )}

      {held && (
        <div
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2 drop-shadow-[3px_3px_0_rgba(0,0,0,0.35)]"
          style={{ left: cursor.x, top: cursor.y }}
          aria-hidden="true"
        >
          <ItemIcon item={ITEMS[held.id]} />
        </div>
      )}

      <p className="inventory__hint absolute left-[386px] top-[858px] w-[664px] text-center">
        Click to pick up · click to place · shift-click to quick-move
      </p>
    </div>
  );
}
