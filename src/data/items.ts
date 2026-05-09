export type Tag = "about" | "work" | "project" | "blog" | "contact" | "skill" | "help";
export type ChipStyle = "hl" | "green" | "";

export interface Link {
  label: string;
  href: string;
}

export interface Item {
  id: number;
  tag: Tag;
  label: string;
  meta: string;
  date: string;
  title: string;
  body: string;
  chips: string[];
  chipStyle: ChipStyle[];
  links?: Link[];
  slug?: string;
}

export interface TagStyle {
  color: string;
  bg: string;
}

export const TAG_STYLE: Record<Tag, TagStyle> = {
  about: { color: "#79C2B6", bg: "rgba(121,194,182,0.12)" },
  work: { color: "#9EBB9C", bg: "rgba(158,187,156,0.12)" },
  project: { color: "#86BFD0", bg: "rgba(134,191,208,0.12)" },
  blog: { color: "#FFD7AA", bg: "rgba(255,215,170,0.12)" },
  contact: { color: "#D9ADD4", bg: "rgba(217,173,212,0.12)" },
  skill: { color: "#F9ADA0", bg: "rgba(249,173,160,0.12)" },
  help: { color: "#91A4AD", bg: "rgba(145,164,173,0.12)" },
};

export const ITEMS: Item[] = [
  {
    id: 1,
    tag: "about",
    label: "About me",
    meta: "2 min",
    date: "2026",
    title: "Hi, I'm Dalton",
    body: `<p>wip</p>`,
    chips: [],
    chipStyle: [],
  },
  {
    id: 2,
    tag: "project",
    label: "jager — application tracker",
    meta: "OSS",
    date: "2026",
    title: "jager",
    body: `<p>wip</p>`,
    chips: [],
    chipStyle: [],
    links: [],
  },
  {
    id: 3,
    tag: "project",
    label: "moniqa — financial insights",
    meta: "OSS",
    date: "2026",
    title: "moniqa",
    body: `<p>wip</p>`,
    chips: [],
    chipStyle: [],
    links: [],
  },
  {
    id: 4,
    tag: "project",
    label: "motus - sql migrations",
    meta: "OSS",
    date: "2026",
    title: "motus",
    body: `<p>wip</p>`,
    chips: [],
    chipStyle: [],
    links: [],
  },
  {
    id: 5,
    tag: "blog",
    label: "Hello World",
    meta: "5 min",
    date: "May 2025",
    title: "Example Post",
    body: `<p>blog</p>`,
    chips: [],
    chipStyle: [],
    links: [{ label: "read post ↗", href: "/post/hello-world" }],
  },
  {
    id: 6,
    tag: "skill",
    label: "Languages & tools",
    meta: "",
    date: "",
    title: "Languages & Tools",
    body: `<p>wip</p>`,
    chips: [],
    chipStyle: [],
  },
  {
    id: 7,
    tag: "contact",
    label: "Get in touch",
    meta: "",
    date: "",
    title: "Contact",
    body: `<p>wip</p>`,
    chips: [],
    chipStyle: [],
    links: [
      { label: "email ↗", href: "mailto:hello@dakribe.com" },
      { label: "github ↗", href: "https://github.com/dakribe" },
      { label: "linkedin ↗", href: "https://linkedin.com/in/dakribe" },
      { label: "twitter/x ↗", href: "https://x.com/dakribe" },
    ],
  },
  {
    id: 8,
    tag: "help",
    label: "--help",
    meta: "",
    date: "",
    title: "How to use this site",
    body: `<p><strong>Navigating:</strong> use <kbd style="background:rgba(166,173,200,0.1);border:1px solid rgba(166,173,200,0.2);border-radius:3px;padding:0 4px">↑</kbd> <kbd style="background:rgba(166,173,200,0.1);border:1px solid rgba(166,173,200,0.2);border-radius:3px;padding:0 4px">↓</kbd> or <kbd style="background:rgba(166,173,200,0.1);border:1px solid rgba(166,173,200,0.2);border-radius:3px;padding:0 4px">Ctrl-K</kbd> <kbd style="background:rgba(166,173,200,0.1);border:1px solid rgba(166,173,200,0.2);border-radius:3px;padding:0 4px">Ctrl-J</kbd> to move. Mouse hover works too.</p>
<p><strong>Filtering:</strong> just start typing. <kbd style="background:rgba(166,173,200,0.1);border:1px solid rgba(166,173,200,0.2);border-radius:3px;padding:0 4px">Esc</kbd> clears the query.</p>
<p><strong>Built with:</strong> TanStack Start, React, Tailwind v4, TypeScript.</p>`,
    chips: ["TanStack Start", "React", "Tailwind v4", "TypeScript"],
    chipStyle: [],
  },
];
