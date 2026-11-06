export type Work = {
  title: string;
  kind: string;
  description: string;
  width: number;
  height: number;
};

// Order matches the artwork components rendered in the Works artboard.
export const works: Work[] = [
  {
    title: "Sawako",
    kind: "Poster · Instagram post",
    description:
      "A playful fan poster for Kimi ni Todoke — layered type, hand-cut collage and a soft butter palette.",
    width: 187.252,
    height: 234,
  },
  {
    title: "Biological Archives",
    kind: "Poster",
    description: "An editorial poster study in bold red, mixing archival imagery with tiny technical labels.",
    width: 149.103,
    height: 211,
  },
  {
    title: "Kanye",
    kind: "Poster · A4",
    description: "A music poster built around oversized display lettering and a monochrome portrait.",
    width: 165,
    height: 233.496,
  },
  {
    title: "Cybersecurity Awareness Event",
    kind: "Event poster · MSA × IEEE",
    description:
      "Promotional poster for an IIIT Dharwad cybersecurity event — expert talk, team competition and hands-on workshop.",
    width: 156,
    height: 195,
  },
  {
    title: "Pakkam",
    kind: "Web design · Government services",
    description: "A civic services platform designed to make government processes approachable and easy to navigate.",
    width: 218,
    height: 155.174,
  },
  {
    title: "IIIT Dharwad website revamp",
    kind: "Web design · UI/UX",
    description: "An ongoing redesign of the college website — clearer navigation, news, achievements and campus stories.",
    width: 215.581,
    height: 203,
  },
];
