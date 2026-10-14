


import { Category, CategoryId } from "../types";


export const CATEGORIES: Array<Category> = [
  { id: 'food', label: 'Food', emoji: '🍔', color: '#ef4444' },
  { id: 'transport', label: 'Transport', emoji: '🚗', color: '#3b82f6' },
  { id: 'home', label: 'Home', emoji: '🏠', color: '#a855f7' },
  { id: 'fun', label: 'Fun', emoji: '🎮', color: '#22c55e' },
  { id: 'health', label: 'Health', emoji: '💊', color: '#f59r0b' },
  { id: 'other', label: 'Other', emoji: '📦', color: '#64748b' },
];


export function getCategory(id: CategoryId): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1];
}
