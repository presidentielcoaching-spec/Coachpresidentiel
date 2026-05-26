"use client";

import type { Person } from "./types";

const KEY = "coachpresidentiel.genealogy.people.v1";

export function loadPeople(): Person[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Person[]) : [];
  } catch {
    return [];
  }
}

export function savePeople(people: Person[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(people));
}

export function newId(): string {
  return `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function fullName(p: Person): string {
  return `${p.firstName} ${p.lastName}`.trim();
}

export function getChildren(people: Person[], parentId: string): Person[] {
  return people.filter(
    (p) => p.fatherId === parentId || p.motherId === parentId,
  );
}

export function getAncestors(people: Person[], personId: string): Person[] {
  const byId = new Map(people.map((p) => [p.id, p]));
  const seen = new Set<string>();
  const out: Person[] = [];
  const stack = [personId];
  while (stack.length) {
    const id = stack.pop();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const p = byId.get(id);
    if (!p) continue;
    if (p.fatherId) {
      const f = byId.get(p.fatherId);
      if (f) out.push(f);
      stack.push(p.fatherId);
    }
    if (p.motherId) {
      const m = byId.get(p.motherId);
      if (m) out.push(m);
      stack.push(p.motherId);
    }
  }
  return out;
}

export function getDescendants(people: Person[], rootId: string): Person[] {
  const seen = new Set<string>();
  const out: Person[] = [];
  const stack = [rootId];
  while (stack.length) {
    const id = stack.pop();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const children = getChildren(people, id);
    for (const c of children) {
      out.push(c);
      stack.push(c.id);
    }
  }
  return out;
}
