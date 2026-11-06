import { scrollToSection } from "../lib/scroll";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tools", label: "Tools" },
  { id: "works", label: "Works" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function FloatingNav({ visible, active }: { visible: boolean; active: string }) {
  return (
    <nav
      aria-label="Sections"
      className={`floating-nav fixed top-3 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-full border-[3px] border-black bg-[#dfef00] px-2 py-1 shadow-[4px_4px_0_#000] ${
        visible ? "is-visible" : ""
      }`}
    >
      {links.map((l) => (
        <button
          key={l.id}
          type="button"
          onClick={() => scrollToSection(l.id)}
          aria-current={active === l.id ? "true" : undefined}
          className="shrink-0 cursor-pointer rounded-full px-3 py-1 font-['Love_Ya_Like_A_Sister:Regular'] text-base text-black transition-colors hover:bg-black/10 aria-[current]:bg-black aria-[current]:text-[#dfef00] sm:text-xl"
        >
          {l.label}
        </button>
      ))}
    </nav>
  );
}
