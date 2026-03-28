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

export interface TagStyle {
  color: string;
  bg: string;
}

export const TAG_STYLE: Record<Tag, TagStyle> = {
  about: { color: "#89dceb", bg: "rgba(137,220,235,0.15)" },
  work: { color: "#a6e3a1", bg: "rgba(166,227,161,0.15)" },
  project: { color: "#89b4fa", bg: "rgba(137,180,250,0.15)" },
  blog: { color: "#f9e2af", bg: "rgba(249,226,175,0.15)" },
  contact: { color: "#cba6f7", bg: "rgba(203,166,247,0.15)" },
  skill: { color: "#fab387", bg: "rgba(250,179,135,0.15)" },
};
export const ITEMS: Item[] = [];
