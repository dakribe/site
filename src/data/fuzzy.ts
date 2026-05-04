export interface MatchResult {
  match: boolean;
  indices: number[];
  score: number;
}

export interface Segment {
  text: string;
  hl: boolean;
}

export function fuzzyMatch(str: string, pattern: string): MatchResult {
  if (!pattern) return { match: true, indices: [], score: 0 };

  const s = str.toLowerCase();
  const p = pattern.toLowerCase();
  const indices: number[] = [];
  let si = 0,
    pi = 0,
    score = 0,
    lastMatch = -1;

  while (si < s.length && pi < p.length) {
    if (s[si] === p[pi]) {
      indices.push(si);
      if (si === lastMatch + 1) score += 10;
      else if (si === 0 || /[\s\-_/@.]/.test(s[si - 1])) score += 5;
      else score += 1;
      lastMatch = si;
      pi++;
    }
    si++;
  }

  return { match: pi === p.length, indices, score };
}

export function segmentLabel(label: string, indices: number[]): Segment[] {
  if (!indices?.length) return [{ text: label, hl: false }];

  const set = new Set(indices);
  const out: Segment[] = [];
  let cur: Segment | null = null;

  for (let i = 0; i < label.length; i++) {
    const hl = set.has(i);
    if (!cur || cur.hl !== hl) {
      cur = { text: "", hl };
      out.push(cur);
    }
    cur.text += label[i];
  }

  return out;
}
