



export function formatCurrency(value: number, format: string, currency: string): string {
  return new Intl.NumberFormat(format, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

}

export function formatDate(dateIso: string, locale: string): string {
  return new Date(dateIso).toLocaleDateString(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
