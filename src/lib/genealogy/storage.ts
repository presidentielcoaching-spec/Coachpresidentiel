"use client";

import type { Person, Testimony } from "./types";

const PEOPLE_KEY = "racines.genealogy.people.v2";
const TESTIMONY_KEY = "racines.memory.testimonies.v1";

export function loadPeople(): Person[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(PEOPLE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Person[]) : [];
  } catch {
    return [];
  }
}

export function savePeople(people: Person[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PEOPLE_KEY, JSON.stringify(people));
}

export function loadTestimonies(): Testimony[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(TESTIMONY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Testimony[]) : [];
  } catch {
    return [];
  }
}

export function saveTestimonies(items: Testimony[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TESTIMONY_KEY, JSON.stringify(items));
}

export function newId(prefix = "p"): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

export function fullName(p: Person): string {
  const main = `${p.firstName} ${p.lastName}`.trim();
  return p.colonialName ? `${main} (dit ${p.colonialName})` : main;
}

export function getChildren(people: Person[], parentId: string): Person[] {
  return people.filter(
    (p) => p.fatherId === parentId || p.motherId === parentId,
  );
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
