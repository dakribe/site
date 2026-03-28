export type Tag = "about" | "work" | "project" | "blog" | "contact" | "skill";
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
}

export const TAG_CLASS: Record<Tag, { badge: string; dot: string }> = {
  about: { badge: "bg-cyan/15 text-cyan", dot: "bg-cyan" },
  work: { badge: "bg-green/15 text-green", dot: "bg-green" },
  project: { badge: "bg-blue/15 text-blue", dot: "bg-blue" },
  blog: { badge: "bg-yellow/15 text-yellow", dot: "bg-yellow" },
  contact: { badge: "bg-magenta/15 text-magenta", dot: "bg-magenta" },
  skill: { badge: "bg-orange/15 text-orange", dot: "bg-orange" },
};

export const ITEMS: Item[] = [];
